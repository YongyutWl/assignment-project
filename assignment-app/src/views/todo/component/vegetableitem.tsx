"use client";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
import { objectType } from "@/views/todo";

export default function VegetableItem({
  vegetableItem,
  handleVegetable,
}: {
  vegetableItem: objectType;
  handleVegetable: (vegetableItem: objectType) => void;
}) {
  return (
    <React.Fragment>
      <ListItem key={vegetableItem.key}>
        <ListItemButton
          onClick={(e) => {
            e.preventDefault();
            handleVegetable(vegetableItem as objectType);
          }}
        >
          <ListItemText primary={vegetableItem.name} />
        </ListItemButton>
      </ListItem>
    </React.Fragment>
  );
}
