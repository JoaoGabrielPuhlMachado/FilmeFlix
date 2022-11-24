<script>
import FilmesAPI from "@/api/filmes";
const filmeApi = new FilmesAPI();
export default {
  props: {
    filmes: Object,
    quantidade: {
      type: Number,
      default: 4,
    },
    titulo: {
      type: String,
      default: "",
    },
  },
  methods: {
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    mostraFilme(filme) {
      this.$router.push(`/filme/${filme.id}`);
    },
    filteredFilmes() {
      return this.filmes.slice(0, this.quantidade);
    },
  },
};
</script>
<template>
  <h2 class="nome2">{{ titulo }}</h2>
  <img
    v-for="filme of filteredFilmes()"
    :key="filme.id"
    :src="getImgUrl(filme.poster_path)"
    alt=""
    class="filme"
    @click="mostraFilme(filme)"
  />
</template>
<style>
.nome2 {
  color: white;
  margin-left: 3%;
}
</style>
