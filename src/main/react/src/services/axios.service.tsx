import { FirebaseService } from "./firebase.service";
import axios from "axios";

export const AxiosInjectIdToken = () => {
    axios.interceptors.request.use(
        async (config) => {
            const auth =  FirebaseService.getAuth().currentUser;
            
            if(auth) {
              const token = await auth?.getIdToken();
                config.headers = {
                    Authorization: `Bearer ${token}`,
                }
            } 
            return config;
            
        },
        (error) => {
            return Promise.reject(error)
        }
      );
}