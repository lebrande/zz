export type BoatData = {
  id: string;
  boat_summary: {
    name: string;
    images: string[];
    year: number;
    model: {
      name: string;
    },
    length: number;
    cabins: number;
    nr_guests: number;
  },
  marina: {
    country: string;
    locality: string;
  },
};