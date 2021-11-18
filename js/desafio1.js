var app = new Vue({
  el: "#app",
  data: {
    titulo: "Contador",
    subtitulo: "Desafío 1",
    contador: 0,
    cantidadClicks: 0,
    tituloCaja: "Contador con Vue",
    tituloClicks: "<h5>Cantidad de clicks</h5>",
    tituloPotencia: "<h5>Contador a la potencia</h5>",
    error: false,
  },
  methods: {
    sumar() {
      this.contador++;
      this.error = this.contador === 0;
      this.cantidadClicks++;
    },
    restar() {
      if (this.contador > 0) this.contador--;
      this.error = this.contador === 0;
      this.cantidadClicks++;
    },
  },
  computed: {
    potencia() {
      return Math.pow(this.contador, 2);
    },
  },
});
