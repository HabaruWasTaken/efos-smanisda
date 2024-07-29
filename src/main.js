import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faAngleUp, faXmark,faCopyright, faHeart, faCopy, faLink } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBars, faAngleUp, faXmark, faWhatsapp, faInstagram, faCopyright, faHeart, faCopy, faLink);
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')