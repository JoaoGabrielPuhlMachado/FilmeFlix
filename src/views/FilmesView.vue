<script>
import ListaFilmes from "../components/ListaFilmes.vue";
import FilmesAPI from "@/api/filmes";
const filmeApi = new FilmesAPI();
export default {
  components: { ListaFilmes },
  data() {
    return {
      lancamentos: [],
      populares: [],
    };
  },
  async created() {
    this.lancamentos = await filmeApi.buscarLancamentos();
    this.populares = await filmeApi.buscarPopulares();
  },
};
</script>
<template>
  <h1 class="nome">Filmes</h1>
  <ListaFilmes :filmes="lancamentos" titulo="Lançamentos" />
  <ListaFilmes :filmes="populares" titulo="Populares" />
</template>
