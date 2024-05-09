"use client";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
type VegetableItemProps = {
  key: string;
  name: string;
  type: string;
};

export default function VegetableItem({
  vegetableList,
}: {
  vegetableList: VegetableItemProps;
}) {
  return (
    <React.Fragment>
      <ListItem key={vegetableList.key}>
        <ListItemButton
          onClick={(e) => {
            e.preventDefault();
            console.log(vegetableList);
          }}
        >
          <ListItemText primary={vegetableList.name} />
        </ListItemButton>
      </ListItem>
    </React.Fragment>
  );
}
