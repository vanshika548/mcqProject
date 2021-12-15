import { Vue, Component, Watch } from 'vue-property-decorator'
import {mcqData} from './mcqData';

import {QuestionSet} from '../../Model/model'

import QuestionResponse from './questionResponse/questionResponse.vue'
import QuestionFooter from './qustionFooter/questionFooter.vue';

interface selectedResponse {
    questionIndex:number, 
    responseIndex : number
}

@Component({
    components: {
        'qustion-response': QuestionResponse,
        'qustion-footer': QuestionFooter,
        
    }
})
export class MCQComponent extends Vue {

    @Watch('message')
    messageFunc(val:string){
        console.log("message >> ", val)
    }

    
    public message : string = "MCQ Component"
    
    public data : Array<QuestionSet> = mcqData;
    public selectAnswers : string[] = ['','','','','','','','','','']
   // public reviewAnswers : string[] = ['','','','','','','','','','']
   
    
    // changeMessage() : void{
    //     this.message = "Dynamic Message"
    // }

    selectQuestion(event : selectedResponse){
        let response : string = this.data[event.questionIndex].responseSet[event.responseIndex];
        this.selectAnswers[event.questionIndex] = response
        //this.reviewAnswers[event.questionIndex] = response
        console.log(this.selectAnswers)
    }

    nextQuestion(index : number) : void{
        if(index < (this.data.length-1)){
            this.data[index].isShow = false
            this.data[index+1].isShow = true
        }
    }

    previousQuestion(index : number) : void{
        if(index >= 0){
            this.data[index].isShow = false
            this.data[index-1].isShow = true
        }
    }

    anyPreviousIndex(event : number){
        this.previousQuestion(event)
    }

    anyNextIndex(event : number){
        this.nextQuestion(event)
    }


    // shortHandDirective(){
    //     this.message = "Dynamic Message By Shorthand Way."
    // }

    beforeMount(){
        //console.log("beforeMount")
    }

    mounted(){
        //console.log("mouonted")
    }

    created(){
        //console.log("created")
    }

    updated(){
        //console.log("updatee")
    }

    beforeUpdate(){
        // console.log("beforeUpdate")
    }

    beforeDestroy(){
        //console.log("beforeDestroy")
    }

    destroyed(){
        //console.log("destroyed")
    }
}