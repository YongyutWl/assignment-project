"use client";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
type ItemProps = {
  key: string;
  name: string;
  type: string;
};

export default function fruititem({ FruitItem }: { FruitItem: ItemProps }) {
  return (
    <React.Fragment>
      <ListItem key={FruitItem.key}>
        <ListItemButton
          onClick={(e) => {
            e.preventDefault();
            console.log(FruitItem);
          }}
        >
          <ListItemText primary={FruitItem.name} />
        </ListItemButton>
      </ListItem>
    </React.Fragment>
  );
}
