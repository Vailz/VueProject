import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
    const firebaseConfig = {
      apiKey: "AIzaSyDke6xcfUkJYm5v02HZ0RTaHfBZiFPMxTo",
      authDomain: "ad-pro-d7232.firebaseapp.com",
      projectId: "ad-pro-d7232",
      storageBucket: "ad-pro-d7232.appspot.com",
      messagingSenderId: "286426430265",
      appId: "1:286426430265:web:055d25a367ace2a4d686e8",
      measurementId: "G-3CEMV1QB75"
    };
  // Initialize Firebase
  fb.initializeApp(firebaseConfig);
  fb.analytics();
}
}).$mount('#app')