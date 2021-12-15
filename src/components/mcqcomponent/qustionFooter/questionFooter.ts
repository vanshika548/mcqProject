import { Vue, Component, Prop } from 'vue-property-decorator'
import {QuestionSet} from '../../../Model/model'
import { Route } from 'vue-router';


@Component
export class QuestionFooter extends Vue {

@Prop()
data !:Array<QuestionSet>

@Prop()
index !:number

@Prop()
selectAnswers !: Array<String>

public reviewSet : Array<any> = []

previousIndex(index : number) : void{
    this.$emit('anyPreviousIndex', index )
}

nextIndex(index : number) : void{
    this.$emit('anyNextIndex', index )
}

changeRoute(){
    this.reviewSet = JSON.parse(JSON.stringify(this.data))
    this.selectAnswers.forEach((item : any,index:number)=>{
        this.reviewSet[index].response = item
    })
    console.log(this.reviewSet)
    localStorage.setItem('data',JSON.stringify(this.reviewSet))
    this.data = JSON.parse(JSON.stringify(this.reviewSet))
     this.$router.push(`/result`)
}


}