import React from "react";

import { Link } from "react-router-dom";

import { Typography, Container, Button } from "@mui/material";

import MainLayout from "../layouts/MainLayout";

export default function NotFound(props) {
  return (
    <MainLayout>
      <div>
        <Container maxWidth="sm" style={{ marginTop: "25px" }}>
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            404 Page Not Found
          </Typography>
          <Button
            size="small"
            style={{
              display: "flex",
              justifyContent: "center",
              background: "#1D3557",
            }}
            color="primary"
            to={"/"}
            component={Link}
            variant="contained"
          >
            Click here to return Home
          </Button>
        </Container>
      </div>
    </MainLayout>
  );
}
