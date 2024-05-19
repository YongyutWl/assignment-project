"use client";
import React, { useEffect, useRef } from "react";
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
  handleVegetable,
}: {
  vegetableItem: VegetableItemProps;
  handleVegetable: (vegetableItem: VegetableItemProps) => void;
}) {
  const INTERVAL_MS = 5000;
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      handleVegetable(vegetableItem);
    }, INTERVAL_MS);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [vegetableItem, handleVegetable]);
  return (
    <React.Fragment>
      <ListItem key={vegetableItem.key}>
        <ListItemButton
          onClick={(e) => {
            e.preventDefault();
            handleVegetable(vegetableItem);
          }}
        >
          <ListItemText primary={vegetableItem.name} />
        </ListItemButton>
      </ListItem>
    </React.Fragment>
  );
}
