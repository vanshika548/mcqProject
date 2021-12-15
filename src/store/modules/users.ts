import { userPosts } from "@/services/userService/users-api";
import store from "@/store";
import {
  getModule,
  Module,
  VuexModule,
  MutationAction
} from "vuex-module-decorators";
import { UserData } from "@/Model/model";

@Module({
  namespaced: true,
  name: "users",
  store,
  dynamic: true
})
class UsersModule extends VuexModule {
  userInfo: Array<UserData> = new Array<UserData>();

  get getPosts() {
    return this.userInfo;
  }

  @MutationAction
  async getUserInfo(userId: number) {
    const userInfo = await userPosts(userId);
    return { userInfo };
  }
}

export default getModule(UsersModule);
