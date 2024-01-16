"use client";
import { SignInApp } from "@/api/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { forwardRef, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SignIn = () => {
  const router = useRouter();
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const [openSnackbar, setOpenSnackBar] = useState(false);

  const handleClick = () => {
    setOpenSnackBar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackBar(false);
  };

  const login = () => {
    if (pass == "") {
    } else {
      setLoading(true);
      SignInApp(pass).then((res) => {
        console.log(res);
        if (res == "success") {
          Cookies.set("auth", true);

          setTimeout(() => {
            setLoading(false);
            location.reload();
          }, 500);
        } else {
          setLoading(false);
          handleClick();
        }
      });
    }
  };
  return (
    <div className="form-style1">
      <div className="mb15">
        <label className="form-label fw600 dark-color">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          required
          onChange={(e) => setPass(e.target.value)}
        />
      </div>

      <div className="d-grid mb20">
        <button className="ud-btn btn-thm" onClick={() => login()}>
          {loading ? (
            <CircularProgress size={25} color="inherit" className="mt5" />
          ) : (
            <>
              Sign in <i className="fal fa-arrow-right-long" />
            </>
          )}
        </button>
      </div>

      <Snackbar
        // className="login-error-snackbar"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Wrong password. Try again please!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SignIn;
