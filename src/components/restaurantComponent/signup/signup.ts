import {Vue,Component} from 'vue-property-decorator'
import axios from 'axios';
import { Route } from 'vue-router';

type user = {
    email : string;
    password : any
}


@Component
export class signup extends Vue{

public error : string[] = [];

public userDetails : user = {
    email : '',
    password : ""
}
     signup() {
         if(this.userDetails.email==''){
             this.error.push("Email is required")
         }
         if(this.userDetails.password==''){
            this.error.push("Password is required")
        }
        if(this.userDetails.email != '' && this.userDetails.password != ''){
            let email = this.$refs.email as any
            console.log("email--->",email.value)
            let password = document.getElementById('password') as any
            console.log("password---->",password.value)
            alert("validation successful")
            this.$router.push('/todo')
        }
         
    }

}