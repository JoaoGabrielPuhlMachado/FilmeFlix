import axios from "axios";
export default class FilmesAPI {
  async buscarPopulares() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=0314790af3587d27241f1cae9a6ef5cd&language=pt-BR&page=1"
    );
    return data.results;
  }
  async buscarLancamentos() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=0314790af3587d27241f1cae9a6ef5cd&language=pt-BR&page=1"
    );
    return data.results;
  }
  async buscarMelhoravaliacao() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=0314790af3587d27241f1cae9a6ef5cd&language=pt-BR&page=1"
    );
    return data.results;
  }
  async buscarFilmePorId(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0314790af3587d27241f1cae9a6ef5cd&language=pt-BR`
    );
    return data;
  }
  async buscarVideoFilme(id){
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0314790af3587d27241f1cae9a6ef5cd&language=pt-BR`
    )
    return data.results;
  }
}
