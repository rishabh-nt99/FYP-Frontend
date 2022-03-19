import { Typography, Box, Button, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Card from "./card";

const useStyles = makeStyles((theme) => ({
  downArrow: {
    "& svg": {
      fontSize: "40px",
      color: "#181717",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        display="flex"
        marginTop="220px"
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { xs: "left", md: "flex-end" },
        }}
      >
        <Box maxWidth="360px">
          <Typography variant="h1">FL- Drug Discovery.</Typography>
        </Box>
        <Box
          maxWidth="650px"
          marginRight="20px"
          sx={{
            marginLeft: { xs: 0, md: "16px" },
            marginTop: { xs: "36px", md: 0 },
          }}
        >
          <Typography variant="h2">A Federated Learning Based</Typography>
          <Typography variant="h2">
            Collaborative effort drug discovery effort.
          </Typography>
        </Box>
      </Box>
      <Box marginTop={4} textAlign="right" marginRight="20px">
        <Button variant="outlined">
          <Typography>Join Us</Typography>
        </Button>
      </Box>
      <Box marginTop={4}>
        <IconButton className={classes.downArrow}>
          <ArrowDownwardIcon />
        </IconButton>
      </Box>
      <Card
        title="What is Federated Learning?"
        desc1="FL is the cutting edge in ML"
        link="Read more"
      />
    </>
  );
};

export default Home;
