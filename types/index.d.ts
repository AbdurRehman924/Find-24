import { AlgoliaSearchHelper } from "algoliasearch-helper";

declare module "#app" {
  interface NuxtApp {
    $algoliaHelper: AlgoliaSearchHelper;
  }
}
