import { defineStore } from 'pinia';
import axios from 'axios';

const apiKey = "d856648e8ee9a2cd886dded2cb9cf76b"; 

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weathers: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchWeather(location) {
      if (this.weathers.length >= 3) {
        this.error = 'Maximum of 3 locations reached';
        return;
      }

      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        this.weathers.push(response.data);
      } catch (error) {
        this.error = 'Failed to fetch weather data';
      } finally {
        this.loading = false;
      }
    },
    removeWeather(index) {
      this.weathers.splice(index, 1);
    }
  }
});

