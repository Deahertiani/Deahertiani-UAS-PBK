<template>
  <q-page class="q-pa-md bg-image">
    <h3>Weather App</h3>
    
    <div class="input-container">
      <q-card class="input-card">
        <q-card-section>
          <q-input filled bottom-slots v-model="location" label="Enter Location" color="white">
            <template v-slot:prepend>
              <q-icon name="fas fa-map-marker-alt" color="white" />
            </template>
            <template v-slot:append>
              <q-icon name="fas fa-times" color="white"@click="location = ''" class="cursor-pointer" />
            </template>
          </q-input>
          <q-btn class="glossy" unelevated rounded color="primary" label="Get Weather" @click="searchWeather" />
        </q-card-section>
      </q-card>
    </div>

    <div class="weather-display">
      <q-card class="weather-card" v-for="(weather, index) in weathers" :key="weather.id">
        <q-card-section>
          <div class="weather-icon">
              <q-icon :name="getWeatherIcon(weather.weather[0].main)" />
            </div>
          <div class="text-h6">
            <q-icon name="fas fa-map-marker-alt" /> {{ weather.name }}, {{ weather.sys.country }}
          </div>
          <div class="timestamp">
            <q-icon name="fas fa-clock" /> {{ new Date().toLocaleString() }}
          </div>
        </q-card-section>

        <q-card-section>
          <div class="main-weather">
            <div class="weather-info">
              <div class="temperature">
                {{ weather.main.temp }}°C
              </div>
              <div class="feels-like">
                Feels like: {{ weather.main.feels_like }}°C
              </div>
              <div class="description">
                {{ weather.weather[0].description }}
              </div>
            </div>
          </div>
          
          <div class="additional-details">
            <div class="detail-item">
              <q-icon name="fas fa-tint" /> Humidity: {{ weather.main.humidity }}%
            </div>
            <div class="detail-item">
              <q-icon name="fas fa-wind" /> Wind Speed: {{ weather.wind.speed }} m/s {{ weather.wind.deg }}°
            </div>
            <div class="detail-item">
              <q-icon name="fas fa-tachometer-alt" /> Pressure: {{ weather.main.pressure }} hPa
            </div>
          </div>
          <q-btn flat icon="delete" color="negative" @click="removeWeather(index)" />
        </q-card-section>
      </q-card>
    </div>
    
    <q-card-section v-if="error">
      <div class="text-negative">
        <q-icon name="fas fa-exclamation-triangle" /> {{ error }}
      </div>
    </q-card-section>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useWeatherStore } from '../stores/weather';

const weatherStore = useWeatherStore();
const location = ref('');

const searchWeather = () => {
  if (location.value) {
    weatherStore.fetchWeather(location.value);
    location.value = '';
  }
};

const removeWeather = (index) => {
  weatherStore.weathers.splice(index, 1); 
};

const weathers = computed(() => weatherStore.weathers);
const loading = computed(() => weatherStore.loading);
const error = computed(() => weatherStore.error);

const getWeatherIcon = (weatherMain) => {
  switch (weatherMain.toLowerCase()) {
    case 'clear':
      return 'fas fa-sun';
    case 'clouds':
      return 'fas fa-cloud';
    case 'rain':
      return 'fas fa-cloud-rain';
    case 'snow':
      return 'fas fa-snowflake';
    case 'thunderstorm':
      return 'fas fa-bolt';
    case 'drizzle':
      return 'fas fa-cloud-showers-heavy';
    default:
      return 'fas fa-cloud';
  }
};


</script>

<style scoped>
.q-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h3{
  color: white;
  text-shadow: 2px 2px #0b07f5;
}

.input-container {
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.input-card {
  max-width: 400px;
  width: 100%;
  background-color: rgb(255 255 255 / 30%);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  color: white;
}

.weather-display {
  max-width: 2500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 20px;

}

.weather-card {
  width: 30%;
  background-color: rgb(255 255 255 / 30%);
  backdrop-filter: blur(10px);
  border-radius: 20px;

}

.weather-info {
  background-color: rgba(255, 255, 255, 0.496);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.additional-details {
  margin-top: 10px;
}

.detail-item i{
  margin: 5px 0;
  color: rgb(93, 93, 249);
}

.weather-icon{
  font-size: 70px;
  color: yellow;
}

.temperature{
  font-size: 30px;
  font-weight: bold ;
  color: red;
  text-align: center;
}

.text-h6 i{
  color: blue;
}

.timestamp i{
  color: aliceblue;
}
</style>
