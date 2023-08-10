import algoliaSearch from "algoliasearch/lite";
import algoliaSearchHelper from "algoliasearch-helper";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const helper = algoliaHelper();

  if (body.page) {
    helper.setPage(body.page);
  }

  helper.search();

  return new Promise((resolve, reject) => {
    helper.on("result", (results) => {
      const categoryFacets = results.results.getFacetValues(
        "category",
        {
          sortBy: ["count:desc"],
        },
      );
      const ratingFacets = results.results.getFacetValues("rating", {
        sortBy: ["name:asc"],
      });

      resolve({
        services: results.results.hits,
        page: results.results.page,
        totalPages: results.results.nbPages,
        categoryFacets,
        ratingFacets,
      });
    });
    helper.on("error", (error) => {
      reject(error);
    });
  });
});

function algoliaHelper() {
  const { appId, apiKey, indexName } = useRuntimeConfig().algolia;

  const options = {
    hitsPerPage: 10,
    disjunctiveFacets: ["category", "rating"],
    maxValuesPerFacet: 20,
  };

  const searchClient = algoliaSearch(appId, apiKey);

  const helper = algoliaSearchHelper(
    searchClient,
    indexName,
    options,
  );
  return helper;
}
