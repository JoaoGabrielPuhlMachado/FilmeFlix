<script>
import ListaFilmes from "../components/ListaFilmes.vue";
import GenerosAPI from "@/api/genero";
const generoApi = new GenerosAPI();
export default {
  components: { ListaFilmes },
  props: ["id"],
  data() {
    return {
      show: [],
      genres: [],
      currentGenre: {
        name: "teste",
      },
    };
  },
  async created() {
    this.show = await generoApi.showGeneros(this.id);
    this.genres = await generoApi.buscarGeneros();
    this.currentGenre = this.genres.find((g) => g.id == this.id);
  },
  watch: {
    async id() {
      this.currentGenre = this.genres.find((g) => g.id == this.id);
      this.show = await generoApi.showGeneros(this.id);
    },
  },
};
</script>
<template>
  <h1 class="nome">
    {{ currentGenre.name }}
  </h1>
  <ListaFilmes :filmes="show" quantidade="20" />
</template>
