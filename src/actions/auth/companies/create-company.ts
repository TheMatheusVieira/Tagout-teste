// "use server"
// import { CreateCompanyType } from "@/app/(private)/settings/components/Company/AddCompanyDialog";
// import { CreateCompany } from "@/http/company/create-company";
// import { sessionService } from "@/services/auth/session-service";
// import { revalidateTag } from "next/cache";
// export async function CreateCompanyAction( payload: CreateCompanyType ): Promise<{ success: boolean }>
// {

//     const res = await CreateCompany( ( await sessionService.get() ).token!, payload );
//     if ( !res.ok )
//         return { success: false }
//     revalidateTag( 'get-companies' )
//     return { success: true }
// }