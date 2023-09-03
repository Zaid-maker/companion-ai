"use client";

import { Category } from "@prisma/client";
import React from "react";

interface CategoriesProps {
  data: Category[];
}

export const Categories = ({ data }: CategoriesProps) => {
  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1">
      <button>Newest</button>
    </div>
  );
};
