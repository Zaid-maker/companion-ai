"use client";

import * as z from "zod";
import { Category, Companion } from "@prisma/client";

interface CompanionFormProps {
  initialData: Companion | null;
  categories: Category[];
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required for the companion",
  }),
  description: z.string().min(1, {
    message: "Description is required for the companion",
  }),
  instructions: z.string().min(200, {
    message:
      "Instructions is required for the companion, atleast 200 characters",
  }),
  seed: z.string().min(200, {
    message: "Seed is required for the companion, atleast 200 characters",
  }),
  src: z.string().min(1, {
    message: "Image is required for the companion",
  }),
  categoryId: z.string().min(200, {
    message: "Category is required for the companion",
  }),
});

export const CompanionForm = ({
  initialData,
  categories,
}: CompanionFormProps) => {
  return <div>CompanionForm</div>;
};
