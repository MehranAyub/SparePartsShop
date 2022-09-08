import * as React from "react";
import Card from "@mui/material/Card";
import { Divider, Grid } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { useParams } from "react-router-dom";
import pic from "../assets/Headphones.jpg";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    width: 140,
  },
}));
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const steps = ["Recieved", "Acc./Rej.", "Approved", "Delivered"];

export default function OrderDetail() {
  const { id } = useParams();

  return (
    <container>
      <Card
        sx={{
          maxWidth: 650,
          mt: 12,
          ml: "20%",
          mb: 10,
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Mehran Ayub"
          subheader="Order Detail"
        />
        <Divider />
        <CardMedia>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid textAlign="center" item>
              <b>
                <p style={{ fontSize: "22px" }}>$400</p>
              </b>
              <p style={{ fontSize: "12px" }}>Total Bill</p>
            </Grid>
            <Divider flexItem orientation="vertical" />
            <Grid textAlign="center" item>
              <b>
                <p style={{ fontSize: "22px" }}>4</p>
              </b>
              <p style={{ fontSize: "12px" }}>Items</p>
            </Grid>
            <Divider flexItem orientation="vertical" />
            <Grid textAlign="center" item>
              <b>
                <p style={{ fontSize: "22px" }}>48H</p>
              </b>
              <p style={{ fontSize: "12px" }}>Order Time</p>
            </Grid>
            <Divider flexItem orientation="vertical" />
            <Grid textAlign="center" item>
              <b>
                <p style={{ fontSize: "22px" }}>COD</p>
              </b>
              <p style={{ fontSize: "12px" }}>Payment Mehod</p>
            </Grid>
          </Grid>
        </CardMedia>
        <Divider />
        <CardContent>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={2} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </CardContent>
      </Card>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="right">Product Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <div>
                    <img src={pic} style={{ height: "70px" }}></img>
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </container>
  );
}
