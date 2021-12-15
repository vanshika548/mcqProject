import {Vue} from 'vue-property-decorator'

export default class API_CONST{
    public static readonly API_ROOT = 'http://api.root.endpoint'
    public static readonly GET_USER_ROLE = `${API_CONST.API_ROOT}/role`
    public static readonly GET_USER_INFO = `${API_CONST.API_ROOT}/userinfo`
    public static readonly GET_USER_POST = "/posts";

}