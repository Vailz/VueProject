import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'
import BuyModalComponent from '@/components/Shared/BuyModal'

Vue.use(Router)
Vue.component('app-vue-modal',BuyModalComponent)
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
      databaseURL: "https://ad-pro-d7232-default-rtdb.firebaseio.com",
      projectId: "ad-pro-d7232",
      storageBucket: "ad-pro-d7232.appspot.com",
      messagingSenderId: "286426430265",
      appId: "1:286426430265:web:055d25a367ace2a4d686e8",
      measurementId: "G-3CEMV1QB75"
    };
  // Initialize Firebase
  fb.initializeApp(firebaseConfig);
  fb.analytics()
  fb.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(`Смотрим что мы получили: ${user.uid}`)
      this.$store.dispatch('autoLoginUser', user.uid)
    }

  })
  this.$store.dispatch('fetchAds')
}
}).$mount('#app')