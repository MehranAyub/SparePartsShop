import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Typography from "@mui/material/Typography";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  CardActionArea,
  CardActions,
  Container,
  Grid,
  Button,
  Box,
} from "@mui/material";
import HP1 from "../assets/Headphones.jpg";
import HP2 from "../assets/Headphones2.jpg";
import HP3 from "../assets/Headphones3.jpg";
import HP4 from "../assets/Headphones4.jpg";
import HP5 from "../assets/Headphones5.jpg";
import HP6 from "../assets/Headphones6.jpg";
import HP7 from "../assets/Headphones7.jpg";
import HP8 from "../assets/Headphones8.jpg";
import { UserContext } from "./UserContext";

export default function Products() {
  const { value, setValue } = useContext(UserContext);
  const navigate = useNavigate();
  var user = null;
  user = JSON.parse(localStorage.getItem("user"));

  const navToPage = (url) => {
    console.log(user);
    navigate(url);
  };

  const urls = [HP1, HP2, HP3, HP4, HP5, HP6, HP7, HP8];
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:7268/api/Product")
      .then((res) => {
        setProducts(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("values", value);
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <h5>
        Hi{" "}
        {user !== null
          ? user.fName
          : "Dear Customer, please login to continue shopping."}{" "}
        <hr />
      </h5>

      <Grid container spacing={4} alignItems="center">
        <Grid
          item
          xs={6}
          md={12}
          style={{ textAlign: "right", marginRight: 20 }}
        >
          <Button
            onClick={() => navToPage(user !== null ? "/checkout" : "/login")}
            variant="outlined"
            size="small"
            startIcon={
              <IconButton aria-label="cart">
                <Badge badgeContent={value.length} color="secondary">
                  <ShoppingCartCheckoutIcon />
                </Badge>
              </IconButton>
            }
          >
            Checkout
          </Button>
        </Grid>
        {products.map((product) => (
          <Grid item xs={12} md={3} key={product.id} justifyContent="center">
            <Card
              sx={{
                maxWidth: 245,
                borderRadius: "10px",
                height: 350,
              }}
            >
              <CardActionArea>
                <CardMedia>
                  {product.unitsInStock === 0 ? (
                    <span className="sale">Sold out</span>
                  ) : (
                    ""
                  )}

                  <img
                    className="imgstyle"
                    src={"https://localhost:7268/Assets/" + product.image}
                    alt=""
                  />
                </CardMedia>
                <CardContent sx={{ height: 150 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.productDescription}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <IconButton
                        disabled={
                          value.some(
                            (item) => item.product.id === product.id
                          ) || product.unitsInStock === 0
                        }
                        color="primary"
                        aria-label="add to shopping cart"
                        onClick={() => {
                          setValue([...value, { product }]);
                        }}
                      >
                        {product.unitsInStock > 0 ? (
                          <AddShoppingCartIcon />
                        ) : (
                          <RemoveShoppingCartIcon />
                        )}
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <Typography
                        align="justify"
                        gutterBottom
                        variant="p"
                        component="span"
                      >
                        R.S {product.unitPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
