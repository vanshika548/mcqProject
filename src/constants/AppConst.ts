import {Vue} from 'vue-property-decorator'

export default class APP_CONST extends Vue {
    public static readonly LANGUAGE_ENGLISH = 'en'
    public static readonly LANGUAGE_SPANISH = 'es'

    public static readonly SUPER_ADMIN_USER = 'superadmin'
    public static readonly ADMIN_USER = 'admin'
    public static readonly REGULAR_USER = 'user'
    

    //message
    public static readonly LOGIN_SUCCESS = 'login success'
    public static readonly LOGIN_FAIL = 'login fail'
    public static readonly USER_DATA = [
        {
            userId : 1,
            id : 23,
            title : "Test Data",
            body : "this is something new"
        },
        {
            userId : 1,
            id : 23,
            title : "Test Data",
            body : "this is something new"
        }
    ]

    
}