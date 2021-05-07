import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import Embed from 'v-video-embed'

Vue.use(Vuetify,)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg' || 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'},
  theme: {
    themes: {
      light: {
        primary: '#f9c815',
        secondary: '#232323',
        
        },
      },
    }})
    Vue.use(Embed);
