import axios from "axios";
import { urlPropTypes } from "./types";
import { endPoints } from './apiLib'
import { baseURL } from "./api.env";


const baseUrl = (): any => `${baseURL}`;

// For testing purposes only
export const _set_root_url = (newUrl: any): any => newUrl



export const apiCall = ({ urlExtra, name, data = {}, params = {}, action = () => undefined, errorAction = () => undefined, successDetails = { title: "", text: "" } }: urlPropTypes) => new Promise((res, rej) => {

    let theName = name as keyof typeof endPoints
    let userDetails: any = localStorage?.getItem('userDetails') || '{}'
    let token  = userDetails || { token: "" }
    //console.log("userDetails>>", token);

    let headers: any = endPoints[theName] ? endPoints[theName].headers ? endPoints[theName].headers : {} : {}

    if (endPoints[theName].auth) headers['Authorization'] = `Bearer ${token}`

    axios({
        url: `${baseUrl()}${endPoints[theName] ? endPoints[theName].url : ""}${urlExtra ? urlExtra : ""}`,
        method: endPoints[theName] ? endPoints[theName].method : "",
        headers: endPoints[theName] ? endPoints[theName].headers : undefined,
        data,
        params
    })
        .then(async r => {
            const returned = await action(r.data);
            if ((r.data.statusText === "Created" || r.status===200 || r.status===201) && !returned?.includes("skip")) {
                r?.data?.details ? res(r.data.details) : res(r.data)
            } else if ((r.data.statusText === "Created" || r.status===200 || r.status===201) && returned?.includes("skip")) {
                r?.data?.details ? res(r.data.details) : res(r.data);
            }else if (r.data.details !== "00" && r.status !== 200) {
                return r
               // errorHandler(r)
            } else if (returned?.includes("push")) {
                return r?.data
               // successAlert(successDetails, r.data)
            } else {
                console.log("nayyyy")
            }
        })
        .catch(async err => {
            const returned = await errorAction(err)
            if (!returned?.includes("skip")) {

               // errorHandler(err)
                rej(err)
            } else {

                rej(err);
                return err
            }

            // if(err?.message === 'Request failed with status code 401'){
            //     alert('User session is invalid!')
            //     setTimeout(() => {
            //         location?.reload();
            //         window.history.replaceState({}, '', '/')
            //         localStorage.clear();
            //     },2000)
                
            // }
        });
});
