<template>
  <div class="fundoblur"></div>
  <div class="blur shape1"></div>
  <div class="blur shape2"></div>
  <div class="blur shape3"></div>
  <div class="blur shape4"></div>
  <div class="blur shape5"></div>
  <div class="blur shape6"></div>
  <div class="blur shape7"></div>
  <div class="blur shape8"></div>
</template>
<style scoped>
.blur {
  filter: blur(60px);
  z-index: -1;
  color: transparent;
  position: fixed;
  width: 100px;
  height: 100px;
}
.fundoblur {
  position: fixed;
  z-index: -2;
  filter: blur(5px);
  width: 100%;
  height: 100%;
  top: 0%;
  background-image: url(@/assets/imagens/outragalaxia.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.shape1 {
  top: 20%;
  left: 20%;
  background-color: aqua;
  width: 100px;
  height: 100px;
}
.shape2 {
  top: 75%;
  left: 4%;
  background-color: white;
  width: 150px;
  height: 150px;
}
.shape3 {
  top: 15%;
  left: 90%;
  background-color: blueviolet;
  width: 200px;
  height: 200px;
}
.shape4 {
  top: 70%;
  left: 50%;
  background-color: fuchsia;
}
.shape5 {
  top: 85%;
  left: 80%;
  background-color: aqua;
}
.shape6 {
  top: 25%;
  left: 25%;
  background-color: fuchsia;
}
.shape7 {
  top: 65%;
  left: 45%;
  background-color: blueviolet;
}
.shape8 {
  top: 25%;
  left: 60%;
  background-color: white;
}
</style>
