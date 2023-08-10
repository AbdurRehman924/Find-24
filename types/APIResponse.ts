import { SearchResults } from "algoliasearch-helper";
import Service from "./service";

export interface ServicesResponse {
  services: Service[];
  page: number;
  totalPages: number;
  categoryFacets: SearchResults.FacetValue[];
  ratingFacets: SearchResults.FacetValue[];
}
