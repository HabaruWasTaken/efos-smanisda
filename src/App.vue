<script setup>
  import { ref, onMounted } from 'vue';

  const isLoading = ref(true);

  onMounted(()=>{
    setTimeout(() => {
      isLoading.value = false
    }, 1500)
  })
  

  const menuActive = ref(false);
  const topvalue = ref(0);
  function toggleMenu() {
    menuActive.value = !menuActive.value;

  }
  window.addEventListener("scroll", () => {
        topvalue.value = scrollY;
  })
  import linkList from './assets/link.json'
  const cd = ref(false)
  const popCopy = ref('none');

  function resetMenu(){
    popCopy.value = 'none';
    cd.value = false;
  }
  function clipBoard(text, index) {
    navigator.clipboard.writeText(text);
    popCopy.value = `show${index}`;
    cd.value = true
  }

  const imgs = ref({ 'debate': ['assets/debate-1.jpeg', 'assets/debate-2.jpeg'], 'stortell': ['assets/stortell-1.jpeg', 'assets/stortell-2.jpeg'], 'speech': ['assets/speech-1.jpeg', 'assets/speech-2.jpeg']})
  const indexImgs = ref(0)
  const timer = setInterval(next, 3000)

  function next() {
    if(indexImgs.value > imgs.value.length-1 ) return resetIndex();
    indexImgs.value += 1;
  }

  function resetIndex() {
    indexImgs.value = 0;
  }

  function imgNow(type) {
    if (type == 'debate') return imgs.value['debate'][Math.abs(indexImgs.value) % imgs.value['debate'].length];
    if (type == 'stortell') return imgs.value['stortell'][Math.abs(indexImgs.value) % imgs.value['debate'].length];
    if (type == 'speech') return imgs.value['speech'][Math.abs(indexImgs.value) % imgs.value['debate'].length];
  }

  function getImageUrl(name) {
    const a = new URL(`./${name}`, import.meta.url).href;
    return `${a}`.split('/').splice(3).join('/');
  }

  function scrollTop() {
    window.scrollTo(0,0);
  }

</script>

