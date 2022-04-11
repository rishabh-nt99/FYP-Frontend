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

const About = () => {
  const classes = useStyles();

  let navigate = useNavigate();
  const changeRoute = () => {
    let path = "./federated-learning";
    navigate(path);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About Developer</title>
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
          <Typography variant="h2" data-testid="whoAmI">
            Who am I?
          </Typography>
          <Typography variant="h4" style={{ marginTop: "50px" }}>
            Hi! I am <span style={{ color: "#F46B6F" }}>Rishabh</span>, a final
            year Computer Science student at CityU. This project is a part of my
            Final Year Project, where I work both on a web-app and the machine
            learning parts. I am personally a tech enthusiast and am always
            looking forward to new challenges.
          </Typography>
          <Typography variant="h4" style={{ marginTop: "20px" }}>
            Having spent majority of my undergraduate degree during the pandemic
            year, I decided to utilize my tech skills in the health industry!
            Having intered at Hospital Authority I decided to take up this
            project on using Federated Learning for Drug Discovery as my Final
            Year Project.
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img src={`./images/me.jpg`} alt="Card Photograph" width="350px" />
        </Box>
      </Box>
      <Box mt="150px">
        <Box display="flex">
          <Box mr={4} minWidth="200px">
            <Typography variant="subtitle2">Email</Typography>
          </Box>
          <Box>
            <Typography variant="body2" data-testid="email">
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
              data-testid="website"
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
                  onClick={changeRoute}
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

export default About;
