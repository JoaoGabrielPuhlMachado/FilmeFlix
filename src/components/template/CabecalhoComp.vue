<script>
import GenerosAPI from "@/api/genero";
const generoApi = new GenerosAPI();
export default {
  props: ["id"],
  data() {
    return {
      genres: [],
      generoatual: "",
    };
  },
  async created() {
    this.genres = await generoApi.buscarGeneros();
  },
  methods: {
    mostraGenero() {
      this.$router.push(`/filmes-por-genero/${this.generoatual}`);
    },
  },
};
</script>
<template>
  <header>
    <div>
      <RouterLink to="/"><span>Home</span></RouterLink>
      <span>|</span>
      <RouterLink to="/filmes"><span>Filmes</span></RouterLink>
      <span>|</span>
      <select @change="mostraGenero" v-model="generoatual">
        <option value="" disabled>Gêneros</option>
        <option v-for="genre of genres" :key="genre.id" :value="genre.id">
          {{ genre.name }}
        </option>
      </select>
    </div>
    <div>
      <RouterLink to="/login"><span class="teste">Login</span></RouterLink>
    </div>
  </header>
</template>
<style scoped>
header {
  font-size: 1.3em;
  height: 60px;
  background-color: rgb(46, 46, 46);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
header span {
  margin: 0 10px;
}
header a {
  text-decoration: none;
  color: white;
}
.router-link-active {
  font-weight: bolder;
}
select {
  height: 40px;
  border: 0;
  background-color: rgb(46, 46, 46);
  color: white;
  font-size: 1em;
  padding: 10px;
  width: 200px;
}
select:focus {
  outline: none;
}
</style>
