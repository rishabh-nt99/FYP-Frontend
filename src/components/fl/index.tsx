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

const FL = () => {
  const classes = useStyles();

  let navigate = useNavigate();
  const changeRoute = () => {
    let path = "./drug-discovery";
    navigate(path);
  };
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
        <Box
          sx={{
            marginRight: { xs: 0, md: "64px" },
            maxWidth: { xs: "100%", md: "600px" },
          }}
        >
          <Typography variant="h2">What is Federated Learning?</Typography>
          <Typography variant="h4" style={{ marginTop: "50px" }}>
            Federated Machine Learning is a method of machine learning, proposed
            by Google in 2016 where the requirement for sharing the raw data in
            terms of using it to train the model is completely eradicated. This
            allows the relevant shareholders to collaborate, all the while
            maintaining the confidentiality of the data.
          </Typography>
          <Typography variant="h4" style={{ marginTop: "20px" }}>
            Moreover, Federated learning has been shown to have a standardizing
            effect on the data biases, reducing the overall bias in the data as
            compared to combining the data and then training a model on it.
          </Typography>
          <Typography variant="h4" style={{ marginTop: "20px" }}>
            Federated Learning Process:{" "}
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={`./images/image-5.png`}
            alt="Card Photograph"
            width="350px"
            height="530px"
          />
        </Box>
      </Box>
      <Box mt="150px">
        <Box display="flex">
          <Box mr={4} minWidth="200px">
            <Typography variant="subtitle2">Central Server</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              There is a central server that coordinates the development process
              among the various stakeholders. It initially sends out the
              initial/baseline model (trained on publicly available data.) to
              all the participating collaborators. This is called the global
              model.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" mt={4}>
          <Box mr={4} minWidth="200px">
            <Typography variant="subtitle2">Local Training</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              Each collaborator then executes this model using the client side
              program and trains it on their private data.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" mt={4}>
          <Box mr={4} minWidth="200px">
            <Typography variant="subtitle2">Result Upload</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              This updated model/weights/parameters are encrypted and sent to
              the coordinating server via a secure protocol.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" mt={4}>
          <Box mr={4} minWidth="200px">
            <Typography variant="subtitle2">Aggregation</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              The coordinating server then collects all the updated models from
              all the collaborators and aggregates them to update the shared
              global model in a secure and privacy focused manner.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" mt={4}>
          <Box mr={4} minWidth="200px">
            <Typography variant="subtitle2">Next Round</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              The global model is sent back to the collaborating participants
              for further training and the process is repeated till the global
              model converges.
            </Typography>
          </Box>
        </Box>
        <Divider classes={{ root: classes.divider }} />
        <Box display="flex" justifyContent="space-between">
          <Box maxWidth="400px">
            <Link to={"/drug-discovery"} style={{ textDecoration: "none" }}>
              <Typography
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "24px",
                  fontWeight: "400",
                }}
              >
                Why FL is Important for Drug Discovery?{" "}
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
                  fontSize: "12px",
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

export default FL;
