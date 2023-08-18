export default interface Service {
  id: string;
  firstName: string;
  lastName: string;
  category: string;
  charges: number;
  charges_type: string;
  image: string;
  reviewsCount: number;
  rating: number;
  _geoloc: Geoloc;
  objectID: string;
  _highlightResult: any;
}

export interface Geoloc {
  lat: number;
  lng: number;
}

export interface Query {
  location: {
    lat: number;
    lng: number;
  };
  category: string;
}
