/**
 * Cria um objeto representando um círculo com opções específicas.
 * @typedef {Object} Circle
 * @property {function} draw - Função para desenhar o círculo em um contexto de canvas.
 */

/**
 * Cria um objeto representando um círculo com opções específicas.
 * @typedef {Object} CircleOptions
 * @property {number} [xpos=100] - A coordenada x do centro do círculo.
 * @property {number} [ypos=100] - A coordenada y do centro do círculo.
 * @property {number} [radius=50] - O raio do círculo.
 * @property {string} [lineColor='#000'] - A cor da linha do círculo.
 * @property {string} [bgColor='transparent'] - A cor de fundo do círculo.
 * @property {number} [lineWidth=1] - A largura da linha do círculo.
 * @property {string} [text=''] - O texto associado ao círculo.
 * @property {number} [textSize=12] - O tamanho do texto associado ao círculo.
 */

/**
 * Cria um objeto representando um círculo com opções específicas.
 * @function
 * @param {CircleOptions} [options] - As opções para o círculo.
 * @returns {Circle} Um objeto que representa um círculo com uma função `draw`.
 */
const circle = (options = {}) => {
  const {
    xpos = 100, 
    ypos = 100, 
    radius = 50, 
    lineColor = "#000", 
    bgColor = "transparent", 
    lineWidth = 1,
    text = "",
    textSize = 12
  } = options;

  /**
   * Desenha o círculo em um contexto de canvas.
   * @param {CanvasRenderingContext2D} ctx - O contexto de canvas no qual desenhar o círculo.
   */
  const draw = (ctx) => {
    ctx.beginPath();
        
    // Desenha o círculo
    ctx.arc(xpos, ypos, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = bgColor;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    
    // Configuração do texto
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${Number(textSize)}px Arial`;
    
    // Preenche e traça o círculo
    if(!text) {
      ctx.fill();
    }
    ctx.stroke();
    ctx.fillText(text, xpos, ypos);
    
    // Adiciona o texto
    
    ctx.closePath();
};

  return {
    draw,
  };
};

export default circle;
