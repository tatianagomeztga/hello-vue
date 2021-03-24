const vm = new Vue({
  el: '#app',
  data: {
    password: null,
    estado: "Introduce nueva contraseña...",
    novalidos: [
      "admin",
      "12345",
      "password",
    ],
  },
  watch: {
    password(nuevo, antiguo){

      if(this.novalidos.indexOf(nuevo) > -1){
        this.estado = "Contraseña no válida";
        return false;
      }

      if (nuevo.length < 5){
        this.estado = "La contraseña debe de tener al menos 5 carácteres";
        return false;
      }

      this.estado = "Contraseña correcta";
    }
  }
})

Vue.config.devtools = true;