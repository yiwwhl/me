import { defineConfig, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

enum MODE {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
}

const modeConfigMap: Record<MODE, UserConfig> = {
  [MODE.DEVELOPMENT]: {
    server: {
      host: "127.0.0.1",
      port: 6006,
    },
  },
  [MODE.PRODUCTION]: {},
};

export default defineConfig((configEnv) => {
  const mode = configEnv.mode;
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import '@/assets/styles/variables.scss';\n",
        },
      },
    },
    ...modeConfigMap[mode],
  };
});
