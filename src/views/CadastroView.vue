<script setup></script>
<template>
  <h1 class="nome">Cadastro</h1>
  <div class="formCard">
    <form class="formCadastro">
      <input placeholder="Nome Completo" />
      <input placeholder="Usuário" />
      <input placeholder="Email" />
      <input placeholder="Telefone" />
      <input placeholder="Senha" />
      <input placeholder="Confirme sua senha" />
      <button>Cadastrar</button>
    </form>
  </div>
</template>
<style scoped>
.formCard {
  display: flex;
  justify-content: center;
  align-items: center;
}
.formCadastro {
  width: 400px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(46, 46, 46);
}
.formCadastro input {
  width: 88%;
  height: 30px;
  font-size: 20px;
  padding: 5px;
}
.formCadastro button {
  border: 1px solid black;
  border-radius: 7px;
  width: 100px;
  height: 35px;
  font-size: 17px;
}
.formCadastro button:active {
  font-weight: bolder;
}
.formCadastro input,
button {
  margin-top: 30px;
  margin-bottom: -10px;
}
</style>
