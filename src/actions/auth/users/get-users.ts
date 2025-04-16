"use server"
import { GetUsers, UsersType, } from "@/http/user/get-users";
import { sessionService } from "@/services/auth/session-service";
export async function GetUsersAction( currentPage = 0 ): Promise<UsersType>
{

    const users = await GetUsers( ( await sessionService.get() ).token!, currentPage );

    return users
}