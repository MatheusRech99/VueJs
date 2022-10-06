import BotaoContador from "./BotaoContador.js";

export default {
  name: "MenuPrincipal",
  components: {
    BotaoContador,
  },
  template: `
        <ul>
            <li>Home</li>
            <li>Contato</li>
            <botao-contador></botao-contador>
        </ul>
        `,
};
