import { Category } from "@prisma/client";
import React from "react";

interface CategoriesProps {
  data: Category[];
}

export const Categories = ({ data }: CategoriesProps) => {
  return <div>Categories</div>;
};
