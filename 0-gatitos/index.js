new Vue({
  el: "#app",
  data: {
    enlace: "http://www.vuejs.org",
    baseUrl: "https://placekitten.com",
    ancho: 50,
    alto: 50,
  },
  computed: {
    urlCompleta(){
      return `${this.baseUrl}/${this.ancho * 4}/${this.alto * 4}`;
    }
  }
});
  Vue.config.devtools = true;