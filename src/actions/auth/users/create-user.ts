"use server"
import { CreateUserType } from "@/app/(private)/settings/components/Users/AddUserDialog";
import { CreateUser } from "@/http/user/create-user";
export async function CreateUserAction( payload: CreateUserType ): Promise<{ message: string, success: boolean }>
{

    const res = await CreateUser( payload );
    console.log( res )
    if ( !res.ok )
        return { success: false, message: res.data?.message ?? "Erro ao cadastrar usuário" }
    return { success: true, message: res.data?.message }
}