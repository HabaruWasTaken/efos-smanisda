<script setup>
  import { ref } from 'vue'
  import linkList from '../assets/link.json'
  const popCopy = ref('none');
  function clipBoard(text, index) {
    navigator.clipboard.writeText(text);
    this.popCopy = `show${index}`;
    console.log(popCopy)
    setTimeout(()=>{this.popCopy = 'none'},3000)
  }
</script>

<template>
  <div class="header">
    <img src="../assets/logo.svg" alt="" srcset="" class="logo">
    <div class="title">EFOS SMANISDA</div>
    <div class="description">We are the English Federation of Smanisda!<br>Contact us by the links down below:</div>
  </div>
  
  <div class="content">
    <ul class="links">
      <li v-for="(link, name, index) in linkList" class="linkWrapper"><a class="link" :href="link" target="_blank">{{name}}</a><button @click="clipBoard(link, index)" class="copyButton"><img src="./assets/copy.svg" alt="" class="copy"></button>
    <div v-if="popCopy == `show${index}`" class="popCopy">Copied link!</div></li>
    </ul>
  </div>
</template>

<style scoped>
  @font-face {
    font-family: harryPotter;
    src: url(../assets/harryPotter.ttf);
  }

  *{
    text-decoration: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-family: harryPotter;
    letter-spacing: 2px;
    border: none;
    color: black;
  }

  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
  }

  body {
    display: flex;
    text-align: center;
  }

  .header{
    margin-top: 20px;
  }

  .content {
    margin-bottom: 20px;
  }

  .logo {
    background-color: red;
    height: 180px;
  }

  .title {
    margin-top: 20px;
    font-size: 42px;
  }

  .description {
    margin-top: 10px;
    font-size: 25px;
  }

  .popCopy {
    background-color: rgb(42, 42, 42);
    color: white;
    font-family: sans-serif;
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    right: -32px;
    bottom: 60px;
    z-index: 2;
  }

  .popCopy::before{
    content: "";
    width: 25px;
    height: 25px;
    background-color: rgb(42, 42, 42);
    border-radius: 5px;
    position: absolute;
    transform: rotate(45deg);
    bottom: -10px;
    right: 40px;
    z-index: -1;
  }

  .linkWrapper{
    display: flex;
    align-items: center;    
    margin-bottom: 20px;
    position: relative;
  }

  .links {
    margin-top: 40px;
    position: relative;
  }

  .link {
    background-image: linear-gradient(rgb(255, 238, 162), rgb(255, 158, 98));
    padding: 15px 10px;
    border-radius: 10px;
    box-shadow: 5px 5px rgb(103, 56, 24);
    font-size: 25px;
    width: 100%;    
    position: relative;
    display:list-item;
    text-align: center;
  }

  .copyButton{
    position: absolute;
    right: 10px;
    background-color: rgba(0,0,0,0);
  }

  .copy{
    height: 20px;
  }

  .copy:hover{
    content: url(./assets/copyHover.svg);
  }

</style>
