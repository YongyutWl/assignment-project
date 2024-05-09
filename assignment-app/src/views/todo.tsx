"use client";
import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Grid, ListItem, Stack, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import Fruit from "../views/todo/component/fruit";
import Vegetable from "./todo/component/vegetable";

type Props = {};
export type fruitOrVegetableType = {
  type: string;
  name: string;
  key: string;
};
function Todo({}: Props) {
  const listTodo = [
    {
      type: "Fruit",
      name: "Apple",
    },
    {
      type: "Vegetable",
      name: "Broccoli",
    },
    {
      type: "Vegetable",
      name: "Mushroom",
    },
    {
      type: "Fruit",
      name: "Banana",
    },
    {
      type: "Vegetable",
      name: "Tomato",
    },
    {
      type: "Fruit",
      name: "Orange",
    },
    {
      type: "Fruit",
      name: "Mango",
    },
    {
      type: "Fruit",
      name: "Pineapple",
    },
    {
      type: "Vegetable",
      name: "Cucumber",
    },
    {
      type: "Fruit",
      name: "Watermelon",
    },
    {
      type: "Vegetable",
      name: "Carrot",
    },
  ];
  const mapKeyIdToList = listTodo.map((item, index) => {
    return {
      key: nanoid(),
      ...item,
    };
  });

  const [todoLists, setTodoLists] =
    useState<fruitOrVegetableType[]>(mapKeyIdToList);
  const [fruitList, setFruitList] = useState<fruitOrVegetableType[]>([]);
  const [vegetableList, setVegetableList] = useState<fruitOrVegetableType[]>(
    []
  );
  console.log(mapKeyIdToList);
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", bgcolor: "#EEF2F3", padding: "20px" }}
          >
            Todo List
          </Typography>
        </Grid>
        <Grid item sx={{ width: "30%" }}>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", bgcolor: "#EEF2F3", padding: "10px" }}
          >
            All
          </Typography>

          <Grid
            item
            sx={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <Stack spacing={2}>
              {todoLists.map((item: fruitOrVegetableType, index) => {
                return (
                  <ListItem key={item.key}>
                    <ListItemButton
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.type === "Fruit") {
                          setFruitList([...fruitList, item]);
                        }
                        if (item.type === "Vegetable") {
                          setVegetableList([...vegetableList, item]);
                        }
                        const newTodoLists = todoLists.filter(
                          (ele) => ele.key !== item.key
                        );
                        setTodoLists(newTodoLists);
                      }}
                    >
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
        <Grid item sx={{ width: "30%" }}>
          <Fruit fruitList={fruitList} />
        </Grid>
        <Grid item sx={{ width: "30%" }}>
          <Vegetable fruitList={vegetableList} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Todo;
