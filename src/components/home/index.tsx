import { Typography, Box, Button, IconButton, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Card from "./card";
import { useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
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

  const cards = [
    {
      title: "What is Federated Learning?",
      desc1:
        "Federated learning (also known as collaborative learning) is a machine learning technique that trains an algorithm across multiple decentralized edge devices or servers holding local data samples, without exchanging them.",
      link: "/federated-learning",
      image: "image-1.jpg",
    },
    {
      title: "Why Drug Discovery?",
      desc1:
        "Drug discovery is the process of the recognition of key chemical compounds potential medical agents for treatment purposes of certain illnesses. The huge amount of data required for ML models and the confidentiality requirements of the industry have severly limited ML usage in Drug Discovery.",
      link: "/drug-discovery",
      image: "image-2.jpg",
    },
    {
      title: "Who am I?",
      desc1:
        "Federated learning (also known as collaborative learning) is a machine learning technique that trains an algorithm across multiple decentralized edge devices or servers holding local data samples, without exchanging them.",
      link: "/about-me",
      image: "image-3.jpg",
    },
  ];

  return (
    <>
      <Helmet>
        <title>FYP Project - Rishabh Nautiyal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
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
          <Typography data-testid="heading" variant="h1">
            FL - Drug Discovery.
          </Typography>
        </Box>
        <Box
          sx={{
            marginLeft: { xs: 0, md: "16px" },
            marginTop: { xs: "36px", md: 0 },
          }}
        >
          <Typography variant="h3" data-testid="sub-heading1">
            A Federated Learning Based
          </Typography>
          <Typography variant="h3" data-testid="sub-heading2">
            Collaborative effort drug discovery effort.
          </Typography>
        </Box>
      </Box>
      <Box marginTop={4} textAlign="right">
        <Button
          variant="outlined"
          onClick={changeRoute}
          data-testid="join-button"
        >
          <Typography>Join Us</Typography>
        </Button>
      </Box>
      <Box marginTop={4}>
        <IconButton className={classes.downArrow}>
          <ArrowDownwardIcon />
        </IconButton>
      </Box>

      <Box marginTop="110px">
        {cards.map((card: any) => {
          return (
            <Box key={card.title} data-testid="home-card">
              <Card
                title={card.title}
                desc1={card.desc1}
                desc2={card.desc2 ? card.desc2 : null}
                link={card.link}
                image={card.image}
              />
              <Divider classes={{ root: classes.divider }} />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Home;
