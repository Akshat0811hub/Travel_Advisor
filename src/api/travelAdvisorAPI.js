/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const response = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw?.lat,
          bl_longitude: sw?.lng,
          tr_latitude: ne?.lat,
          tr_longitude: ne?.lng,
        },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        },
      },
    );

    const data = response?.data?.data;
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching places data:', error.message);
    return [];
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        'https://community-open-weather-map.p.rapidapi.com/find',
        {
          params: { lat, lon: lng },
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          },
        },
      );

      return data;
    }
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    return {};
  }
};
