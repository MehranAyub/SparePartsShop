import React from "react";
import { Container, Grid, Box } from "@mui/material";
import { TotalCustomers } from "./TotalCustomersTicket";
import { TotalOrders } from "./TotalOrdersTicket";
import { DeliveredOrders } from "./DeliveredOrdersTicket";
import { TotalProfit } from "./TotalProfitTicket";
import { LatestOrders } from "./LatestOrders";
import OrderList from "./OrderList";
function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
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
              <TotalCustomers />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalOrders />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <DeliveredOrders />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalProfit sx={{ height: "100%" }} />
            </Grid>
            {/* <Grid item lg={8} md={12} xl={9} xs={12}></Grid> */}
            {/* <Grid item lg={4} md={6} xl={3} xs={12}>
              <TotalCustomers sx={{ height: "100%" }} /> 
            </Grid> */}
            {/* <Grid item lg={4} md={6} xl={3} xs={12}>
              <TotalCustomers sx={{ height: "100%" }} />
            </Grid> */}
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <OrderList />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}

export default Dashboard;
