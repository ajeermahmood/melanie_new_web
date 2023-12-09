"use client";

import LoginSignupModal from "@/components/common/login-signup-modal";
import SidebarPanel from "@/components/common/sidebar-panel";
import { Divider } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    width: 380,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const [subMenuSaleOpen, setSubMenuSaleOpen] = useState(false);
  const [subMenuRentOpen, setSubMenuRentOpen] = useState(false);
  const [subMenuDealsOpen, setSubMenuDealsOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const subHandleClick = (event) => {
    if (event == "sale") {
      subMenuSaleOpen ? setSubMenuSaleOpen(false) : setSubMenuSaleOpen(true);
    } else if (event == "rent") {
      subMenuRentOpen ? setSubMenuRentOpen(false) : setSubMenuRentOpen(true);
    } else {
      subMenuDealsOpen ? setSubMenuDealsOpen(false) : setSubMenuDealsOpen(true);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openListProperty, setOpenListProperty] = useState(false);

  const handleClickOpenListProperty = () => {
    setOpenListProperty(true);
  };

  const handleCloseListProperty = () => {
    setOpenListProperty(false);
  };

  const StyledBorderTextField = styled(TextField)`
    & label.Mui-focused {
      color: #c49f5a;
    }
    & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: #c49f5a;
      }
    }
  `;

  return (
    <>
      <header className={`header-nav nav-homepage-style at-home2 main-menu pb0`}>
        <nav className="posr">
          <div className="container posr">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos mr40">
                    <Link className="header-logo logo1" href="/">
                      <Image
                        width={130}
                        height={40}
                        src="/images/logo/INDUS_NEW_LOGO_SMALL-2.webp"
                        alt="Header Logo"
                      />
                    </Link>
                    <Link className="header-logo logo2" href="/">
                      <Image
                        width={138}
                        height={44}
                        src="/images/logo/INDUS_NEW_LOGO_SMALL-2.webp"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  {/* End Logo */}

                  {/* <MainMenu /> */}
                  {/* End Main Menu */}
                </div>
              </div>
              {/* End .col-auto */}

              <div className="col-auto">
                <div className="d-flex align-items-center">
                  <p
                    className="text-light m0 custom-link"
                    onClick={handleClickOpenListProperty}
                  >
                    Talk To Us
                  </p>
                  <Dialog
                    open={openListProperty}
                    onClose={handleCloseListProperty}
                  >
                    <DialogTitle className="mt10" align="center">
                      Talk To Us
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText
                        className="font-style-2"
                        fontSize={20}
                        align="center"
                      >
                        Tell us specifications about your future property.
                      </DialogContentText>
                      <StyledBorderTextField
                        className="mt20"
                        autoFocus
                        margin="dense"
                        id="name"
                        label="First Name"
                        type="text"
                        fullWidth
                        // variant="standard"
                      />
                      <StyledBorderTextField
                        // className="mt20"
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Last Name"
                        type="text"
                        fullWidth
                        // variant="standard"
                      />
                      <StyledBorderTextField
                        // className="mt20"
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        fullWidth
                        // variant="standard"
                      />
                      <StyledBorderTextField
                        // className="mt20"
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Contact Number"
                        type="number"
                        fullWidth
                        // variant="standard"
                      />
                      <StyledBorderTextField
                        // className="mt20"
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Tell Us.."
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        // variant="standard"
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button
                        className="color-gold"
                        onClick={handleCloseListProperty}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="color-gold"
                        onClick={handleCloseListProperty}
                      >
                        Send
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                    className="menu-btn-home-first bdrs60 mx-2 mx-xl-4"
                  >
                    <i className="fal fa-bars mr10" />
                    <i className="far fa-user-circle fz16" />
                  </Button>

                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <div className="row m-0">
                      <div className="col-6 p0 border-right">
                        <Link href={"/all-properties"}>
                          <MenuItem onClick={handleClose} disableRipple>
                            <p className="fz15 fw500 m0">All Properties</p>
                          </MenuItem>
                        </Link>
                        <Link href={"/premium-sales"}>
                          <MenuItem onClick={handleClose} disableRipple>
                            <p className="fz15 fw500 m0">Premium Sales</p>
                          </MenuItem>
                        </Link>
                        <Link href={"/premium-rentals"}>
                          <MenuItem onClick={handleClose} disableRipple>
                            <p className="fz15 fw500 m0">Premium Rentals</p>
                          </MenuItem>
                        </Link>
                        <MenuItem
                          onClick={() => subHandleClick("sale")}
                          disableRipple
                        >
                          <div className="w-100">
                            <div className="row m-0 w-100 justify-content-between">
                              <div className="col-11 p0">
                                <p className="fz15 fw500 m0">Buy</p>
                              </div>
                              <div className="col-1 p0">
                                {subMenuSaleOpen ? (
                                  <i className="fal fa-angle-up" />
                                ) : (
                                  <i className="fal fa-angle-down" />
                                )}
                              </div>
                            </div>
                            {subMenuSaleOpen ? (
                              <>
                                <Divider sx={{ my: 0.5 }} />
                                <Link href={"/premium-sales?t=all"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    All Properties
                                  </p>
                                </Link>
                                <Link href={"/premium-sales?t=1"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    Villa
                                  </p>
                                </Link>
                                <Link href={"/premium-sales?t=2"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    Apartment
                                  </p>
                                </Link>
                                <Link href={"/premium-sales?t=4"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    Duplex
                                  </p>
                                </Link>
                                <Link href={"/premium-sales?t=14"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    Townhouse
                                  </p>
                                </Link>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </MenuItem>
                        <MenuItem
                          onClick={() => subHandleClick("rent")}
                          disableRipple
                        >
                          <div className="w-100">
                            <div className="row m-0 w-100 justify-content-between">
                              <div className="col-11 p0">
                                <p className="fz15 fw500 m0">Rent</p>
                              </div>
                              <div className="col-1 p0">
                                {subMenuRentOpen ? (
                                  <i className="fal fa-angle-up" />
                                ) : (
                                  <i className="fal fa-angle-down" />
                                )}
                              </div>
                            </div>
                            {subMenuRentOpen ? (
                              <>
                                <Divider sx={{ my: 0.5 }} />
                                <Link href={"/premium-rentals?t=all"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    All Properties
                                  </p>
                                </Link>
                                <Link href={"/premium-rentals?t=1"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    Villa
                                  </p>
                                </Link>
                                <Link href={"/premium-rentals?t=2"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    Apartment
                                  </p>
                                </Link>
                                <Link href={"/premium-rentals?t=4"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    Duplex
                                  </p>
                                </Link>
                                <Link href={"/premium-rentals?t=14"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    Townhouse
                                  </p>
                                </Link>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </MenuItem>
                        <Link href={"/projects"}>
                          <MenuItem onClick={handleClose} disableRipple>
                            <p className="fz15 fw500 m0">Projects</p>
                          </MenuItem>
                        </Link>
                      </div>
                      <div className="col-6 p0">
                        <Link href={"/#in-focus"}>
                          <MenuItem onClick={handleClose} disableRipple>
                            <p className="fz15 fw500 m0">In Focus</p>
                          </MenuItem>
                        </Link>
                        <MenuItem
                          onClick={() => subHandleClick("deals")}
                          disableRipple
                        >
                          <div className="w-100">
                            <div className="row m-0 w-100 justify-content-between">
                              <div className="col-11 p0">
                                <p className="fz15 fw500 m0">Deals</p>
                              </div>
                              <div className="col-1 p0">
                                {subMenuDealsOpen ? (
                                  <i className="fal fa-angle-up" />
                                ) : (
                                  <i className="fal fa-angle-down" />
                                )}
                              </div>
                            </div>
                            {subMenuDealsOpen ? (
                              <>
                                <Divider sx={{ my: 0.5 }} />
                                <Link href={"/see-all"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    See All
                                  </p>
                                </Link>
                                <Link href={"/studios"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    Studios
                                  </p>
                                </Link>
                                <Link href={"/1-beds"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    1 Beds
                                  </p>
                                </Link>
                                <Link href={"/2plus-beds"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    2+ Beds
                                  </p>
                                </Link>
                                <Link href={"/projects"}>
                                  <p className="mt10 mb0 fz14 dropdown-sub-menu">
                                    Projects
                                  </p>
                                </Link>
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </MenuItem>
                        <Link href={"/#why-dubai"}>
                          <MenuItem onClick={handleClose} disableRipple>
                            <p className="fz15 fw500 m0">Why Dubai</p>
                          </MenuItem>
                        </Link>
                        <Link href={"/#about-us"}>
                          <MenuItem onClick={handleClose} disableRipple>
                            <p className="fz15 fw500 m0">About Us</p>
                          </MenuItem>
                        </Link>
                      </div>
                    </div>
                  </StyledMenu>
                </div>
              </div>
              {/* End .col-auto */}
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}

      {/* Signup Modal */}
      <div className="signup-modal">
        <div
          className="modal fade"
          id="loginSignupModal"
          tabIndex={-1}
          aria-labelledby="loginSignupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-scrollable modal-dialog-centered">
            <LoginSignupModal />
          </div>
        </div>
      </div>
      {/* End Signup Modal */}

      {/* DesktopSidebarMenu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="SidebarPanel"
        aria-labelledby="SidebarPanelLabel"
      >
        <SidebarPanel />
      </div>
      {/* Sidebar Panel End */}
    </>
  );
};

export default Header;
