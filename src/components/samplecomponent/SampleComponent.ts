import { Vue, Component } from 'vue-property-decorator'
import users from "@/store/modules/users";
import { UserData } from "@/Model/model";
import APP_CONST from '@/constants/AppConst'
import API_CONST from '@/constants/ApiConst'
import { ScreenText } from '@/lang/ScreenText'
import { dbPromise, writeData, readAllData, clearAllData, deleteItemFromData } from '@/utilities/idbUtility'

@Component
export class SampleComponent extends Vue {
    posts: Array<UserData> | [] = [];

    private _privateVar: number = 0;
    private objScreenText: ScreenText = new ScreenText();
    private networkDataReceived: boolean = false;
    private results: any = [];

    public handleComponentButtonClick(event: any) {
        let firstValue: number = 5;
        let secondValue: number = 15;
        this._privateVar = this.privateMethod(firstValue, secondValue);
        //console.log(this._privateVar);
        this.accessConstData();
    }

    private privateMethod(firstValue: number, secondValue: number) {
        let total: number;
        total = firstValue + secondValue;
        return total;
    }

    /**
     * How to you use constants data...
     */
    private accessConstData() {
        console.log("APP_CONST.ADMIN_USER:::::", APP_CONST.ADMIN_USER);
        console.log("API_CONST.API_CONST:::::", API_CONST.GET_USER_ROLE);

    }

    public getScreenText(key: string): string {
        return this.objScreenText.getScreenText(key);
    }

    created() {
        this.showUserPosts(1);
        this.fetchDataFromCache();
    }

    async showUserPosts(id: number) {
        await users.getUserInfo(id);
        if(users.userInfo.length > 0){
            this.results = users.userInfo;
            this.networkDataReceived = true;
            //console.log("from web data >> ", users.posts);
        }
    }

    public fetchDataFromCache(){
        if ("indexedDB" in window) {
            readAllData("todos").then((data: any) => {
                if (!this.networkDataReceived) {
                    //console.log("From cache >> ", data);
                    this.results = data;
                }
            });
        }
    }

}