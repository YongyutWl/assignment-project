"use client";
import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Grid, ListItem, Stack, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import Fruit from "../views/todo/component/fruit";
import Vegetable from "./todo/component/vegetable";

export type fruitOrVegetableType = {
  type: string;
  name: string;
  key: string;
};
const Todo = () => {
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
  const mapKeyIdToList = listTodo.map((item) => {
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

  const handleList = (item: fruitOrVegetableType) => {
    const filter = todoLists.filter((ele) => ele.key !== item.key);
    if (item.type === "Fruit") {
      setFruitList((prev) => [...prev, item]);
    }
    if (item.type === "Vegetable") {
      setVegetableList((prev) => [...prev, item]);
    }
    setTodoLists(filter);
  };
  const handleFruit = (item: fruitOrVegetableType) => {
    setFruitList((prev) => {
      return prev.filter((ele) => ele.key !== item.key);
    });
    setTodoLists((prev) => {
      return [...prev, item];
    });
  };

  const handleVegetable = (item: fruitOrVegetableType) => {
    setVegetableList((prev) => {
      return prev.filter((ele) => ele.key !== item.key);
    });
    setTodoLists((prev) => {
      return [...prev, item];
    });
  };
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
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          p: 1,
          gap: 1,
        }}
      >
        <Grid item xs={3.5}>
          <Grid item>
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
                {todoLists.map((item: fruitOrVegetableType) => {
                  return (
                    <ListItem key={item.key}>
                      <ListItemButton
                        onClick={(e) => {
                          e.preventDefault();
                          handleList(item);
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
        </Grid>
        <Grid item xs={4}>
          <Fruit fruitList={fruitList} handleFruit={handleFruit} />
        </Grid>
        <Grid item xs={4}>
          <Vegetable
            vegetableList={vegetableList}
            handleVegetable={handleVegetable}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Todo;
