import { createApp } from "vue";
import App from "./App";
import { ImageAutoLoader } from "./plugins/ImageAutoLoader";
import router from "@/router";
import "./reset.scss";

const app = createApp(App);
app.use(ImageAutoLoader("me_asstes_images")).use(router);
app.mount("#app");
