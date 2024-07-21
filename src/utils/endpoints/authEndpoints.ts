import { apiCall } from "../jwt-interceptor.index";

const signInUser = async (data:any): Promise<any> => {
    const response = await apiCall({
        name: "loginUser",
        data: data,
        action: (): any => (["skip"])
    })
    return response;
}


const logoutUser = async (): Promise<any> => {

    const response = await apiCall({
        name: "logoutUser",
        action: (): any => (["skip"])
    })
    return response;
}


export {signInUser, logoutUser};
