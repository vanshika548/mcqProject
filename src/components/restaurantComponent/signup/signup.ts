import {Vue} from 'vue-property-decorator'
import axios from 'axios';
import { Route } from 'vue-router';

export class signup extends Vue{


     signup() {
        //console.log("clicked")
        // const name = document.getElementById("name") as HTMLInputElement
        // //console.log(name.value)
        // const email = document.getElementById("email") as HTMLInputElement
        // //console.log(email.value)
        // const password = document.getElementById("password") as HTMLInputElement
        // //console.log(password.value)
        // let result = await axios.post("http://localhost:3000/users",{
        //     name : name.value,
        //     email:email.value,
        //     password:password.value
        // })
        // console.log(result)
        // //console.log(result)
        // if(result.status==201){
        //     // alert("signup donre")
        //     localStorage.setItem('data',JSON.stringify(result))
        //  }
         this.$router.push('/todo')
    }

}