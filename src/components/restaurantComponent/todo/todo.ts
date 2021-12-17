import {Vue,Component} from 'vue-property-decorator';
import axios from 'axios';

@Component
export class todo extends Vue{
   
    public newTask : string = ''
    
    public tasksList : Array<any> = []

    public isCompleted : boolean = false;


    
    public msg : string = "message"

       addTask() {
        // console.log("clicked add button")
        // const title = document.getElementById("title") as HTMLInputElement;
        // console.log(title.value)
        //  const result = await axios.post(" http://localhost:3000/users",{
        //     title : title.value
        // })
        // console.log("result----->",result)
        //  if (this.newTask) {
            let obj = {
                title: this.newTask,
              }
          this.tasksList.push({...obj});
        //   this.$forceUpdate()
        //   this.newTask = '';
        //}
        console.log(this.tasksList)
        localStorage.setItem('task',JSON.stringify(this.tasksList))
      }
      
       clearAll(){
           console.log("clear all clicked")
           if(this.tasksList.length>0){
             this.tasksList=[]
           }
           console.log("this.tasks.length-->",this.tasksList.length)
      }

      display(){
          console.log("display called")
          this.isCompleted = true
          alert("task completed")
          console.log("task completed")
      }

      deleteTask(){
        console.log("delete task called")
        // this.msg=''
        this.tasksList=[]
      }

      clearCompleted(){
          console.log("clearCompleted called")
          if(this.isCompleted==true){
            this.tasksList=[]
              console.log("clear completed")
          }
      }

      beforeMount(){
          const data : any  = localStorage.getItem('task')
          this.tasksList = JSON.parse(data)
          console.log("tasklist--->",this.tasksList ,"and data------->",data)
      }

      created(){
        const data : any  = localStorage.getItem('task')
        this.tasksList = JSON.parse(data)
        console.log(" created tasklist--->",this.tasksList ,"and data------->",data)
      }
}