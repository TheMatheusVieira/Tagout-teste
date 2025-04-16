"use server"

import { UpdateUserType } from "@/app/(private)/settings/components/Users/EditUserDialog";
import { UpdateUser } from "@/http/user/update-user";
import { sessionService } from "@/services/auth/session-service";
import { revalidateTag } from "next/cache";
export async function UpdateUserAction( payload: UpdateUserType ): Promise<{ success: boolean }>
{

    const res = await UpdateUser( ( await sessionService.get() ).token!, payload );
    if ( !res.ok )
        return { success: false }
    return { success: true }
}