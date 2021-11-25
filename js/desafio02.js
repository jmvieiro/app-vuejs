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

Vue.component("row", {
  props: ["tarea", "index"],
  template: `<tr>
      <td scope="row">{{tarea.id}}</td>
      <td>{{tarea.titulo}}</td>
      <td>{{tarea.descripcion}}</td>
      <td>
          <span v-if="tarea.prioridad" class="btn btn-sm btn-success">Alta</span>
          <span v-else class="btn btn-sm btn-danger">Baja</span>
      </td>
      <td><button class="btn btn-sm btn-danger" @click="eliminarTarea(index)">Eliminar</button></td>
    </tr>
  `,
  methods: {
    eliminarTarea(indice) {
      app.tareas.splice(indice, 1);
      app.mostrarAlerta("¡Tarea eliminada con éxito!");
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    titulo: "Directivas condicionales, estructurales y de atributo",
    subtitulo: "Clase 3",
    tituloCaja: "v-if | v-else | v-else-if",
    tituloCaja2: "v-for",
    show: false,
    titulos: ["ID", "Título", "Descripción", "Prioridad", "Acción"],
    tareas: [],
    inputTitulo: "",
    inputDescripcion: "",
    alerta: false,
    textoAlerta: "",
  },
  methods: {
    mostrarTexto() {
      this.show = !this.show;
    },
    guardarTarea() {
      const nuevaTarea = {
        id: Date.now(),
        titulo: this.inputTitulo,
        descripcion: this.inputDescripcion,
        prioridad: inputPrioritaria.checked,
      };
      this.tareas.push(nuevaTarea);
      this.alerta = true;
      this.mostrarAlerta("¡Tarea agregada con éxito!");
      this.inputTitulo = "";
      this.inputDescripcion = "";
      inputPrioritaria.checked = false;
      this.$refs.titulo.focus();
    },
    mostrarAlerta(texto) {
      this.alerta = true;
      this.textoAlerta = texto;
      setTimeout(() => {
        this.alerta = false;
      }, 3000);
    },
  },
  computed: {
    cantidadTareas() {
      return `Cantidad tareas: ${this.tareas.length}`;
    },
  },
  watch: {
    tareas() {
      localStorage.setItem("tareas", JSON.stringify(this.tareas));
    },
  },
  mounted() {
    const itemsEnLocalStorage = localStorage.getItem("tareas");
    if (itemsEnLocalStorage) this.tareas = JSON.parse(itemsEnLocalStorage);
  },
});
