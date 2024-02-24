<script setup>
import { ref, onMounted } from "vue";
import { circle } from "./canvasUtils/index.js"

/**
 * Referência para o elemento canvas.
 * @type {Ref<HTMLElement>}
 */
 const canvasElement = ref();

/**
 * Referência para o contexto de canvas.
 * @type {Ref<CanvasRenderingContext2D>}
 */
const ctx = ref();

/**
 * Largura da janela do navegador.
 * @type {number}
 */
const window_width = window.innerWidth;

/**
 * Altura da janela do navegador.
 * @type {number}
 */
const window_height = window.innerHeight;
/**
 * Configuração do canvas.
 * @typedef {Object} CanvasConfig
 * @property {number} width - A largura do canvas.
 * @property {number} height - A altura do canvas.
 * @property {string} color - A cor de fundo do canvas.
 */
const canvasConfig = {
  width: window_width, 
  height: window_height, 
  color: "#99bbf9",
}

onMounted(() => {
  ctx.value = canvasElement.value.getContext("2d");
  render();
})

/**
 * Define a configuração do canvas.
 * @param {CanvasConfig} config - A configuração do canvas.
 */
const setCanvasConfig = (config) => {
  canvasElement.value.width = config.width;
  canvasElement.value.height = config.height;
  canvasElement.value.style.backgroundColor = config.color
}

/**
 * Renderiza o canvas com a configuração
 * @function
 */
const render = () => {
  setCanvasConfig(canvasConfig);

  circle({ text: "Luposki", lineColor: "#000", bgColor: "#80ffac", textSize: 16 }).draw(ctx.value);
}


</script>

<template>
  <canvas ref="canvasElement"></canvas>
</template>

<style scoped>

</style>