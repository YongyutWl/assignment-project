"use client";
import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import VegetableItem from "./vegetableitem";
import { objectType } from "@/views/todo";

const Vegetable = ({
  vegetableList,
  handleVegetable,
}: {
  vegetableList: objectType[];
  handleVegetable: (vegetableItem: objectType) => void;
}) => {
  return (
    <React.Fragment>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", bgcolor: "#EEF2F3", padding: "10px" }}
      >
        Vegetable
      </Typography>

      <Grid
        item
        sx={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <Stack spacing={2}>
          {vegetableList.map((item) => {
            return (
              <VegetableItem
                key={item.key}
                vegetableItem={item}
                handleVegetable={handleVegetable}
              />
            );
          })}
        </Stack>
      </Grid>
    </React.Fragment>
  );
};
export default Vegetable;
