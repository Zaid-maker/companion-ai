import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ModeToggle = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild></DropdownMenuTrigger>
    </DropdownMenu>
  );
};
