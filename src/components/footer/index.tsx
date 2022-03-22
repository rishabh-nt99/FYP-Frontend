import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box display="flex" justifyContent="space-between" mt="200px">
      <Box>
        <Typography variant="caption" style={{ color: "#F46B6F" }}>
          Rishabh Nautiyal - 2022
        </Typography>
      </Box>
      <Box display="flex">
        <Box mr={4}>
          <Link to={"/about-me"} style={{ textDecoration: "none" }}>
            <Typography variant="caption">About Me</Typography>
          </Link>
        </Box>
        <Box mr={4}>
          <a
            href="https://www.github.com/rishabh-nt99"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <Typography variant="caption">Github</Typography>
          </a>
        </Box>
        <Box>
          <a
            href="https://www.linkedin.com/in/rishabh-nautiyal/"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <Typography variant="caption">Linkedin</Typography>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
