"use client";
import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import FruitItem from "./fruititem";
export type Props = {
  key: string;
  name: string;
  type: string;
};

export default function Fruit({
  fruitList,
  handleFruit,
}: {
  fruitList: Props[];
  handleFruit: any;
}) {
  return (
    <React.Fragment>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", bgcolor: "#EEF2F3", padding: "10px" }}
      >
        Fruit
      </Typography>

      <Grid
        item
        sx={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <Stack spacing={2}>
          {fruitList.map((item, index) => {
            return (
              <FruitItem
                key={item.key}
                FruitItem={item}
                handleFruitItem={handleFruit}
              />
            );
          })}
        </Stack>
      </Grid>
    </React.Fragment>
  );
}
