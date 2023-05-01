import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10rem',
    marginTop: '5rem',
    color: '#d69f7e',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#774936',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#774936',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    outline: 'none',
  },
  card: {
    width: '350px',
    background: '#292929',
    color: '#D69F7E',
    marginBottom: '2rem',
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 140,
  },
}));

const categories = ['Appetizer', 'Main Dish', 'Dessert', 'Side Dish', 'Soup'];

const countries = ['China', 'Japan', 'Korea', 'India', 'Mexico'];

const appetizers = [
  {
    id: 1,
    name: 'Bruschetta',
    image:
      '../src/assets/bruschetta.jpg',
    description: 'Toasted bread topped with tomatoes and basil',
  },
  {
    id: 2,
    name: 'Spring Rolls',
    image:
      '../src/assets/springrolls.jpg',
    description: 'Deep-fried rolls filled with vegetables and meat',
  },
  {
    id: 3,
    name: 'Shrimp Cocktail',
    image:
      '../src/assets/shrimp.jpg',
    description: 'Cooked shrimp served with cocktail sauce',
  },
  {
    id: 4,
    name: 'Shrimp Cocktail',
    image:
      '../src/assets/shrimpcocktail2.jpg',
    description: 'Cooked shrimp served with cocktail sauce',
  },
  {
    id: 5,
    name: 'Shrimp Cocktail',
    image:
      '../src/assets/Mexican-Shrimp-Cocktail-sq.jpg',
    description: 'Cooked shrimp served with cocktail sauce',
  },
  {
    id: 6,
    name: 'Shrimp Cocktail',
    image:
      '../src/assets/shrimp-cocktail.jpg',
    description: 'Cooked shrimp served with cocktail sauce',
  },
];

export default function Dropdowns() {
  const classes = useStyles();
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [selectedAppetizer, setSelectedAppetizer] = useState(null);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleAppetizerSelect = (appetizer) => {
    setSelectedAppetizer(appetizer);
  };

  return (
    <>
      <div className={`${classes.root}`}>
        <FormControl
          className={`${classes.formControl} w-[300px]`}
          style={{ backgroundColor: '#141414' }}>
          <Select
            value={category}
            onChange={handleCategoryChange}
            displayEmpty
            className={`${classes.selectEmpty} bg-white rounded-lg`}
            inputProps={{ 'aria-label': 'Category' }}
            style={{
              color: '#d69f7e',
              height: '50px',
              paddingLeft: '20px',
              backgroundColor: '#1F1F1F',
            }}
            variant="outlined">
            <MenuItem value="" disabled>
              Category
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={`${classes.formControl} w-[300px]`}>
          <Select
            value={country}
            onChange={handleCountryChange}
            displayEmpty
            className={`${classes.selectEmpty} bg-white rounded-lg`}
            inputProps={{ 'aria-label': 'Country' }}
            style={{
              color: '#d69f7e',
              height: '50px',
              paddingLeft: '20px',
              backgroundColor: '#1F1F1F',
            }}
            variant="outlined">
            <MenuItem value="" disabled>
              Country
            </MenuItem>
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {category === 'Appetizer' && (
          <Grid container spacing={3} className={classes.grid}>
            {appetizers.map((appetizer) => (
              <Grid
                item
                key={appetizer.id}
                xs={12}
                sm={6}
                md={4}
                style={{ marginTop: '-5rem' }}>
                <div className="flex justify-center w-full mt-[3rem]">
                  <Link to={`/appetizers/${appetizer.id}`}>
                    <Card className={classes.card} id='card-shadow'>
                      <CardActionArea
                        onClick={() => handleAppetizerSelect(appetizer)}>
                        <CardMedia
                          className={classes.media}
                          image={appetizer.image}
                          title={appetizer.name}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            style={{
                              textTransform: 'uppercase',
                              fontWeight: 'bolder',
                              color: '#774936',
                            }}>
                            {appetizer.name}
                          </Typography>
                          <Typography variant="body2" component="p">
                            {appetizer.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
}
