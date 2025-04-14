// "use server"

// import { ChangePasswordType } from "@/app/(private)/settings/components/FormChangePassword"
// import { ChangePassword } from "@/http/change-password"
// import { sessionService } from "@/services/auth/session-service"
// import { redirect } from "next/navigation"

// export async function ChangePasswordAction( payload: ChangePasswordType ): Promise<{ success: boolean, message: string }>
// {

//     const response = await ChangePassword( ( await sessionService.get() ).token!, payload )
//     if ( !response.ok )
//         return { success: false, message: response.data?.message ?? "Erro ao alterar senha" }

//     const session = await sessionService.get()
//     session.destroy()
//     setTimeout( () =>
//     {
//         redirect( "/sign-in" )
//     }, 200 )
//     return { success: true, message: response.data?.message }
// }