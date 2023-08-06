import {ClerkProvider} from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "../globals.css"
// for SEO(Search Engine Optamization): 
export const metadata={
    title:"camp-aurora",
    description:"Hello World!",

}
const inter= Inter({subsets: ["latin"]}); // To import fonts into nextJS

export default function RootLayout({children}:{children:React.ReactNode}) { // type of the prop has been specified here, ie The prop is a object of type ReactNode
    return(
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1 `}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}