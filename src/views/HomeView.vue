<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <!-- Qidiruv maydoni -->
      <input v-model="searchQuery" type="text" placeholder="Search for a city"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
        @keypress.enter="fetchWeather" />

      <!-- Qidiruv natijalari -->
      <div v-if="weatherData" class="mt-4 p-4 flex flex-col bg-gray-800 rounded shadow gap-y-4">
        <h2 class="text-xl font-bold">{{ weatherData.name }}</h2>
        <p class="text-lg">🌡️ Temperature: {{ weatherData.main.temp }}°C</p>
        <p>☁️ Weather: {{ weatherData.weather[0].description }}</p>
        <p>💨 Wind Speed: {{ weatherData.wind.speed }} m/s</p>
      </div>

      <!-- Natija topilmasa -->
      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";

const searchQuery = ref("");
const weatherData = ref(null);
const error = ref("");

const API_KEY = "8857272b48c13776ef7c9b3cb0f5e3bf";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const fetchWeather = async () => {
  if (!searchQuery.value.trim()) {
    error.value = "Please enter a city name.";
    return;
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: searchQuery.value,
        appid: API_KEY,
        units: "metric",
      },
    });

    weatherData.value = response.data;
    error.value = "";
  } catch (err) {
    error.value = "City not found. Please try another city.";
    weatherData.value = null;
  }
};
</script>
<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.text-white {
  color: #fff;
}

.bg-gray-800 {
  background-color: #2d3748;
}

.text-red-500 {
  color: #f56565;
}

.border-b {
  border-bottom: 1px solid #ccc;
}

.focus\:border-weather-secondary:focus {
  border-color: #004E71;
}
</style>
