"use client";
import React, { useEffect } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
type VegetableItemProps = {
  key: string;
  name: string;
  type: string;
};

export default function VegetableItem({
  vegetableItem,
  funchange,
}: {
  vegetableItem: VegetableItemProps;
  funchange: any;
}) {
  const throwbackVegetable = async () => {
    setTimeout(() => {
      const timeout = setTimeout(() => {}, 5000);

      return () => {
        clearTimeout(timeout);
      };
    });
  };
  useEffect(() => {
    console.log("vegetableItem", vegetableItem);

    setTimeout(() => {
      const timeout = setTimeout(() => {
        funchange(vegetableItem);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    });
  }, [vegetableItem]);
  return (
    <React.Fragment>
      <ListItem key={vegetableItem.key}>
        <ListItemButton
          onClick={(e) => {
            e.preventDefault();
            console.log(vegetableItem);
          }}
        >
          <ListItemText primary={vegetableItem.name} />
        </ListItemButton>
      </ListItem>
    </React.Fragment>
  );
}
