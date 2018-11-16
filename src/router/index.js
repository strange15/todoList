import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloTom from '@/components/HelloTom'
import todolistItem from '@/components/todolistItem'

Vue.use(Router)

export default new Router({
   routes: [
      {
         path: '/',
         name: 'HelloWorld',
         component: HelloWorld
      },
      {
         path: '/tom',
         name: 'HelloTom',
         component: HelloTom
      },
      {
         path: '/todolistItem',
         name: 'todolistItem',
         component: todolistItem
      }
   ]
})
