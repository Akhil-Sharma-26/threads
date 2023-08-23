"use client"

interface Props{
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };
}

// import { Props } from "next/script"
const AccountProfile = ({user,btnTitle} : Props ) =>{
    return (
        <div>
            Account Profile
        </div>
    )
}
export default AccountProfile;