var app = new Vue({
  el: "#app",
  data: {
    title: "Iniciando con Vue!",
    name: "Javier",
    textHtml: "<p>Texto en html</p>",
    input: "",
  },
  methods: {
    accept() {
      console.log(this.input);
      this.input = "";
    },
  },
});
