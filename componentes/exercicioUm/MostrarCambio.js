export default {
  name: "mostrarCambio",
  data() {
    return {
      cambio: 0,
    };
  },
  methods: {
    puxarCamb() {
      fetch("https://api.origamid.dev/exchange/usd")
        .then((res) => res.json())
        .then((res) => {
          this.cambio = res.rates.BRL.toFixed(2);
        });
    },
  },
  created() {
    this.puxarCamb();
  },
  template: `
          <span>Valor Dolar/Real: R$ {{cambio}}</span>
      `,
};
