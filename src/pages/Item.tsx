import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Grid, Button } from "@mui/material"; // MUI components
import { useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface ItemDetails {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  // Add other properties as needed
}


function Item(){
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ItemDetails | null>(null);

  // Fetch item details based on ID from API
  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        ); // Replace with your API endpoint
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };
    fetchItemDetails();
  }, [id]);

  return (
    <div>
      {item ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            backgroundColor: "#fff",
          }}
        >
          <Link to="/">
            <ArrowBack
              style={{
                color: "#000",
                cursor: "pointer",
                marginTop: 10,
                marginLeft: 10,
              }}
            />
          </Link>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "50%", height: 500, marginTop: 45, marginLeft: 40 }}
          />
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={1}
            style={{ height: "100%", marginLeft: 60 }}
          >
            <Grid
              item
              xs={1}
              style={{
                height: "100%",
                backgroundColor: "#fff",
                marginTop: "10%",
              }}
            >
  
              <h3 style={{ color: "#000" }}>{item.title}</h3>
  
            </Grid>
            <Grid
              item
              xs={1}
              style={{ height: "100%", backgroundColor: "#fff" }}
            >

              <p style={{ color: "#000" }}>
                <strong>Description: </strong>
                {item.description}
              </p>
              <p style={{ color: "#000" }}>
                <strong>Category: </strong>
                {item.category}
              </p>
              <p style={{ color: "#000" }}>
                <strong>Price: </strong>
                {`$${item.price}`}
              </p>
            </Grid>
          </Grid>
        </div>
      ) : (
        <Typography variant="h6">Loading item details...</Typography>
      )}
    </div>
  );
};

export default Item;
