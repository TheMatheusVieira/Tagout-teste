// "use server"
// import { GetCompanyById } from "@/http/company/get-company-by-id";
// import { sessionService } from "@/services/auth/session-service";
// import { CompanyType } from "@/types/company-type";

// export async function GetCompanyByIdAction( companyId: number ): Promise<CompanyType>
// {
//     const company = await GetCompanyById( ( await sessionService.get() ).token!, companyId );
//     return company
// }