import algoliaSearch from "algoliasearch/lite";
import algoliaSearchHelper, {
  SearchResults,
} from "algoliasearch-helper";
import constants from "~/constants";

const { appId, apiKey, indexName } = useRuntimeConfig().algolia;

const options = {
  hitsPerPage: constants.HITS_PER_PAGE,
  disjunctiveFacets: constants.DISJUNCTIVE_FACETS,
  maxValuesPerFacet: constants.MAX_VALUES_PER_FACET,
};

const searchClient = algoliaSearch(appId, apiKey);

const helper = algoliaSearchHelper(searchClient, indexName, options);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body) {
    if (body.category) {
      helper.setQueryParameter(
        "filters",

        `${constants.CATEGORY_FACET}:${body.category}`,
      );
    }
    if (body.location) {
      helper.setQueryParameter(
        "aroundLatLng",
        `${body.location.lat},${body.location.lng}`,
      );
      helper.setQueryParameter(
        "aroundRadius",
        constants.MAX_AROUND_RADIUS,
      );
    }

    if (body.resetSingleFacet && body.facetName && !body.isNumeric) {
      helper.removeDisjunctiveFacetRefinement(body && body.facetName);
    } else if (
      body.resetSingleFacet &&
      body.facetName &&
      body.isNumeric
    ) {
      helper.removeNumericRefinement(body.facetName);
    }

    if (body.facet && !body.isNumeric) {
      helper.toggleFacetRefinement(body.facet.name, body.facet.value);
    } else if (body.facet && body.isNumeric) {
      helper.addNumericRefinement(
        body.facet.name,
        ">=",
        parseInt(body.facet.range.min),
      );
      helper.addNumericRefinement(
        body.facet.name,
        "<=",
        parseInt(body.facet.range.max),
      );
    }

    if (body.page) {
      helper.setPage(body.page);
    }
  }

  helper.search();

  return new Promise((resolve, reject) => {
    helper.on("result", (results) => {
      const categoryFacets = results.results.getFacetValues(
        constants.CATEGORY_FACET,
        {},
      );
      const ratingFacets = results.results.getFacetValues(
        constants.RATING_FACET,
        {
          sortBy: ["name:asc"],
        },
      );
      const services = results.results.hits;

      const minPrice = Math.min(
        ...services.map((service) => service.charges),
      );
      const maxPrice = Math.max(
        ...services.map((service) => service.charges),
      );
      resolve({
        services,
        page: results.results.page,
        totalPages: results.results.nbPages,
        overAllMinPrice: results.results.getFacetStats(
          constants.PRICE_FACET,
        ).min,
        overAllMaxPrice: results.results.getFacetStats(
          constants.PRICE_FACET,
        ).max,
        minPrice,
        maxPrice,
        categoryFacets,
        ratingFacets,
      });
    });
    helper.on("error", (error) => {
      reject(error);
    });
  });
});
