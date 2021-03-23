new Vue({
  el: "#app",
  data: {
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
  computed: {
    filtroTareas(){
      return this.tareas.filter(tarea =>{
        return tarea.tiempo <= this.tiempo && tarea.nombre.includes(this.busqueda);
      })
    }
  }
})

Vue.config.devtools = true;