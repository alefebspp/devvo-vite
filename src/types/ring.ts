export type ForgedBy = "elves" | "dwarves" | "men" | "sauron";

export interface Ring {
  id: string;
  name: string;
  power: string;
  carrier: string;
  forgedBy: ForgedBy;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export type RingFormData = Omit<Ring, "id">;
