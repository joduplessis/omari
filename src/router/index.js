import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Project from '@/components/Project'
import About from '@/components/About'
import Expertise from '@/components/Expertise'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/work/:slug', name: 'Project', component: Project },
    { path: '/about', name: 'About', component: About },
    { path: '/expertise', name: 'Expertise', component: Expertise },
    { path: '/contact', name: 'Contact', component: Contact },
  ]
})
