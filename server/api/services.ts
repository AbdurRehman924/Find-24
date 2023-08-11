import algoliaSearch from "algoliasearch/lite";
import algoliaSearchHelper, {
  SearchResults,
} from "algoliasearch-helper";

const { appId, apiKey, indexName } = useRuntimeConfig().algolia;

const options = {
  hitsPerPage: 10,
  disjunctiveFacets: ["category", "rating", "charges"],
  maxValuesPerFacet: 20,
};

const searchClient = algoliaSearch(appId, apiKey);

const helper = algoliaSearchHelper(searchClient, indexName, options);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.facet && !body.isNumeric) {
    helper.toggleFacetRefinement(body.facet.name, body.facet.value);
  } else if (body.isNumeric) {
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
        "category",
        {},
      );
      const ratingFacets = results.results.getFacetValues("rating", {
        sortBy: ["name:asc"],
      });

      resolve({
        services: results.results.hits,
        page: results.results.page,
        totalPages: results.results.nbPages,
        minPrice: results.results.getFacetStats("charges").min,
        maxPrice: results.results.getFacetStats("charges").max,
        categoryFacets,
        ratingFacets,
      });
    });
    helper.on("error", (error) => {
      reject(error);
    });
  });
});
