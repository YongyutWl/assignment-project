"use client";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
import { objectType } from "@/views/todo";

export default function FruitItem({
  FruitItem,
  handleFruitItem,
}: {
  FruitItem: objectType;
  handleFruitItem: (FruitItem: objectType) => void;
}) {
  return (
    <React.Fragment>
      <ListItem key={FruitItem.key}>
        <ListItemButton
          onClick={(e) => {
            e.preventDefault();
            handleFruitItem(FruitItem as objectType);
          }}
        >
          <ListItemText primary={FruitItem.name} />
        </ListItemButton>
      </ListItem>
    </React.Fragment>
  );
}
