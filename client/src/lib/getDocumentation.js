import { API_KEY, AUTH_TOKEN } from "../config/config";

$.ajaxPrefilter((settings, _, jqXHR) => {
  jqXHR.setRequestHeader("Authorization", `Bearer ${AUTH_TOKEN}`);
  jqXHR.setRequestHeader("Content-Type", "application/json;charset=utf-8");
});

var getDocumentation = (query, callback) => {
  const url = `https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`;
  const sampleurl = "https://api.themoviedb.org/3/movie/76341";
  const sampleurl2 = `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`;
  const sampleurl3 = `https://api.themoviedb.org/3/movie/76341/similar?api_key=${API_KEY}&language=en-US&page=1`;
  const sampleurl4 = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  $.get(sampleurl4)
    .done((res) => console.log(res))
    .fail((err) => console.error(err));
};

export default getDocumentation;
