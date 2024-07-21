import { AxiosRequestHeaders } from "axios";
import { endPointlistTypes } from "./types";


//API END-PONT DOCUMENTATION

let headers = {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
    crossDomain: true,
     //origin:'*'
} as unknown as AxiosRequestHeaders;

let FileHeaders = {
    'Content-Type': 'multipart/form-data',
    'ngrok-skip-browser-warning': 'true',
    // crossDomain: true,
} as unknown as AxiosRequestHeaders;


export const endPoints: endPointlistTypes | any = {

    //AUTH
    loginUser: {
        url: '/auth/v1/auth/signin',
        method: 'POST',
        headers: headers,
    },
    logoutUser: {
        url: '/auth/v1/auth/logout-user',
        method: 'POST',
        headers: headers,
    },

    // Contacts APIs
    createNewContact: {
        url: '/contact/v1/create-new-contact',
        method: 'POST',
        headers: headers,
        auth: true
    },

    fetchAllContacts: {
        url: '/contact/v1/fetch-all-contacts',
        method: 'GET',
        headers: headers,
        auth: true
    },

    fetchSingleContact: {
        url: '/contact/v1/fetch-single-contact',
        method: 'GET',
        headers: headers,
        auth: true
    },

    updateSingleContact:{
        url: '/contact/v1/update-single-contact',
        method: 'PATCH',
        headers: headers,
        auth: true
    },

    deleteSingleContact: {
        url: '/contact/v1/delete-single-contact',
        method: 'DELETE',
        headers: headers,
        auth: true
    }

}