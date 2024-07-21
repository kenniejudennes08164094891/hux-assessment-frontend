import { apiCall } from "../jwt-interceptor.index";

const createUser = async (data: any): Promise<any> => {

    const response = await apiCall({
        name: "createNewContact",
        data: data,
        action: (): any => (["skip"])
    })
    return response;
}


const getAllContacts = async (limit:any, pageNo:any): Promise<any> => {

    const response = await apiCall({
        name: "fetchAllContacts",
        params: {
            limit,
            pageNo,
        },
        action: (): any => (["skip"])
    })
    return response;
}

const getSingleContact = async (phoneNumber: any): Promise<any> => {

    const response = await apiCall({
        name: "fetchSingleContact",
        urlExtra: `/${phoneNumber}`,
        action: (): any => (["skip"])
    })
    return response;
}


const updateSinglelContacts = async (data: any, oldPhoneNumber: any): Promise<any> => {

    const response = await apiCall({
        name: "updateSingleContact",
        data: data,
        urlExtra: `/${oldPhoneNumber}`,
        action: (): any => (["skip"])
    })
    return response;
}

const deleteContact = async (id: any): Promise<any> => {

    const response = await apiCall({
        name: "deleteSingleContact",
        urlExtra: `/${id}`,
        action: (): any => (["skip"])
    })
    return response;
}


export { createUser, getAllContacts, getSingleContact, updateSinglelContacts, deleteContact};
