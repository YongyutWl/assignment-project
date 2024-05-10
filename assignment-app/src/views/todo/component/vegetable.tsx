"use client";
import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import VegetableItem from "./vegetableitem";
export type Props = {
  key: string;
  name: string;
  type: string;
};

export default function Vegetable({
  vegetableList,
  handleList,
}: {
  vegetableList: Props[];
  handleList: any;
}) {
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
          {vegetableList.map((item, index) => {
            return <VegetableItem key={item.key} vegetableItem={item} funchange={handleList}/>;
          })}
        </Stack>
      </Grid>
    </React.Fragment>
  );
}
