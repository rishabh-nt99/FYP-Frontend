import { Typography, Box, Button, IconButton, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Card from "./card";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  downArrow: {
    "& svg": {
      fontSize: "40px",
      color: "#181717",
    },
  },
  divider: {
    background: "black",
    marginTop: "100px",
    marginBottom: "100px",
  },
}));

const Home = () => {
  const classes = useStyles();

  let navigate = useNavigate();
  const changeRoute = () => {
    let path = "./join-us";
    navigate(path);
  };

  return (
    <>
      <Box
        display="flex"
        marginTop="150px"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { xs: "left", md: "flex-end" },
        }}
      >
        <Box maxWidth="360px">
          <Typography variant="h1">FL - Drug Discovery.</Typography>
        </Box>
        <Box
          sx={{
            marginLeft: { xs: 0, md: "16px" },
            marginTop: { xs: "36px", md: 0 },
          }}
        >
          <Typography variant="h3">A Federated Learning Based</Typography>
          <Typography variant="h3">
            Collaborative effort drug discovery effort.
          </Typography>
        </Box>
      </Box>
      <Box marginTop={4} textAlign="right">
        <Button variant="outlined" onClick={changeRoute}>
          <Typography>Join Us</Typography>
        </Button>
      </Box>
      <Box marginTop={4}>
        <IconButton className={classes.downArrow}>
          <ArrowDownwardIcon />
        </IconButton>
      </Box>
      <Box marginTop="110px">
        <Card
          title="What is Federated Learning?"
          desc1="Federated learning (also known as collaborative learning) is a machine learning technique that trains an algorithm across multiple decentralized edge devices or servers holding local data samples, without exchanging them."
          link="/federated-learning"
          image="image-1.jpg"
        />
        <Divider classes={{ root: classes.divider }} />
        <Card
          title="Why Drug Discovery?"
          desc1="Drug discovery is the process of the recognition of key chemical compounds potential medical agents for treatment purposes of certain illnesses. The huge amount of data required for ML models and the confidentiality requirements of the industry have severly limited ML usage in Drug Discovery."
          link="/drug-discovery"
          image="image-2.jpg"
        />
        <Divider classes={{ root: classes.divider }} />
        <Card
          title="Who am I?"
          desc1="Federated learning (also known as collaborative learning) is a machine learning technique that trains an algorithm across multiple decentralized edge devices or servers holding local data samples, without exchanging them."
          link="/about-me"
          image="image-3.jpg"
        />
        <Divider classes={{ root: classes.divider }} />
      </Box>
    </>
  );
};

export default Home;
