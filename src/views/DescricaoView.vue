<script>
import FilmesAPI from "@/api/filmes";
const filmeApi = new FilmesAPI();
export default {
  props: ["id"],
  data() {
    return {
      filme: {},
      video: {},
    };
  },
  async created() {
    this.filme = await filmeApi.buscarFilmePorId(this.id);
    this.video = await filmeApi.buscarVideoFilme(this.id);
  },
  methods: {
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    formataData(data) {
      return new Date(data).toLocaleDateString("pt-BR", { timeZone: "UTC" });
    },
    formataDuracao(duracao) {
      const min = duracao % 60;
      duracao = duracao - min;
      const hora = duracao / 60;
      return `${hora}h${min}min`;
    },
    mostraGenero(id) {
      this.$router.push(`/filmes-por-genero/${id}`);
    },
    getVideoFilme(key) {
      return `http://www.youtube.com/embed/${key}`;
    },
  },
};
</script>
<template>
  <main>
    <h1 class="nome">{{ filme.title }}</h1>
    <div class="filme_desc">
      <img :key="filme.id" :src="getImgUrl(filme.poster_path)" alt="" class="filme_img" />
      <div class="board">
        <div class="desc">
          <h3 class="nome3">
            Gênero:
            <span @click="mostraGenero(genre.id)" class="genre" v-for="genre of filme.genres" :key="genre.id">{{
                genre.name
            }}</span>
          </h3>
          <h3 class="nome3">
            Data de lançamento: {{ formataData(filme.release_date) }}
          </h3>

          <h3 class="nome3">
            Avaliação: {{ parseFloat(filme.vote_average).toFixed(1) }}
          </h3>
          <h3 class="nome3">
            Duração do filme: {{ formataDuracao(filme.runtime) }}
          </h3>
          <h3 class="nome4">Sinopse: {{ filme.overview }}</h3>
          <h3 class="nome4 tagline">"{{ filme.tagline }}"</h3>
        </div>
        <div v-if="video.length > 0">
          <iframe id="ytplayer" type="text/html" width="800px" height="400px" :src="getVideoFilme(video[0].key)"
            frameborder="0" />
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.genre {
  background-color: rgb(24, 24, 90);
  padding: 3px 12px;
  margin: 0 4px;
  border-radius: 10px;
  color: rgb(214, 138, 138);
}

.filme_desc {
  display: flex;
  justify-content: center;
  align-items: center;
}

.filme_img {
  width: 500px;
  height: 750px;
  margin-right: 1%;
}

.nome3 {
  color: white;
  padding: 0 2%;
  display: inline-block;
}

.nome4 {
  color: white;
  padding: 0 2%;
}

.desc {
  margin: 1% 0;
}

.board {
  background-color: rgb(46, 46, 46);
  height: 750px;
  width: 800px;
}

.tagline {
  text-align: center;
  margin: 4% 0;
  font-size: 25px;
}
</style>
