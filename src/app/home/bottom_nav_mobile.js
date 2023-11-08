"use client";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    "& .MuiBottomNavigationAction-root": {
      "@media (max-width: 768px)": {
        minWidth: "auto",
        padding: "6px 0",
      },
    },
  },
});

export default function BottomNavigationMobile() {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  return (
    // <Box sx={{ minWidth: "100%" }}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Recents"
        icon={<i className="far fa-bars" />}
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<i className="far fa-bars" />}
      />
      <BottomNavigationAction
        label="Nearby"
        icon={<i className="far fa-bars" />}
      />
    </BottomNavigation>
    // </Box>
  );
}
