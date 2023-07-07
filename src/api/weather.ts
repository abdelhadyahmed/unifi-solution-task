import axios from "axios";

export function getWeather(lat: number, lon: number): Promise<any> {
  return new Promise((resolve, reject) => {
    return axios
      .get(
        `https://openweathermap.org/data/2.5/weather?id=7922173&lat=${lat}&lon=${lon}&appid=439d4b804bc8187953eb36d2a8c26a02`
      )
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
}

export function getfutureWeather(lat: number, lon: number): Promise<any> {
  return new Promise((resolve, reject) => {
    return axios
      .get(
        `https://openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`
      )
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
}
