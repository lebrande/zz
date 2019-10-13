export type BoatData = {
  id: string;
  boat_summary: {
    name: string;
    images: string[];
    year: number;
    model: {
      name: string;
    },
  },
  marina: {
    country: string;
    locality: string;
  },
};