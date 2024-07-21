import { MouseEventHandler } from "react"
import { AxiosRequestHeaders } from "axios";


export type DefaultButtonType = {
    handleClick?: MouseEventHandler<HTMLButtonElement> | undefined,
}

export type endpointTypes = {
    url: string;
    method: string;
    headers?: AxiosRequestHeaders | undefined;
    auth?: boolean;
    urlExtra?: string
}

export type endPointlistTypes = {
    loginUser: endpointTypes;
}


export type urlPropTypes = {
    urlExtra?: string
    name?: string
    data?: any
    params?: any
    action?: (data: any) => string[] | undefined
    errorAction?: (err: any) => string[] | undefined
    successDetails?: { title: any; text: any; }
}

export type lecPropTypes = {
    textVariant?: string,
    containerVariant?: string,
    error?: string
    handleClick?: MouseEventHandler<HTMLDivElement> | undefined,
    handleClear?: MouseEventHandler<HTMLDivElement> | undefined,

}

