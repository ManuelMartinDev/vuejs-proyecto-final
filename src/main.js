import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import VueVideoPlayer from "@videojs-player/vue";
import "video.js/dist/video-js.css";
createApp(App).use(router).use(VueVideoPlayer).mount("#app");
