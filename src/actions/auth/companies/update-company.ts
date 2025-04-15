// "use server"

// import { UpdateCompanyType } from "@/app/(private)/settings/components/Company/EditCompanyDialog";
// import { UpdateCompany } from "@/http/company/update-company";
// import { sessionService } from "@/services/auth/session-service";
// import { revalidateTag } from "next/cache";

// export async function UpdateCompanyAction( payload: UpdateCompanyType ): Promise<{ success: boolean }>
// {

//     const res = await UpdateCompany( ( await sessionService.get() ).token!, payload );
//     if ( !res.ok )
//         return { success: false }
//     revalidateTag( 'get-companies' )
//     return { success: true }
// }