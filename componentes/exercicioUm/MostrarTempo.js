export default {
  name: "mostrarTempo",
  data() {
    return {
      tempo: {},
    };
  },
  methods: {
    puxarTemp() {
      fetch("https://api.origamid.dev/weather/rio")
        .then((res) => res.json())
        .then((res) => {
          this.tempo = res.consolidated_weather[0].max_temp.toFixed(2);
        });
    },
  },
  created() {
    this.puxarTemp();
  },
  template: `
        <span>Rio de janeiro, máximo de : {{tempo}}°C</span>
    `,
};
