"use client";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Grid } from "@mui/material";
export default function Home() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    path: string
  ) => {
    setSelectedIndex(index);
    router.push(`/${path}`);
  };
  return (
    <React.Fragment>
      <Grid
        sx={{
          // width: "100%",
          // minWidth: 900,
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <List
          component="nav"
          aria-label="main mailbox folders"
          sx={{ width: "50%" }}
        >
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              handleListItemClick(event, 0, "todo")
            }
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="1. Auto Delete Todo List" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              handleListItemClick(event, 1, "manage-data")
            }
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="2. Manage data from API" />
          </ListItemButton>
        </List>
      </Grid>
    </React.Fragment>
  );
}
