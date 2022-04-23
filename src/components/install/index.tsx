import { Box, Typography, Divider, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";
import Helmet from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  rightArrow: {
    "& svg": {
      fontSize: "40px",
      color: "#181717",
    },
  },
  divider: {
    background: "black",
    marginTop: "150px",
    marginBottom: "70px",
  },
}));

const Install = () => {
  const classes = useStyles();

  let navigate = useNavigate();
  const changeRoute = (path) => {
    navigate(path);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>User Installation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Box
        display="flex"
        marginTop="130px"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { xs: "left", md: "flex-start" },
        }}
      >
        <Box maxWidth="600px" mr={16}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="h2" data-testid="joinus">
              Installation Guide
            </Typography>
            <Typography variant="h4" style={{ marginTop: "50px" }}>
              Follow this guide to setup your environment and become a
              collaborator.
            </Typography>
            <Typography variant="h4" style={{ marginTop: "40px" }}>
              1) Install anaconda if not already install.{" "}
              <a href="https://docs.anaconda.com/anaconda/install/">
                Anaconda Installation
              </a>
            </Typography>
            <Typography variant="h4" style={{ marginTop: "20px" }}>
              2) Create a new conda environment using the command: <br />
              <span style={{ fontStyle: "italic" }}>
                "conda create --name flColab"
              </span>
            </Typography>
            <Typography variant="h4" style={{ marginTop: "20px" }}>
              3) Activate the created env:{" "}
              <span style={{ fontStyle: "italic" }}>
                "conda activate flColab"
              </span>
            </Typography>
            <Typography variant="h4" style={{ marginTop: "20px" }}>
              4) Naviagte to the folder where the files were downloaded and
              install dependencies from the requirements.txt file.{" "}
              <a href="https://intellipaat.com/community/31672/how-to-use-requirements-txt-to-install-all-dependencies-in-a-python-project">
                Guide.
              </a>
            </Typography>
            <Typography variant="h4" style={{ marginTop: "20px" }}>
              5) In the client.py file, edit the load_data function to load your
              own dataset. For details refer to the comments in the file.
            </Typography>
            <Typography variant="h4" style={{ marginTop: "20px" }}>
              6) Finally in anaconda terminal with flColab env, navigate to the
              folder with client.py file and run the command: <br />
              <span style={{ fontStyle: "italic" }}>
                "python client.py" or "python3 client.py"
              </span>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img src={`./images/code.jpg`} alt="Card Photograph" width="350px" />
        </Box>
      </Box>
      <Box mt="150px">
        <Box display="flex">
          <Box mr={4} minWidth="200px">
            <Typography variant="subtitle2">Email</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              rnautiyal2-c@my.cityu.edu.hk
            </Typography>
          </Box>
        </Box>
        <Box display="flex" mt={4}>
          <Box mr={4} minWidth="200px">
            <Typography variant="subtitle2">Website</Typography>
          </Box>
          <Box>
            <a
              href="https://www.rishabhnautiyal.com"
              target="_black"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="body2">www.rishabhnautiyal.com</Typography>
            </a>
          </Box>
        </Box>

        <Divider classes={{ root: classes.divider }} />
        <Box display="flex" justifyContent="space-between">
          <Box maxWidth="400px">
            <Link to={"/federated-learning"} style={{ textDecoration: "none" }}>
              <Typography
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "24px",
                  fontWeight: "400",
                }}
              >
                What is Federated Machine Learning?{" "}
                <IconButton
                  className={classes.rightArrow}
                  onClick={() => changeRoute("./about")}
                >
                  <ArrowRightAltIcon />
                </IconButton>
              </Typography>
            </Link>
          </Box>
          <Box>
            <Typography
              style={{
                fontFamily: "DM Sans",
                fontSize: "24px",
                fontWeight: "400",
              }}
            >
              rnautiyal2-c@my.cityu.edu.hk
            </Typography>
            <Typography
              style={{
                fontFamily: "DM Sans",
                fontSize: "14px",
                fontWeight: "500",
                marginTop: "20px",
              }}
            >
              About Me
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Install;
