// "use server"
// import { CompaniesType, GetCompanies } from "@/http/company/get-companies";
// import { sessionService } from "@/services/auth/session-service";
// export async function GetCompaniesAction( currentPage = 0, size = 10 ): Promise<CompaniesType>
// {
//     return await GetCompanies( ( await sessionService.get() ).token!, currentPage, size );
// }