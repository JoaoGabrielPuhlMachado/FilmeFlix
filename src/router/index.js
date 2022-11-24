import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FilmesView from "../views/FilmesView.vue";
import GeneroView from "../views/GeneroView.vue";
import DescricaoView from "../views/DescricaoView.vue";
import LoginView from "../views/LoginView.vue";
import CadastroView from "../views/CadastroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/filmes",
      name: "filmes",
      component: FilmesView,
    },
    {
      path: "/filmes-por-genero/:id",
      name: "genero",
      component: GeneroView,
      props: true,
    },
    {
      path: "/filme/:id",
      name: "descricao",
      component: DescricaoView,
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: CadastroView,
    },
  ],
});

export default router;
