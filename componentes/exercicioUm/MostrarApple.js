import mostrarCambio from "./MostrarCambio.js";

export default {
  name: "mostrarApple",
  components: {
    mostrarCambio,
  },
  components: {
    mostrarCambio,
  },
  data() {
    return {
      precoAcao: 0,
    };
  },

  methods: {
    puxarApple() {
      fetch("https://api.origamid.dev/stock/aapl/quote")
        .then((res) => res.json())
        .then((res) => {
          this.precoAcao = res.marketCap;
        });
    },
  },
  created() {
    this.puxarApple();
  },
  template: `
          <div>
          <span>Valor da Apple: {{precoAcao}}</span>
          <br>
          <mostrar-cambio></mostrar-cambio>
          </div>
          `, // apos importar o componente, pode se usar o kabeb-case para utilizalo no template do componente pai
};
