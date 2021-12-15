import { httpClient } from "../common/httpClient";
import { UserData } from "@/Model/model";
import API_CONST from '@/constants/ApiConst'

// get all the posts for particular user
export async function userPosts(userId: number): Promise<Array<UserData>> {
  console.log("api calling >> ", process.env.VUE_API_BASE_URL)
    const response = await httpClient().get(API_CONST.GET_USER_POST, {
      params: { userId }
    });
    return response.data as Array<UserData>;
  }
