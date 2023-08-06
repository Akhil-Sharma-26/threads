// The folder name inside () is a way to not make a new route for this page. i.e. There will be no /root route in our app.. but directly the routes of the folder presents inside this folder. 
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}