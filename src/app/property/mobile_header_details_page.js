"use client";

import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { forwardRef, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MobileHeaderDetailsPage = ({ data }) => {
  const router = useRouter();
  const [copyLink, setCopyLink] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.toString());
    setCopyLink(true);
  };

  const [openShareDialog, setOpenShareDialog] = useState(false);

  const handleClickOpenShareDialog = () => {
    setOpenShareDialog(true);
  };

  const handleCloseShareDialog = () => {
    setOpenShareDialog(false);
    setCopyLink(false);
  };
  return (
    <>
      <div className="d-flex row m-0 details-page-top-bar">
        <div className="col-6 d-flex justify-content-start">
          <button
            className="details-page-top-button"
            onClick={() => router.back()}
          >
            <i className="far fa-angle-left" />
          </button>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <button
            className="details-page-top-button"
            onClick={handleClickOpenShareDialog}
          >
            <i className="far fa-share" />
          </button>
          <Dialog
            fullScreen
            open={openShareDialog}
            onClose={handleCloseShareDialog}
            TransitionComponent={Transition}
          >
            <AppBar
              className="bg-white appbar-all-photos position-fixed"
              sx={{ position: "relative" }}
            >
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleCloseShareDialog}
                  aria-label="close"
                  className="w43"
                >
                  <i className="far fa-close color-gold" />
                </IconButton>
              </Toolbar>
            </AppBar>

            <div className="h-100 w-100 d-flex align-items-end p20">
              <div className="w-100">
                <p className="mb0 fz22 fw500">Share</p>
                <p className="fz17 fw400">{data.address}</p>
                <div className="col-12 d-flex row w-100 m-0 p0">
                  <a className="share-btns" href="#">
                    <i className="flaticon-whatsapp" />
                  </a>
                  <a className="share-btns" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="share-btns" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="share-btns" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="share-btns" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="top-border-grey-2 mx20"></div>
            <div className="row m-0 d-flex px20">
              <div className="col-9 pl0">
                <span className="mt15 mb15 share-link-text">
                  http://indus-premium.vercel.app/property/23
                </span>
              </div>
              <div className="col-3 p0 d-flex align-items-center">
                <span className="share-custom-btn" onClick={copyToClipboard}>
                  {copyLink ? "Copied!" : "Copy"}
                </span>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default MobileHeaderDetailsPage;
