
import { redirect } from "next/navigation";
const JWT_COOKIE_NAME = "userauth"
const baseUrl = process.env.BASE_URL

export type HttpClient = {
    requestWithAuth: ( method: "GET" | "POST" | "DELETE" | "PUT", token: string, path: string, payload?: object, params?: string, tags?: string[], ) => Promise<HttpClientResponse>;
    requestWithoutAuth: ( method: "GET" | "POST" | "DELETE" | "PUT", path: string, payload?: object, params?: string ) => Promise<HttpClientResponse>;
}
export type HttpClientResponse = {
    ok: boolean,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    data: any,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    headers: any,
}
export const HttpClient: HttpClient =
{
    async requestWithAuth( method: "GET" | "POST" | "DELETE" | "PUT", token: string, path: string, payload?: object, params?: string, tags?: string[] ): Promise<HttpClientResponse>
    {


        // console.log( "Base URL = ", process.env.BASE_URL )
        // console.log( "process.env.SECRET_KEY = ", process.env.SECRET_KEY )
        const url = path.includes( 'auth' ) ? `${ baseUrl }/${ path }` : params ? `${ baseUrl }/api/${ path }?${ params }` : ` ${ baseUrl }/api/${ path }`


        if ( !token )
            redirect( '/sign-in' )
        let requestInit: RequestInit = {

            method,
            body: JSON.stringify( payload ),
            headers: {
                "Content-Type": "application/json",
                "Cookie": `${ JWT_COOKIE_NAME }=${ token }`
            },
        }
        if ( tags )
        {
            requestInit = {
                cache: "reload",
                next: {
                    tags: tags
                },
                ...requestInit
            }
        }

        try
        {
            const res = await fetch( url, requestInit )
            let data = undefined;
            data = await res.json()
            return {
                headers: res.headers,
                ok: res.ok,
                data
            }
        }
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        catch ( error: any )
        {
            console.error( "Error in HTTP request = ", error )
            return {
                headers: null,
                ok: false,
                data: null
            }

        }
    },
    async requestWithoutAuth( method: "GET" | "POST" | "DELETE" | "PUT", path: string, payload?: object, params?: string ): Promise<HttpClientResponse>
    {
        // console.log( "Base URL = ", process.env.BASE_URL )
        // console.log( "process.env.SECRET_KEY = ", process.env.SECRET_KEY )
        const url = params ? `${ baseUrl }/${ path }?${ params }` : ` ${ baseUrl }/${ path }`
        // biome-ignore lint/style/useConst: <explanation>
        let requestInit: RequestInit = {
            method,
            body: JSON.stringify( payload ),
            headers: {
                "Content-Type": "application/json",
            },
        }
        const res = await fetch( url, requestInit )
        try
        {
            console.log( res )

            return {
                headers: res.headers,
                ok: res.ok,
                data: await res.json()
            }
        }
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        catch ( error: any )
        {
            console.error( "Error in HTTP request = ", error )
            return {
                headers: null,
                ok: false,
                data: null
            }
        }
    }

}