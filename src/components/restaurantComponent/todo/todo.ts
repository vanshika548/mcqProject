import {Vue,Component} from 'vue-property-decorator';
import axios from 'axios';

@Component
export class todo extends Vue{
   
    public newTask : string = ''
    public tasksList : Array<any> = []
    public isCompleted : boolean = false;
    public isLoading:any= true;
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
                completed : this.isCompleted
              }
          this.tasksList.unshift({...obj});
        //   this.$forceUpdate()
        //   this.newTask = '';
        //}
        console.log(this.tasksList)
        localStorage.setItem('task',JSON.stringify(this.tasksList))
        this.newTask=''
      }
      
       clearAll(){
           console.log("clear all clicked")
           if(this.tasksList.length>0){
             this.tasksList=[]
           }
           console.log("this.tasks.length-->",this.tasksList.length)
           localStorage.setItem('task','')
      }

      display(){
          console.log("display called")
          this.isLoading = !this.isLoading;
      }

      deleteTask(index : number){
        console.log("delete task called")
        // this.msg=''
        this.tasksList.splice(index,1)
      }

      clearCompleted(index : number){
          console.log("clearCompleted called")
         
        this.tasksList = this.itemsToDo();
         }

         itemsToDo(){
             return this.tasksList.filter(task=>!task.completed)
         }
        
      edit(){
        console.log("completed task");
        this.tasksList = this.itemsToadd() 
      }
      
      itemsToadd(){
         return this.tasksList.filter(task => task.completed)
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

      back(){
        this.$router.push('/signup')
      }

      allTask(){
        console.log("all task");
        // return this.tasksList
        const data: any = localStorage.getItem('task')
        this.tasksList = JSON.parse(data)
        console.log("tasklist--->", this.tasksList, "and data------->", data)
        return data
    }
}