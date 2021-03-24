//Forma tradicional en js
/* window.onload = () => {
  const form = document.querySelector("form");
  const input = document.querySelector("input[type=text]");
  form.onsubmit = (evento) => {
    evento.preventDefault();
    app.tareas.unshift({
      nombre: input.value,
      tiempo: 10,
    });
    input.value = null;
  }
}; */

const app = new Vue({
  el: "#app",
  data: {
    nuevaTarea: '',
    tiempo: 0,
    busqueda: '',
    usuario: {
      username: 'tatgo',
      role: 'admin'
    },
    tareas: [
      {nombre: 'Aprender JS moderno', tiempo: 3},
      {nombre: 'Aprender Vue.js', tiempo: 7},
      {nombre: 'Reparar el coche', tiempo: 23},
      {nombre: 'Viajar más', tiempo: 16},
      {nombre: 'Hacer la cena', tiempo: 12},
      {nombre: 'Mejorar como desarrollador', tiempo: 9},
      {nombre: 'Dar un curso', tiempo: 14},
    ]
  },
  methods:{
    guardarTarea(){
      this.tareas.unshift({
        nombre: this.nuevaTarea,
        tiempo: Math.floor(Math.random() * 100),
      })
      this.nuevaTarea = null;
    }
  },
  computed: {
    filtroTareas(){
      return this.tareas.filter(tarea =>{
        return tarea.tiempo <= this.tiempo && tarea.nombre.includes(this.busqueda);
      })
    }
  }
})

Vue.config.devtools = true;