import type { CompanyType } from '@/types/company-type';
import { getIronSession, type SessionOptions } from 'iron-session';
import { cookies } from 'next/headers';
export type UserSessionData =
    {
        userId?: number;
        name?: string;
        email?: string;
        role?: string;
        roleName?: string;
        token?: string;
        company?: CompanyType;
        isLoggedIn: boolean

    }
export const defaultSession: UserSessionData = {
    isLoggedIn: false
}

export const sessionOptions: SessionOptions = {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    password: process.env.SECRET_KEY!,
    cookieName: "session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
}
export const sessionService = {

    async get()
    {
        const nextCookies = await cookies()
        const session = await getIronSession<UserSessionData>( nextCookies, sessionOptions );
        return session;
    },
    async save( { userId, name, email, role, token, roleName, company }: UserSessionData )
    {
        const session = await this.get()
        let cookieValue = session.token;
        if ( token )
        {
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            const authCookieSplit = token!.split( ';' )
            cookieValue = ( authCookieSplit[0].split( '=' )[1] ).trim()
        }

        session.userId = userId
        session.name = name;
        session.role = role;
        session.roleName = roleName;
        session.email = email;
        session.token = cookieValue;
        session.company = company;
        session.isLoggedIn = true;

        await session.save();

    },

}