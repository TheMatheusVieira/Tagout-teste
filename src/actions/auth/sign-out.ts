// "use server"

// import { SignOutRequest } from "@/http/sign-out"
// import { sessionService } from "@/services/auth/session-service"
// import { redirect } from "next/navigation"

// export async function SignOut()
// {
//     const response = await SignOutRequest()
//     if ( response.ok )
//     {
//         const session = await sessionService.get()
//         session.destroy()
//         redirect( "/sign-in" )
//     }
//     return
// }