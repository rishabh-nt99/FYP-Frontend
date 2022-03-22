import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
interface CardProps {
  title: any;
  desc1: string;
  desc2?: string;
  link: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, desc1, desc2, link, image }) => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          sx={{ mr: { xs: "0", md: "24px" } }}
        >
          <Box>
            <Typography variant="h6">{title}</Typography>
            <Typography
              variant="subtitle1"
              style={{ marginTop: "10px" }}
              sx={{ maxWidth: { xs: "100%", md: "450px" } }}
            >
              {desc1}
            </Typography>
            {desc2 && <Typography variant="body2">{desc2}</Typography>}
          </Box>
          <Box sx={{ mt: { xs: "70px", md: "0" } }}>
            <Link to={link}>
              {" "}
              <Typography variant="subtitle2">
                {" "}
                Read More {`>`}{" "}
              </Typography>{" "}
            </Link>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={`./images/${image}`}
            alt="Card Photograph"
            width="300px"
            height="300px"
          />
        </Box>
      </Box>
    </>
  );
};

export default Card;
