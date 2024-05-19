"use client";
import React, { useEffect, useRef } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";
type ItemProps = {
  key: string;
  name: string;
  type: string;
};

export default function FruitItem({
  FruitItem,
  handleFruitItem,
}: {
  FruitItem: ItemProps;
  handleFruitItem: (FruitItem: ItemProps) => void;
}) {
  const INTERVAL_MS = 5000;
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      handleFruitItem(FruitItem);
    }, INTERVAL_MS);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [FruitItem, handleFruitItem]);
  return (
    <React.Fragment>
      <ListItem key={FruitItem.key}>
        <ListItemButton
          onClick={(e) => {
            e.preventDefault();
            handleFruitItem(FruitItem);
          }}
        >
          <ListItemText primary={FruitItem.name} />
        </ListItemButton>
      </ListItem>
    </React.Fragment>
  );
}
