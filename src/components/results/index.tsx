import {
  Box,
  Typography,
  Divider,
  IconButton,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
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
    marginTop: "60px",
    marginBottom: "70px",
  },
  root: {
    "& .MuiFormLabel-root": {
      color: "red", // or black
    },
  },
}));

const Results = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const changeRoute = (path) => {
    navigate(path);
  };

  const [result, setResult] = React.useState("");
  const [values, setValues] = React.useState({
    smile: "",
    chembal: "",
    assay: "",
    algo: "",
  });

  const [errors, setErrors] = React.useState({
    smile: false,
    chembal: false,
    assay: false,
    algo: false,
  });

  const handleInput = (key) => (event) => {
    setValues({ ...values, [key]: event.target.value.trim() });
  };

  const validate = () => {
    let newErrors = { ...errors };
    let flag = true;
    for (const [key, value] of Object.entries(values)) {
      if (!value) {
        newErrors[key] = true;
        flag = false;
      } else {
        newErrors[key] = false;
      }
    }
    setErrors(newErrors);
    return flag;
  };

  const fetchData = () => {
    const data = {
      smile: values.smile,
      chembal: values.chembal,
      assay: values.assay,
      algo: values.algo,
    };
    fetch("http://localhost:5000/predict", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        setResult("Sorry We couldn't predict result for these values!");
      });
  };
  const getResults = () => {
    if (validate()) {
      fetchData();
    } else {
      console.log("ERROR");
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("values: ", values);
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
          <Typography variant="h2">
            Checkout Current Model Predictions!
          </Typography>
          <Typography variant="h4" style={{ marginTop: "50px" }}>
            Currently our system supports querying the predicted pCIE value of
            checmical compounds via the SMILE and the Assay ID. You can choose
            between two different methods, FedAvg and FedSGD.
          </Typography>
          <Typography variant="h4" style={{ marginTop: "20px" }}>
            FedAvg averages the weights of the local models, while FedSGD
            averages the gradients after each epoch and updates the global
            weights via backpropagation.
          </Typography>
          <Typography variant="h4" style={{ marginTop: "75px" }}>
            Try it out:{" "}
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={`./images/r4.png`}
            alt="Card Photograph"
            width="350px"
            height="450px"
          />
        </Box>
      </Box>
      <Box mt="100px">
        <Box display="flex" sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <Box
            mr={4}
            minWidth="200px"
            sx={{ marginBottom: { xs: "10px", md: 0 } }}
          >
            <Typography variant="subtitle2">Chembal ID</Typography>
          </Box>
          <Box flexGrow={1}>
            <TextField
              fullWidth
              variant="outlined"
              value={values.chembal}
              error={errors.chembal}
              helperText={errors.chembal ? "Required Field" : ""}
              onChange={handleInput("chembal")}
              InputLabelProps={{ shrink: true }}
              placeholder="Enter  ID"
              // className={classes.textfields}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          mt={4}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            mr={4}
            minWidth="200px"
            sx={{ marginBottom: { xs: "10px", md: 0 } }}
          >
            <Typography variant="subtitle2">Smile String</Typography>
          </Box>
          <Box flexGrow={1}>
            <TextField
              fullWidth
              variant="outlined"
              value={values.smile}
              error={errors.smile}
              helperText={errors.smile ? "Required Field" : ""}
              onChange={handleInput("smile")}
              InputLabelProps={{ shrink: true }}
              placeholder="Enter SMILE String"
              // className={classes.textfields}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          mt={4}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            mr={4}
            minWidth="200px"
            sx={{ marginBottom: { xs: "10px", md: 0 } }}
          >
            <Typography variant="subtitle2">Assay ID</Typography>
          </Box>
          <Box flexGrow={1}>
            <TextField
              fullWidth
              variant="outlined"
              value={values.assay}
              error={errors.assay}
              helperText={errors.assay ? "Required Field" : ""}
              onChange={handleInput("assay")}
              InputLabelProps={{ shrink: true }}
              placeholder="Enter SMILE String"
              // className={classes.textfields}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          mt={6}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Box
            mr={4}
            minWidth="200px"
            sx={{ marginBottom: { xs: "25px", md: 0 } }}
          >
            <Typography variant="subtitle2">Alogrithm</Typography>
          </Box>
          <Box flexGrow={1}>
            <TextField
              style={{ color: "grey" }}
              fullWidth
              select
              label={"Choose a Federated Algorithm"}
              variant="outlined"
              value={values.algo}
              error={errors.algo}
              helperText={errors.algo ? "Required Field" : ""}
              onChange={handleInput("algo")}
              InputLabelProps={{ shrink: true, style: { color: "grey" } }}
            >
              <MenuItem key={"avg"} value={"avg"}>
                Federated Average
              </MenuItem>
              <MenuItem key={"sgd"} value={"sgd"}>
                Federated SGD
              </MenuItem>
            </TextField>
          </Box>
        </Box>
        <Box mt={4} textAlign="right" flexGrow={1}>
          <Button variant="contained" onClick={getResults}>
            <Typography style={{ color: "white" }}>Predict</Typography>
          </Button>
        </Box>
        {result && (
          <Box>
            <Box
              display="flex"
              mt={12}
              sx={{ flexDirection: { xs: "column", md: "row" } }}
              border="solid 1px black"
              borderRadius="4px"
              flexGrow={1}
              padding="20px"
              alignItems="center"
            >
              <Box mr={4} flexGrow={1}>
                <Typography variant="h3">Result</Typography>
              </Box>
              <Box
                sx={{ minWidth: { xs: "200px", md: "400px" } }}
                textAlign="right"
              >
                <Typography variant="h2" style={{ color: "#F46B6F" }}>
                  {result}
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
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

export default Results;
