import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {dark} from '@clerk/themes'
export default function NavBar(){
    return(
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28}/>
                <p className="text-heading3-bold text-light-1 max-xs:hidden">Camp-Aurora</p>
            </Link>
            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        {/* this code is only going to be shown if we are signed in */}
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image src="/assets/logout.svg" alt="logout" width={24} height={24}></Image>
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
                <OrganizationSwitcher 
                    appearance={{
                        baseTheme: dark,
                        elements:{
                            organizationSwitcherTrigger:"py-2 px-4"
                        }
                    }}
                />
            </div>
        </nav>
    )
}