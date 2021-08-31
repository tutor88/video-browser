import { createApp } from 'vue';
import App from './App';

createApp(App).mount('#app');

// new Vue({
//   ///element is the id in index html where html template is rendered to
//   // also possible to do this with method on this vue instance '.$mount(''#app')'
//   //   el: "#app",
//   render: (h) => h(App),
// }).$mount("#app");
