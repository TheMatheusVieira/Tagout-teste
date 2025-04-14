'use server'
import { SignInRequest } from "@/http/sign-in"
import { sessionService } from "@/services/auth/session-service"

const JWT_COOKIE_NAME = "userauth"
export async function SignIn( state: { success?: boolean } | null, formData: FormData )
{
    const { username, password } = Object.fromEntries( formData )
    const signinResponse = await SignInRequest( username.toString(), password.toString() )
    if ( !signinResponse.ok || !signinResponse.headers?.getSetCookie() )
        return { success: false }
    const cookieHeader = signinResponse.headers.getSetCookie()
    const authCookie = cookieHeader.find( ( cookie: string ) => cookie.startsWith( JWT_COOKIE_NAME ) )
    if ( !authCookie )
        return { success: false }
    const userData = {
        userId: signinResponse.data.id,
        name: signinResponse.data.name,
        email: signinResponse.data.email,
        roleName: signinResponse.data.roleName,
        role: signinResponse.data.roles[0],
        token: authCookie,
        company: signinResponse.data.company,
        isLoggedIn: true

    }
    // await tokenService.save( authCookie )
    await sessionService.save( userData )
    return { success: true }
}