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

  if (body.resetSingleFacet && body.facetName && !body.isNumeric) {
    helper.removeDisjunctiveFacetRefinement(body.facetName);
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
  } else {
    helper.setPage(0);
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

      resolve({
        services: results.results.hits,
        page: results.results.page,
        totalPages: results.results.nbPages,
        minPrice: results.results.getFacetStats(constants.PRICE_FACET)
          .min,
        maxPrice: results.results.getFacetStats(constants.PRICE_FACET)
          .max,
        categoryFacets,
        ratingFacets,
      });
    });
    helper.on("error", (error) => {
      reject(error);
    });
  });
});
