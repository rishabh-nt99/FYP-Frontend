import { Box, Typography, Divider, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";
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

const DD = () => {
  const classes = useStyles();

  let navigate = useNavigate();
  const changeRoute = () => {
    let path = "./federated-learning";
    navigate(path);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
          <Typography variant="h2">Why Drug Discovery?</Typography>
          <Typography variant="h4" style={{ marginTop: "50px" }}>
            Drug discovery is the process of the recognition of key chemical
            compounds potential medical agents for treatment purposes of certain
            illnesses. The huge amount of data required for ML models and the
            confidentiality requirements of the industry have severly limited ML
            usage in the Pharmaceutical Industry.
          </Typography>
          <Typography variant="h4" style={{ marginTop: "20px" }}>
            Federated learning is a new and unique solution, quite apt for this
            problem. FL models eliminate the need to share confidential data to
            build powerful models to predict important potential drug compounds,
            thus saving the cost of physical research on millions of compounds
            (in-silico screening.)
          </Typography>
          <Typography variant="h4" style={{ marginTop: "20px" }}>
            Important Aspects:{" "}
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={`./images/image-6.jpg`}
            alt="Card Photograph"
            width="350px"
            height="530px"
          />
        </Box>
      </Box>
      <Box mt="150px">
        <Box display="flex">
          <Box mr={4} minWidth="200px">
            <Typography variant="subtitle2">Research Cost</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              The process of collecting discovery data and the research of
              testing potential drugs is not only an expensive process, but also
              time consuming. Thus modern day medice relies on the process of In
              Silico Screening to reduce cost and time.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" mt={4}>
          <Box mr={4} minWidth="200px">
            <Typography variant="subtitle2">Difficult Collaboration</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              The Pharmaceutical industry is highly competitve and further the
              expensive and long research process along with the confidentiality
              needs of the research data has made collaboration among industry
              leaders.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" mt={4}>
          <Box mr={4} minWidth="200px">
            <Typography variant="subtitle2">In Scilico Screening</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              Broadly, in silico means biological experiments conducted on a
              computer or via computer simulation. In silico screening uses
              virtual screening tools to make predictions about the behavior of
              different compounds. It achieves that by modeling the interactions
              between chemical molecules and their biological targets.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" mt={4}>
          <Box mr={4} minWidth="200px">
            <Typography variant="subtitle2">The Federated Solution</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              Federated learning is a new and unique solution, quite apt for
              this problem. FL models eliminate the need to share confidential
              data to build powerful models to predict important potential drug
              compounds.
            </Typography>
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
            <Link to={"/about-me"} style={{ textDecoration: "none" }}>
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
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DD;
