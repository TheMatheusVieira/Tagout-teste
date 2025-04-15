"use client"
import { type PropsWithChildren, useActionState, useEffect } from "react";


import { redirect } from "next/dist/client/components/redirect";
import { toast } from "sonner";
import { SignIn } from "@/actions/auth/sign-in";


const TOAST_DURATION = 1000 * 3
export default function SigninForm( props: PropsWithChildren )
{


    const [state, formAction] = useActionState<{ success?: boolean } | null, FormData>( SignIn, null );
    useEffect( () =>
    {
        console.log( "state = ", state )
        if ( state )
        {
            // toast( {
            //     duration: TOAST_DURATION,
            //     description: state.success ? "Login feito com sucesso!" : "Usuário e/ ou senha inválidos!",
            //     // className: `${ state.success ? "bg-green-400" : "bg-red-400 " } text-white font-extrabold  fixed top-10 z-100 flex max-h-screen w-full`,
            // } )
            if ( state.success )
            {
                toast.success( "Login feito com sucesso!", {
                    style: {
                        background: "var(--color-green-400)",
                        color: "var(--color-white)"
                    }

                } )
                redirect( "/dashboard" )
            }
            else
            {
                toast.error( "Usuário e/ ou senha inválidos!", {
                    style: {
                        background: "var(--color-red-400)",
                        color: "var(--color-white)"
                    }

                } )
            }
        }
        return ( () => { } )
    }, [state] )
    return (


        <form action={formAction} className="w-1/2 flex justify-center items-center flex-col gap-5">
            {props.children}
        </form >


    )
}