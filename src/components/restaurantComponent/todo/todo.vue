<template id="task-list">
   <section class="tasks">
       <button @click="back()" class="back_btn">Back</button>
       <h1 class="heading"> Tasks</h1>
       <div>
           <input type="text" placeholder="New Task" class="input" v-model="newTask" id="title" >
           <span>
               <button @click="addTask()" class="add">Add</button>
           </span>
       </div>

       <div>
           <button class="allTask" @click="allTask()">All Task</button>
           <button class="completedtask" @click="edit()">Completed Task</button>
           <button @click="clearCompleted(index)" class="clearCompleted">Clear completed</button>
           <button @click="clearAll()" class="clearAll">Clear All</button>
       </div>

       <div >  
           <!-- {{tasksList}} -->
           <!-- v-for="(id) in tasks" :key="id" -->
           <ul class="list" >
               <li v-for="(task,index) in tasksList" :key="index">
                   <button class="display"
                    @click="task.completed = !task.completed"
                    v-bind:class="[task.completed ? 'complete' : 'notcomplete']"
                    v-on:click="display()">
                     {{task.title}}
                   </button>
                   <button @click="deleteTask(index)" class="delete" >
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



