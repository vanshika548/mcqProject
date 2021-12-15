import { Vue, Component, Prop } from 'vue-property-decorator'
import {QuestionSet} from '../../../Model/model'


@Component
export class QuestionResponse extends Vue {

@Prop()
questionRespnse !:QuestionSet

@Prop()
index !:number

@Prop()
selectAnswers !:string[]


selectQuestion(questionIndex:number, responseIndex:number){
    this.$emit('currentSelection',{questionIndex,responseIndex})
}

}