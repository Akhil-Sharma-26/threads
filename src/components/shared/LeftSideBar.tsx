"use client"
import {sidebarLinks} from "@/constants"
import { SignOutButton, SignedIn } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import {usePathname,useRouter} from 'next/navigation'
export default function LeftSideBar(){
    const router=useRouter();
    const pathname=usePathname();
    return(
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link)=>{
                    const linkIsActive=(pathname.includes(link.route) && link.route.length > 1) || pathname===link.route;
                    return(
                        <Link href={link.route}
                        key={link.label}
                        className={`leftsidebar_link ${linkIsActive && 'bg-primary-500'}`}>
                        <Image src={link.imgURL}
                        alt={link.label}
                        width={24}
                        height={24}/>
                        <p className="text-light-1 max-lg:hidden">
                            {link.label}
                        </p>
                        </Link>
                    
                )})}
            </div>
            <div className="mt-10 px-6">
            <SignedIn>
                        {/* this code is only going to be shown if we are signed in */}
                        <SignOutButton signOutCallback={()=>router.push('/sign-in')}>
                            <div className="flex cursor-pointer gap-4 p-4">
                                <Image src="/assets/logout.svg" alt="logout" width={24} height={24}></Image>
                            <p className="text-light-2 max-lg:hidden">Logout</p>
                            </div>
                        </SignOutButton>
                    </SignedIn>
            </div>
            <div>
                <p className="text-light-2 text-center text-xs">© 2021 Camp Aurora. All rights reserved.</p>
            </div>
        </section>
    )
}