import Vue from 'vue'
import App from './App'
import router from './router'
import VueCarousel from 'vue-carousel'
import VueProgressBar from 'vue-progressbar'
import moment from 'moment'
import { markdown } from 'markdown'
import { VueMasonryPlugin } from 'vue-masonry'
import VTooltip from 'v-tooltip'

Vue.config.productionTip = false

Vue.use(VueMasonryPlugin)
Vue.use(VueCarousel)
Vue.use(VTooltip)
Vue.use(VueProgressBar, {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
})

Vue.mixin({
  methods: {
    markdownToHtml: value => value ? Vue.compile('<div>'+markdown.toHTML(value)+'</div>') : '',
    makeDatePretty: value => moment.unix(value/1000).format("LL"),
    shortenDescription: (txt) => txt ? txt.substr(0, 80) + '...' : '',
    getFirstImage: (images) => images ? 'https://joduplessis.com/'+images[0] : '',
    getFirstElement: (arr) => arr[0] ? arr[0] : {},
    getRandomWidth: () => Math.floor(Math.random()*2),
    getImageUrl: (image) => 'http://joduplessis.com/'+image
  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
