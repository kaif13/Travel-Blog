import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
var stdin_default = defineConfig({
  plugins: [
    tailwindcss()
  ]
});
export {
  stdin_default as default
};
