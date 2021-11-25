Vue.component("navbar", {
  template: `
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <!-- Navbar Brand-->
    <a class="navbar-brand ps-3" href="index.html">Iniciando Vue</a>
    <!-- Sidebar Toggle-->
    <button
        class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
    >
        <i class="fas fa-bars"></i>
    </button>
  </nav>`,
});

Vue.component("menu-left", {
  template: `
  <div id="layoutSidenav_nav">
    <nav
      class="sb-sidenav accordion sb-sidenav-dark"
      id="sidenavAccordion"
      >
      <div class="sb-sidenav-menu">
          <div class="nav">
            <div class="sb-sidenav-menu-heading">Core</div>
            <a class="nav-link" href="index.html">
                <div class="sb-nav-link-icon">
                  <i class="fas fa-tachometer-alt"></i>
                </div>
                Inicio
            </a>
            <div class="sb-sidenav-menu-heading">Interface</div>
            <a
                class="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapseDesafios"
                aria-expanded="false"
                aria-controls="collapseDesafios"
                >
                <div class="sb-nav-link-icon">
                  <i class="fas fa-columns"></i>
                </div>
                Desafíos
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
            </a>
            <div
                class="collapse"
                id="collapseDesafios"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
                >
                <nav class="sb-sidenav-menu-nested nav">
                  <a class="nav-link" href="desafio01.html">Contador</a>
                </nav>
            </div>
            <div
                class="collapse"
                id="collapseDesafios"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion"
                >
                <nav class="sb-sidenav-menu-nested nav">
                  <a class="nav-link" href="desafio02.html">Componentes</a>
                </nav>
            </div>
          </div>
      </div>
    </nav>
  </div>`,
});

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
