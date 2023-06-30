import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Modal,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import axios from 'axios';
import './style.css';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    celcius: 22,
    name: 'San Salvador',
    humidity: 93,
    speed: 4,
    image: '/images/cloud.png',
  });
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleSearch = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClick = () => {
    if (name !== '') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_RAPID_API_WEATHER_API_KEY}&units=metric`;
      axios
        .get(apiUrl)
        .then((res) => {
          let imagePath = '';
          if (res.data.weather[0].main === 'Clouds') {
            imagePath = '/images/cloud.png';
          } else if (res.data.weather[0].main === 'Clear') {
            imagePath = '/images/clear.png';
          } else if (res.data.weather[0].main === 'Rain') {
            imagePath = '/images/snow.png';
          } else if (res.data.weather[0].main === 'Drizzle') {
            imagePath = '/images/rain.png';
          } else if (res.data.weather[0].main === 'Mist') {
            imagePath = '/images/mist.png';
          } else {
            imagePath = '/images/cloud.png';
          }
          // eslint-disable-next-line no-console
          console.log(res.data);
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            image: imagePath,
          });
          setError('');
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setError('Invalid City Name');
          } else {
            setError('');
          }
          // eslint-disable-next-line no-console
          console.log(err);
        });
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Travel Advisor
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="h6" className={classes.title}>
              Explore how is the weather today
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                style={{ backgroundColor: '#ECECEC', color: 'black' }}
                onClick={handleSearch}
              >
                Check It!
              </Button>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(130deg, #3f51b5, rgb(5, 5, 199))',
            border: '1px solid white',
            borderRadius: '18px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <IconButton
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              marginBottom: '10px',
              color: 'white',
            }}
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </IconButton>
          <div className="container">
            <div className="weather">
              <div className="search">
                <input
                  type="text"
                  placeholder="Enter City Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button type="button" onClick={handleClick}>
                  <SearchOutlinedIcon />
                </button>
              </div>
              <div className="error">
                <p>{error}</p>
              </div>
              <div className="winfo">
                <img src={data.image} alt="" className="icon" />
                <h1>{Math.round(data.celcius)}°c</h1> <h2>{data.name}</h2>
                <div className="details">
                  <div className="col">
                    <img src="/Images/humidity.png" alt="" />
                    <div className="humidity">
                      <p>{Math.round(data.humidity)}%</p> <p>Humidity</p>
                    </div>
                  </div>
                  <div className="col">
                    <img src="/Images/mist.png" alt="" />
                    <div className="wind">
                      <p>{Math.round(data.speed)} km/h</p> <p>Wind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
