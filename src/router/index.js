import { createRouter, createWebHistory } from 'vue-router'

import StartPage from '/src/components/Pages/Startpage.vue'
import NewsList from '/src/components/Pages/NewsList.vue'
import NewsItem from '/src/components/Pages/NewsItem.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: StartPage,
  },
  {
    path: '/news',
    name: 'News',
    component: NewsList,
  },
  {
    path: '/news/:id',
    name: 'News Details',
    component: NewsItem,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
