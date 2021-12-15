import {Vue, Component} from 'vue-property-decorator'
import {mcqData} from '../mcqData'
import {ReviewResponseSet} from '../../../Model/model'


@Component

export class reviewResponse extends Vue{
    public data : ReviewResponseSet[] = mcqData
    public selectAnswers : string[] = ['','','','','','','','','','']
    public reviewAns : any = []

    mounted(){
        // console.log(this.data)
        let data : any = localStorage.getItem('data')
        this.reviewAns = JSON.parse(data)
        console.log(data)
    }
}