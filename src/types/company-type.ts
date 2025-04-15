export type CompanyType = {
    id: number;
    cnpj: string;
    name: string;
    contact?: string;
    contactName?: string;
    address: {
        street: string;
        number: string;
        district: string;
        city: string;
        state: string;
        cep: string;
        complement?: string;
    },
    period: {
        id: number;
    },
    status: "ATIVO" | "INATIVO"
}