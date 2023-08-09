import Service from "./service";

export interface ServicesResponse {
  services: Service[];
  page: number;
  totalPages: number;
}
