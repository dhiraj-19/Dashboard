import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import Activity from "./Activity";
import DashBoardWrapper from "./DashBoardWrapper";

const PageMain = () => {
  <>
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
        </Grid>
      </Container>
    </Box>
  </>;
};

PageMain.getLayout = (page) => (
  <DashBoardWrapper>
    {page} <h1>Hello</h1>
  </DashBoardWrapper>
);

export default PageMain;
