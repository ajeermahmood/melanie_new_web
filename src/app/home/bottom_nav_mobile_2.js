"use client";
import { IconButton } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { makeStyles } from "@mui/styles";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "black",
    height: "65px",
    width: "100%",
    position: "fixed",
    bottom: 0,
    "& .MuiBottomNavigationAction-root": {
      "@media (max-width: 768px)": {
        minWidth: "auto",
        padding: "6px 0",
      },
    },
    "& .MuiButtonBase-root": {
      color: "white",
    },
    "& .Mui-selected": {
      color: "white",
    },
    "& .MuiBottomNavigationAction-label": {
      fontSize: "12px",
    },
  },

  drawer: {
    "& .MuiDrawer-paper": {
      height: "60%",
    },
  },
});

export default function BottomNavigationMobile2() {
  const [value, setValue] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const classes = useStyles();
  const router = useRouter();

  useEffect(() => {
    setTimeout(function () {
      setShowNav(true);
    }, 0);
  }, []);

  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  const handleClickOpenBottomSheet = () => {
    setOpenBottomSheet(true);
  };

  const handleCloseBottomSheet = () => {
    setOpenBottomSheet(false);
  };

  const bottomSheetMenu = [
    {
      title: "All Properties",
      link: "/all-properties",
    },
    {
      title: "Premium Sales",
      link: "/premium-sales",
    },
    {
      title: "Premium Rentals",
      link: "/premium-rentals",
    },
    {
      title: "Investor Deals",
      link: "/see-all",
    },
    {
      title: "In Focus",
      link: "/#in-focus",
    },
    {
      title: "Why Dubai",
      link: "/#why-dubai",
    },
    {
      title: "Projects",
      link: "/projects",
    },
  ];

  return showNav ? (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        icon={<i className="far fa-home" />}
        onClick={() => router.push("/")}
      />

      <BottomNavigationAction
        label="Contact"
        icon={<i className="far fa-phone" />}
        href="tel:+012305094502"
      />

      <BottomNavigationAction
        label="Menu"
        icon={<i className="far fa-bars" />}
        onClick={handleClickOpenBottomSheet}
      />

      <SwipeableDrawer
        className={classes.drawer}
        anchor={"bottom"}
        open={openBottomSheet}
        onClose={handleCloseBottomSheet}
        onOpen={handleClickOpenBottomSheet}
      >
        <div className="row m-0 justify-content-between bottom-border-grey-2">
          <div className="col-10 p0">
            <p className="fz17 fw400 px20 py5 m-0 color-gold">Menu</p>
          </div>
          <div className="col-2 p0 d-flex justify-content-end pr10">
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleCloseBottomSheet}
              aria-label="close"
              className="w43"
            >
              <i className="far fa-close color-gold" />
            </IconButton>
          </div>
        </div>
        <List>
          {bottomSheetMenu.map((bt, index) => (
            <ListItem
              key={index}
              disablePadding
              onClick={() => {
                router.push(bt.link);
                handleCloseBottomSheet();
              }}
              style={{
                height: "40px",
              }}
            >
              <ListItemButton>
                <ListItemText primary={bt.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </BottomNavigation>
  ) : (
    <></>
  );
}
