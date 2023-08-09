import algoliaSearch from "algoliasearch/lite";
import algoliaSearchHelper from "algoliasearch-helper";

export default defineEventHandler((event) => {
  const helper = algoliaHelper();
  helper.search();
  return new Promise((resolve, reject) => {
    helper.on("result", (results) => {
      resolve({
        services: results.results.hits,
        page: results.results.page,
        totalPages: results.results.nbPages,
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
    disjunctiveFacets: [
      "category",
      "charges",
      "charges_type",
      "ratings",
      "reviewsCount",
    ],
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
