"use client";
import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Grid, ListItem, Stack, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import FruitItem from "../component/fruititem";
export type Props = {
  key: string;
  name: string;
  type: string;
};

export default function fruit({ fruitList }: { fruitList: Props[] }) {
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
          {/* {fruitList.map((item, index) => {
            return (
              <ListItem key={item.key}>
                <ListItemButton
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(item);
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          })} */}
          {fruitList.map((item, index) => {
            return <FruitItem key={item.key} FruitItem={item} />;
          })}
          {/* <FruitItem
            FruitItem={{ key: nanoid(), name: "Apple", type: "Fruit" }}
          /> */}
        </Stack>
      </Grid>
    </React.Fragment>
  );
}
