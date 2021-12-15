import axios from "axios";

const httpClient = () => {
  let httpClientInstance =  axios.create({
    baseURL: process.env.VUE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Accept": "application/json",
    }
  });

  function createAxiosResponseInterceptor(axiosInstance : any) {
    const interceptor = axiosInstance.interceptors.response.use(
        (response : any) => response,
        (error : any) => {
            if (error.response.status !== 401) {
                // return Promise.reject(error.response);
            }
            else if(error.response.status === 401){
              // window.location.href = process.env.VUE_APP_BASE_IDENTITY_REDIRECT_URL + "?type=logout"
            }
            else if(error.response.status === 401 && error.response.data !== ""){
            } 
         
            axiosInstance.interceptors.response.eject(interceptor);
        }
    );
  }
  
  
  createAxiosResponseInterceptor(httpClientInstance);
  return httpClientInstance;
}

export { httpClient };


