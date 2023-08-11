import { SearchResults } from "algoliasearch-helper";
import Service from "./service";

export interface ServicesResponse {
  services: Service[];
  page: number;
  totalPages: number;
  overAllMinPrice: number;
  overAllMaxPrice: number;
  minPrice: number;
  maxPrice: number;
  categoryFacets: SearchResults.FacetValue[];
  ratingFacets: SearchResults.FacetValue[];
}
