import z from "zod";

export const createRingSchema = z.object({
  name: z.string().min(1, { message: "Required field" }),
  power: z
    .string()
    .min(1, { message: "Required field" })
    .max(50, { message: "Max of 50 caracters" }),
  carrier: z.string().min(1, { message: "Required field" }),
  forgedBy: z.string().min(1, { message: "Required field" }),
  imageUrl: z.string().url({ message: "Invalid url" }),
});

export type CreateRingFormData = z.infer<typeof createRingSchema>;
