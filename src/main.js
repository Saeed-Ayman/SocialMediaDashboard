import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFacebookSquare, BiTwitter, RiInstagramFill, BiYoutube, MdArrowdropup, MdArrowdropdown } from "oh-vue-icons/icons";

addIcons(FaFacebookSquare, BiTwitter, RiInstagramFill, BiYoutube, MdArrowdropup, MdArrowdropdown)

createApp(App).component("v-icon", OhVueIcon).mount('#app')
