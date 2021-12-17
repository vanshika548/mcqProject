<template id="task-list">
   <section class="tasks">
       <h1 class="heading"> Tasks</h1>
       <div>
           <input type="text" placeholder="New Task" class="input" v-model="newTask" id="title" >
           <span>
               <button @click="addTask()" class="add">Add</button>
           </span>
       </div>

       <div>
           <button @click="clearCompleted()" class="clearCompleted">Clear completed</button>
           <button @click="clearAll()" class="clearAll">Clear All</button>
       </div>

       <div >  
           <!-- {{tasksList}} -->
           <!-- v-for="(id) in tasks" :key="id" -->
           <ul class="list" >
               <li v-for="(task,index) in tasksList" :key="index">
                   <button @click="display()" class="display" >
                     {{task.title}}
                   </button>
                   <button @click="deleteTask()" class="delete" >
                       Delete
                   </button>
                   <!-- {{task.title}} -->
               </li>
           </ul>
       </div>
   </section>
</template>


<script>
import {todo} from './todo'
export default todo;
</script>

<style lang="less" src="./todo.less"></style>



