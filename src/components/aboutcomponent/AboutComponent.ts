import {Vue, Component} from 'vue-property-decorator'

@Component
export default class AboutComponent extends Vue{
    // message: string = 'This is an about page';
    
    constructor(){
        super()
        console.log("constructor loaded")
    }
}