import { API_KEY, AUTH_TOKEN } from '../config/config.js';

$.ajaxPrefilter((settings, _, jqXHR) => {
  jqXHR.setRequestHeader('Authorization', `Bearer ${AUTH_TOKEN}`);
  jqXHR.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
});

var getDocumentation = () => {
  var url = `https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`;
  var sampleurl = 'https://api.themoviedb.org/3/movie/76341';
  $.get(sampleurl)
    .done(res => console.log(res))
    .fail(err => console.error(err));
}

export default getDocumentation;
