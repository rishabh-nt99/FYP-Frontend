import { Box, Typography, Divider, IconButton, Button } from "@mui/material";
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

const Join = () => {
  const classes = useStyles();

  let navigate = useNavigate();
  const changeRoute = (path) => {
    navigate(path);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickColab = () => {};
  return (
    <>
      <Helmet>
        <title>FL - Join Us</title>
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
            <Typography variant="h2">Join Us!</Typography>
            <Typography variant="h4" style={{ marginTop: "50px" }}>
              If you have research data regarding QSAR value prediction (pCIE
              value prediction), using assays and smile data, you can join our
              collaboration efforts to make the industry leading prediction
              model using advanced Federated Learning.
            </Typography>
            <Typography variant="h4" style={{ marginTop: "40px" }}>
              The method of Federated Learning is completely privacy centric,
              and your data is completetly safe. Your data won't be shared with
              any other participants or with us.The data will not even be
              uploaded to our servers and all the training will be done on your
              local device.
            </Typography>
            <Box marginTop="87px" textAlign="right">
              <Button
                variant="contained"
                style={{ marginRight: "12px" }}
                onClick={() => changeRoute("/results")}
              >
                <Typography style={{ color: "white" }}>
                  Demo Results!
                </Typography>
              </Button>
              <Button variant="outlined" onClick={handleClickColab}>
                <Typography>Collab!</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img src={`./images/join.jpg`} alt="Card Photograph" width="350px" />
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

export default Join;
