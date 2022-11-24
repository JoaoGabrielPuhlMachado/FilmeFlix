<script>
import ListaFilmes from "../components/ListaFilmes.vue";
import FilmesAPI from "@/api/filmes";
const filmeApi = new FilmesAPI();
export default {
  components: { ListaFilmes },
  data() {
    return {
      melhores: [],
    };
  },
  async created() {
    this.melhores = await filmeApi.buscarMelhoravaliacao();
  },
};
</script>
<template>
  <h1 class="nome">Top 20 filmes mais bem avaliados</h1>
  <ListaFilmes :filmes="melhores" quantidade="20" />
</template>