<template>
  <div class="loading" v-if="isLoading">
    <div class="loader-wrapper">
      <div class="inner-wrapper">
        <span class="loader-inner inner1"></span>
        <span class="loader-inner inner2"></span>
        <span class="loader-inner inner3"></span>
        <span class="loader-inner inner4"></span>
        <span class="loader-inner inner5"></span>
        <span class="loader-inner inner6"></span>
        <span class="loader-inner inner7"></span>
      </div>
      <div class="load-text">Loading...</div>
    </div>
  </div>

  <div class="scroll-up-btn" @click="scrollTop()" :class="{show: topvalue > 20 && !(topvalue <= 20) && !menuActive}">
    <font-awesome-icon icon="angle-up"></font-awesome-icon>
  </div>
  
	<!-- navbar -->
	<nav class="navbar" :class="{sticky: topvalue > 20 && !(topvalue <= 20)}">
		<div class="max-width">
			<div class="logo"><a href="">EFOS SMANISDA</a></div>
          <ul class="menu" :class="{active: menuActive}">
            <li><a @click="toggleMenu()" href="#home">Home</a></li>
            <li><a @click="toggleMenu()" href="#introduction">Introduction</a></li>
            <li><a @click="toggleMenu()" href="#divisions">Divisions</a></li>
            <!-- <li><a href="#sub-divisions">Sub Divisions</a></li> -->
            <li><a @click="toggleMenu()" href="#contact">Contact</a></li>
          </ul>
          <div @click="toggleMenu()" class="menu-btn">
            <font-awesome-icon icon="bars" v-if="!menuActive"></font-awesome-icon>
            <font-awesome-icon icon="xmark" v-else-if="menuActive"></font-awesome-icon>
          </div>
      </div>
    </nav>

    <!-- home -->

    <section class="home" id="home">
      <div class="max-width">
        <div class="home-content">
          <div class="text-1">Welcome to</div>
          <div class="text-2">EFOS SMANISDA</div>
          <div class="text-3">English Federation of Smanisda <span class="typing"></span></div>
          <a href="#contact">Join us!</a>
        </div>
      </div>
      <svg class="wave-down" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 215, 134, 1)" offset="0%"></stop><stop stop-color="rgba(255, 238, 162, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,75L60,65C120,55,240,35,360,37.5C480,40,600,65,720,65C840,65,960,40,1080,32.5C1200,25,1320,35,1440,47.5C1560,60,1680,75,1800,70C1920,65,2040,40,2160,27.5C2280,15,2400,15,2520,17.5C2640,20,2760,25,2880,30C3000,35,3120,40,3240,45C3360,50,3480,55,3600,55C3720,55,3840,50,3960,47.5C4080,45,4200,45,4320,47.5C4440,50,4560,55,4680,55C4800,55,4920,50,5040,47.5C5160,45,5280,45,5400,52.5C5520,60,5640,75,5760,87.5C5880,100,6000,110,6120,97.5C6240,85,6360,50,6480,37.5C6600,25,6720,35,6840,40C6960,45,7080,45,7200,40C7320,35,7440,25,7560,30C7680,35,7800,55,7920,60C8040,65,8160,55,8280,65C8400,75,8520,105,8580,120L8640,135L8640,150L8580,150C8520,150,8400,150,8280,150C8160,150,8040,150,7920,150C7800,150,7680,150,7560,150C7440,150,7320,150,7200,150C7080,150,6960,150,6840,150C6720,150,6600,150,6480,150C6360,150,6240,150,6120,150C6000,150,5880,150,5760,150C5640,150,5520,150,5400,150C5280,150,5160,150,5040,150C4920,150,4800,150,4680,150C4560,150,4440,150,4320,150C4200,150,4080,150,3960,150C3840,150,3720,150,3600,150C3480,150,3360,150,3240,150C3120,150,3000,150,2880,150C2760,150,2640,150,2520,150C2400,150,2280,150,2160,150C2040,150,1920,150,1800,150C1680,150,1560,150,1440,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z"></path></svg>
    </section>

  

    <!-- introduction -->

    <section class="introduction" id="introduction">
      <div class="max-width">
        <h2 class="title">Introduction</h2>
        <div class="introduction-content">
          <div class="column left">
            <img src="./assets/logo.png" alt="">
          </div>
          <div class="column right">
            <div class="text">English Federation Of Smanisda</div>
            <p></p>
            <a href="#contact">Join us!</a>
          </div>
        </div>
      </div>
    </section>



    <!-- divisions -->

    <section class="divisions" id="divisions">
      <svg class="wave-up" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 320" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 215, 134, 1)" offset="0%"></stop><stop stop-color="rgba(255, 158, 98, 1)" offset="50%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-1)" d="M0,160L40,133.3C80,107,160,53,240,26.7C320,0,400,0,480,16C560,32,640,64,720,64C800,64,880,32,960,32C1040,32,1120,64,1200,96C1280,128,1360,160,1440,144C1520,128,1600,64,1680,74.7C1760,85,1840,171,1920,202.7C2000,235,2080,213,2160,208C2240,203,2320,213,2400,186.7C2480,160,2560,96,2640,69.3C2720,43,2800,53,2880,69.3C2960,85,3040,107,3120,117.3C3200,128,3280,128,3360,149.3C3440,171,3520,213,3600,197.3C3680,181,3760,107,3840,80C3920,53,4000,75,4080,112C4160,149,4240,203,4320,202.7C4400,203,4480,149,4560,154.7C4640,160,4720,224,4800,224C4880,224,4960,160,5040,112C5120,64,5200,32,5280,42.7C5360,53,5440,107,5520,112C5600,117,5680,75,5720,53.3L5760,32L5760,320L5720,320C5680,320,5600,320,5520,320C5440,320,5360,320,5280,320C5200,320,5120,320,5040,320C4960,320,4880,320,4800,320C4720,320,4640,320,4560,320C4480,320,4400,320,4320,320C4240,320,4160,320,4080,320C4000,320,3920,320,3840,320C3760,320,3680,320,3600,320C3520,320,3440,320,3360,320C3280,320,3200,320,3120,320C3040,320,2960,320,2880,320C2800,320,2720,320,2640,320C2560,320,2480,320,2400,320C2320,320,2240,320,2160,320C2080,320,2000,320,1920,320C1840,320,1760,320,1680,320C1600,320,1520,320,1440,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <div class="max-width">
        <h2 class="title">Divisions</h2>
        <div class="divisions-content">
          <div class="card project-1">
            <div class="box" v-for="img in [indexImgs]">
              <img :src="getImageUrl(imgNow('stortell'))" alt="" srcset="" class="img">
              <div class="text">Storytelling</div>
              <p>Act of creating narratives through spoken or written to engage, entertain, and educate audiences. Come bring everyone to see your wonderful world of fantasies!</p>
            </div>
          </div>
          <div class="card">
            <div class="box" v-for="img in [indexImgs]">
              <img :src="getImageUrl(imgNow('debate'))" alt="" srcset="" class="img">
              <div class="text">Debate</div>
              <p>Embark the progressive world with critical thinking and analyzing from diverse perspective.</p>
            </div>
          </div>
          <div class="card">
            <div class="box"  v-for="img in [indexImgs]">
              <img :src="getImageUrl(imgNow('speech'))" alt="" srcset="" class="img">
              <div class="text">Speech</div>
              <p>Transform your voice into a powerful instrument of influence and master the timeless craft of speech. Use your skill to conquer the world</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <svg class="wave-down" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 230" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-3" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 238, 162, 1)" offset="0%"></stop><stop stop-color="rgba(255, 158, 98, 1)" offset="60%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-3)" d="M0,207L40,184C80,161,160,115,240,84.3C320,54,400,38,480,49.8C560,61,640,100,720,107.3C800,115,880,92,960,84.3C1040,77,1120,84,1200,103.5C1280,123,1360,153,1440,138C1520,123,1600,61,1680,34.5C1760,8,1840,15,1920,38.3C2000,61,2080,100,2160,99.7C2240,100,2320,61,2400,69C2480,77,2560,130,2640,138C2720,146,2800,107,2880,99.7C2960,92,3040,115,3120,122.7C3200,130,3280,123,3360,126.5C3440,130,3520,146,3600,145.7C3680,146,3760,130,3840,111.2C3920,92,4000,69,4080,84.3C4160,100,4240,153,4320,157.2C4400,161,4480,115,4560,99.7C4640,84,4720,100,4800,92C4880,84,4960,54,5040,53.7C5120,54,5200,84,5280,95.8C5360,107,5440,100,5520,92C5600,84,5680,77,5720,72.8L5760,69L5760,230L5720,230C5680,230,5600,230,5520,230C5440,230,5360,230,5280,230C5200,230,5120,230,5040,230C4960,230,4880,230,4800,230C4720,230,4640,230,4560,230C4480,230,4400,230,4320,230C4240,230,4160,230,4080,230C4000,230,3920,230,3840,230C3760,230,3680,230,3600,230C3520,230,3440,230,3360,230C3280,230,3200,230,3120,230C3040,230,2960,230,2880,230C2800,230,2720,230,2640,230C2560,230,2480,230,2400,230C2320,230,2240,230,2160,230C2080,230,2000,230,1920,230C1840,230,1760,230,1680,230C1600,230,1520,230,1440,230C1360,230,1280,230,1200,230C1120,230,1040,230,960,230C880,230,800,230,720,230C640,230,560,230,480,230C400,230,320,230,240,230C160,230,80,230,40,230L0,230Z"></path></svg> -->
    </section>

    <!-- sub-divisions -->

    <!-- <section class="sub-divisions" id="sub-divisions">
      <div class="max-width">
        <h2 class="title">Sub Divisions</h2>
        <div class="sub-divisions-content">
          <div class="card project-1">
            <div class="box">
              <img src="./assets/bg.jpeg" alt="" srcset="" class="img">
              <div class="text">Storytelling</div>
              <p>Act of creating narratives through spoken or written to engage, entertain, and educate audiences. Come bring everyone to see your wonderful world of fantasies!</p>
            </div>
          </div>
            <div class="card">
            <div class="box" v-for="img in [indexImgs]">
              <img :src="imgNow()" alt="" srcset="" class="img">
              <div class="text">Debate</div>
              <p>Embark the progressive world with critical thinking and analyzing from diverse perspective.</p>
            </div>
          </div> 
              <div class="card">
            <div class="box">
              <img :src="imgNow()" alt="" srcset="" class="img">
              <div class="text">Speech</div>
              <p>a</p>
            </div>
          </div> 
        </div>
      </div>
    </section> -->

    <!-- contact -->

    <section class="contact" id="contact">
      <!-- <svg class="wave-up" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 240" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-4" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 238, 162, 1)" offset="0%"></stop><stop stop-color="rgba(255, 158, 98, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-4)" d="M0,168L40,176C80,184,160,200,240,192C320,184,400,152,480,116C560,80,640,40,720,28C800,16,880,32,960,60C1040,88,1120,128,1200,128C1280,128,1360,88,1440,92C1520,96,1600,144,1680,144C1760,144,1840,96,1920,64C2000,32,2080,16,2160,36C2240,56,2320,112,2400,136C2480,160,2560,152,2640,128C2720,104,2800,64,2880,60C2960,56,3040,88,3120,88C3200,88,3280,56,3360,40C3440,24,3520,24,3600,48C3680,72,3760,120,3840,144C3920,168,4000,168,4080,160C4160,152,4240,136,4320,120C4400,104,4480,88,4560,92C4640,96,4720,120,4800,128C4880,136,4960,128,5040,112C5120,96,5200,72,5280,60C5360,48,5440,48,5520,52C5600,56,5680,64,5720,68L5760,72L5760,240L5720,240C5680,240,5600,240,5520,240C5440,240,5360,240,5280,240C5200,240,5120,240,5040,240C4960,240,4880,240,4800,240C4720,240,4640,240,4560,240C4480,240,4400,240,4320,240C4240,240,4160,240,4080,240C4000,240,3920,240,3840,240C3760,240,3680,240,3600,240C3520,240,3440,240,3360,240C3280,240,3200,240,3120,240C3040,240,2960,240,2880,240C2800,240,2720,240,2640,240C2560,240,2480,240,2400,240C2320,240,2240,240,2160,240C2080,240,2000,240,1920,240C1840,240,1760,240,1680,240C1600,240,1520,240,1440,240C1360,240,1280,240,1200,240C1120,240,1040,240,960,240C880,240,800,240,720,240C640,240,560,240,480,240C400,240,320,240,240,240C160,240,80,240,40,240L0,240Z"></path></svg> -->
      <div class="max-width">
        <h2 class="title">Contact us</h2>
        <div class="contact-content">
          <div class="column left">
            <div class="text">Links :</div>
            <p></p>
            <ul class="links">
              <li v-for="(link, name, index) in linkList" class="linkWrapper"><a class="link" :href="link" target="_blank">{{name}}</a>
                <button @click="clipBoard(link, index)" class="copyButton">
                  <font-awesome-icon icon="fa-solid fa-copy" />
                </button>
                <div v-if="popCopy == `show${index}`" class="popCopy">Copied link!</div>
              </li>
            </ul>
          </div>
          <div class="column right">
            <div class="icons">
              <div class="row">
                <font-awesome-icon icon="fa-solid fa-link" />
                <div class="info">
                  <div class="head">Link Pendaftaran</div>
                  <div class="sub-title">bit.ly/EFOSREGISTRATION25</div>
                </div>
              </div>
              <div class="row">
                <font-awesome-icon icon="fa-brands fa-whatsapp"></font-awesome-icon>
                <div class="info">
                  <div class="head">Whatsapp (Contact Person)</div>
                  <div class="sub-title">+62 812-3185-5069 (Ilmi XI-9) </div>
                </div>
              </div>
              <div class="row">
                <font-awesome-icon icon="fa-brands fa-instagram" />
                <div class="info">
                  <div class="head">Instagram</div>
                  <div class="sub-title">@efossmanisda</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <footer>
      <span>Created By <a href="#">Evan Adhiarja Yohanes</a> with <font-awesome-icon icon="fas fa-heart" class="heart"></font-awesome-icon> | <font-awesome-icon icon="fas fa-copyright"></font-awesome-icon> 2024 All rights reserved</span>
    </footer>

</template>

<style scoped>
  @import './assets/style.css';
  @import './assets/load.css';
</style>
