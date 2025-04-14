import { HttpClient, type HttpClientResponse } from "../infra/http/http-client";

export async function SignInRequest( username: string,
    password: string ): Promise<HttpClientResponse>
{
    return await HttpClient.requestWithoutAuth( "POST",
        // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
        `auth/signin`,
        {
            username,
            password
        }
    )

}