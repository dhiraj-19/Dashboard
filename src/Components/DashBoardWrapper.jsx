import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import DaseboardHeader from "./daseboardHeader";
import { SideBarComponent } from "./SideBar.Component";
import { Box, Container, Grid } from "@mui/material";
import Activity, { Customers, Profit, Tasks } from "./Activity";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: "1 1 auto",
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      paddingLeft: 280,
    },
  },
}));

const DashBoardWrapper = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const styles = useStyles();
  return (
    <div className={styles.root}>
      <DaseboardHeader onSidebarOpen={() => setSidebarOpen(true)} />
      <SideBarComponent
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Activity />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <Customers />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <Tasks />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <Profit />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default DashBoardWrapper;
