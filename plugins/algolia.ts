import algoliaSearch from "algoliasearch/lite";
import algoliaSearchHelper from "algoliasearch-helper";
import constants from "~/constants";

export default defineNuxtPlugin((nuxtApp) => {
  const { appId, apiKey, indexName } =
    useRuntimeConfig().public.algolia;

  const options = {
    hitsPerPage: constants.HITS_PER_PAGE,
    disjunctiveFacets: constants.DISJUNCTIVE_FACETS,
    maxValuesPerFacet: constants.MAX_VALUES_PER_FACET,
  };

  const searchClient = algoliaSearch(appId, apiKey);

  const helper = algoliaSearchHelper(
    searchClient,
    indexName,
    options,
  );

  nuxtApp.provide("algoliaHelper", helper);
});
