import axios from "axios";
export default class GenerosAPI {
  async buscarGeneros() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=0314790af3587d27241f1cae9a6ef5cd&language=pt-BR"
    );
    return data.genres;
  }
  async showGeneros(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=0314790af3587d27241f1cae9a6ef5cd&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
    );
    return data.results;
  }
}
