"use client";
import React, { useEffect, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Grid, ListItem, Stack, Typography } from "@mui/material";
import { nanoid } from "nanoid";
import Fruit from "../views/todo/component/fruit";
import Vegetable from "./todo/component/vegetable";
import { listTodo } from "../utils/data";
export type objectType = {
  type: string;
  name: string;
  timeStamp: Date;
  key: string;
};

const Todo = () => {
  const mapKeyIdToList: objectType[] = listTodo.map((item) => {
    return {
      key: nanoid(),
      ...item,
      timeStamp: new Date(),
    };
  });

  const [dataList, setDataList] = useState<objectType[]>(mapKeyIdToList);
  const [fruitList, setFruitList] = useState<objectType[]>([]);
  const [vegetableList, setVegetableList] = useState<objectType[]>([]);

  const handleRemoveItem = (data: objectType) => {
    setDataList(dataList.filter((list) => list.name !== data.name));
  };

  const handleData = (data: objectType) => {
    const date = new Date();
    const nextFiveSec = new Date(date.getTime() + 5000);
    if (data.type === "Fruit")
      setFruitList((prev) => [...prev, { ...data, timeStamp: nextFiveSec }]);
    if (data.type === "Vegetable")
      setVegetableList((prev) => [
        ...prev,
        { ...data, timeStamp: nextFiveSec },
      ]);
    handleRemoveItem(data);
    return;
  };

  const handleRackToList = (array: objectType[]): void => {
    array.map((element: objectType): void => {
      const date = new Date();
      const getCurrentSec = date.getSeconds();
      const getDataSec = new Date(element.timeStamp).getSeconds();
      if (getCurrentSec === getDataSec || getCurrentSec > getDataSec) {
        if (element.type === "Fruit") {
          setFruitList((prev) =>
            prev.filter((list) => list.key !== element.key)
          );
          setDataList((prev) => [
            ...prev,
            { ...element, timeStamp: new Date() },
          ]);
        }

        if (element.type === "Vegetable") {
          setVegetableList((prev) =>
            prev.filter((list) => list.key !== element.key)
          );

          setDataList((prev) => [
            ...prev,
            { ...element, timeStamp: new Date() },
          ]);
        }
      }

      return;
    });
  };

  const handleDeleteFruit = (fruitItem: objectType) => {
    setFruitList(fruitList.filter((list) => list.key !== fruitItem.key));
    setDataList((prev) => [...prev, { ...fruitItem, timeStamp: new Date() }]);
  };
  const handleDeleteVegetable = (vegetableItem: objectType) => {
    setVegetableList(
      vegetableList.filter((list) => list.key !== vegetableItem.key)
    );
    setDataList((prev) => [
      ...prev,
      { ...vegetableItem, timeStamp: new Date() },
    ]);
  };

  useEffect(() => {
    const array = [...fruitList, ...vegetableList];
    const interval = setInterval(() => {
      if (array.length > 0) handleRackToList(array);
    }, 1000);
    return () => clearInterval(interval);
  }, [fruitList, vegetableList]);

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
                {dataList.map((item: objectType) => {
                  return (
                    <ListItem key={item.key}>
                      <ListItemButton
                        onClick={(e) => {
                          e.preventDefault();
                          handleData(item);
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
          <Fruit fruitList={fruitList} handleFruit={handleDeleteFruit} />
        </Grid>
        <Grid item xs={4}>
          <Vegetable
            vegetableList={vegetableList}
            handleVegetable={handleDeleteVegetable}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Todo;
