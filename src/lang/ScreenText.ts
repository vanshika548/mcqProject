import {Vue} from 'vue-property-decorator'
import * as screentext from '@/lang/en/screentext.json'

export class ScreenText extends Vue{

    public getScreenText(key:string):string{
        let strScreenText:string = (<any> screentext.en)[key];
        return strScreenText;
    }


}