import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom"; 
import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from "@mui/material"; // MUI components
import SearchIcon from "@mui/icons-material/Search";


interface IData {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

const CardWrapper = styled(Card)`
  /* Custom styles for the card using styled-components */
  max-width:250px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

function MyComponent () {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6" style={{ paddingLeft: 12 }}>
            My App
          </Typography>
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => (
          <CardWrapper key={item.id}>
            <Link to={`/${item.id}`}>
              <CardContent>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100%", height: 300 }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{item.title}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{`$ ${item.price}`}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Link>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
