<script setup></script>
<template>
  <h1 class="nome">Login</h1>
  <div class="formCard">
    <form class="formLogin">
      <input placeholder="Usuário" />
      <input placeholder="Email" />
      <input placeholder="Senha" />
      <button>Entrar</button>
      <p style="color: white; font-weight: bold">
        Não possui cadastro?
        <RouterLink to="/cadastro">Clique aqui!</RouterLink>
      </p>
    </form>
  </div>
</template>
<style scoped>
.formCard {
  display: flex;
  justify-content: center;
  align-items: center;
}
.formLogin {
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(46, 46, 46);
}
.formLogin input {
  width: 88%;
  height: 30px;
  font-size: 20px;
  padding: 5px;
}
.formLogin button {
  border: 1px solid black;
  border-radius: 7px;
  width: 100px;
  height: 35px;
  font-size: 17px;
}
.formLogin button:active {
  font-weight: bolder;
}
.formLogin input,
button {
  margin-top: 30px;
  margin-bottom: -10px;
}
</style>
