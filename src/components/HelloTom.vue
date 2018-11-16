<template>
  <div>
    <H1>todos</H1>
    <input @keyup.enter="addTodos" v-model="enterTodo" placeholder="enter todos">
    <!-- <div v-for="(todo,index) in todoList" :key="index"> {{todo}} </div> -->
    <ul id="example-1">
      <todolistItem v-for="(todo,index) in todoList" :key="index" :item="todo"></todolistItem>
    </ul>
    <footer class="footer" v-show="todoList.length" v-cloak>
      <span class="todo-count">
        <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
      </span>
      <ul class="filters">
        <li><a href="#/all" :class="{ selected: visibility == 'all' }">All</a></li>
        <li><a href="#/active" :class="{ selected: visibility == 'active' }">Active</a></li>
        <li><a href="#/completed" :class="{ selected: visibility == 'completed' }">Completed</a></li>
      </ul>
      <button class="clear-completed" @click="removeCompleted">
         <!-- v-show="todoList.length > remaining" -->
        Clear completed
      </button>
    </footer>
  </div>
</template>

<script>
import todolistItem from '@/components/todolistItem'
export default {
   name: 'HelloTom',
   data () {
      return {
         todoList: [],
         enterTodo: ''
      }
   },
   props: {},
   components: {
      todolistItem
   },
   methods: {
      addTodos: function () {
         if (this.enterTodo === '') { return }
         this.todoList.push(this.enterTodo)
         this.enterTodo = ''
         console.log(this.todoList)
      },
      removeCompleted: function () {
         console.log('deleted')
         this.todoList = []
      }
   },
   computed: {
      // result: function () {
      //    return this.param1 * this.param2
      // }
   }
}
</script>
<style scoped>
li {
  list-style: none;
}

.selected {
  border: 5px solid red;
}
</style>
