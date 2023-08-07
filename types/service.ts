export default interface Service {
  id: string;
  firstName: string;
  lastName: string;
  category: string;
  charges: number;
  charges_type: string;
  image: string;
  reviewsCount: number;
  ratings: number;
  _geoloc: Geoloc;
  objectID: string;
  _highlightResult: any;
}

export interface Geoloc {
  lat: number;
  lng: number;
}
