"use client";

import * as z from "zod";
import { Category, Companion } from "@prisma/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      description: "",
      instructions: "",
      seed: "",
      src: "",
      categoryId: undefined,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return <div>CompanionForm</div>;
};
