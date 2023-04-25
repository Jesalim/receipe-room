import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Dropdowns from './Dropdowns';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    gap: '10rem',
    marginTop: '5rem',
    color: '#d69f7e',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#774936',
      },
      '&:hover fieldset': {
        borderColor: '#F5D0C5',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#F5D0C5',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#774936',
      },
      '& .MuiInputBase-input': {
        color: '#d69f7e',
        '&::placeholder': {
          color: '#d69f7e',
        },
      },
      '& .MuiInputBase-root': {
        fontFamily: 'Arial, sans-serif',
        color: '#d69f7e',
      },
    },
    '& .MuiSvgIcon-root': {
      color: '#d69f7e',
    },
    '& .MuiInputLabel-root': {
      color: '#d69f7e',
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
  },
}));

const appetizers = [
  {
    id: 1,
    name: 'Bruschetta',
    image:
      'https://images.unsplash.com/photo-1550547661-22fcfb260ada?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    description: 'Toasted bread topped with tomatoes and basil',
  },
  {
    id: 2,
    name: 'Spring Rolls',
    image:
      'https://images.unsplash.com/photo-1605178763936-9c32b40f06a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    description: 'Deep-fried rolls filled with vegetables and meat',
  },
  {
    id: 3,
    name: 'Shrimp Cocktail',
    image:
      'https://images.unsplash.com/photo-1550547661-22fcfb260ada?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    description: 'Cooked shrimp served with cocktail sauce',
  },
  {
    id: 5,
    name: 'Shrimp Cocktail',
    image:
      'https://images.unsplash.com/photo-1550547661-22fcfb260ada?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    description: 'Cooked shrimp served with cocktail sauce',
  },
  {
    id: 6,
    name: 'Shrimp Cocktail',
    image:
      'https://images.unsplash.com/photo-1550547661-22fcfb260ada?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    description: 'Cooked shrimp served with cocktail sauce',
  },
];

export default function SearchBar() {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState('');
  const [selectedAppetizer, setSelectedAppetizer] = useState(null);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredAppetizers = searchInput
    ? appetizers.filter((appetizer) =>
        appetizer.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : appetizers;

  const handleAppetizerSelect = (appetizer) => {
    setSelectedAppetizer(appetizer);
  };

  return (
    <form noValidate autoComplete="off" className={classes.root}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        style={{ width: 800, backgroundColor: '#141414' }}
        placeholder="What do you wanna cook?"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <div className="-mt-[10rem]">
        <Dropdowns />
      </div>
      {searchInput && (
        <Grid container spacing={3} className={classes.grid}>
          {filteredAppetizers.map((appetizer) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={appetizer.id}
              style={{ marginTop: '-5rem' }}>
              <div className="flex justify-center w-full mt-[3rem]">
                <Card
                  style={{
                    width: '350px',
                    background: '#292929',
                    color: '#D69F7E',
                    marginBottom: '2rem',
                  }}>
                  <CardActionArea
                    onClick={() => handleAppetizerSelect(appetizer)}>
                    <CardMedia
                      style={{
                        height: 140,
                      }}
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
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </form>
  );
}
