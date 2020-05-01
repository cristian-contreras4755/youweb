import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
//temas  de vuetify
theme: {
    themes: {
      light: {
       // primary: '#3f51b5',
       //  primary: '#62BCE0'
        primary: '#0092C8',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
