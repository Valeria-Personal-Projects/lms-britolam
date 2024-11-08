import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Header } from "./_components/header";
import { MobileHeader } from "./_components/mobile-header";

const HomePage = async () => {
    const { userId } = auth();
    if (userId) {
        redirect("/")
    }
    return ( 
        <div className="h-full">
            {/* <div className="p-6">
                <Logo />
            </div> */}
            {/* <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50"> */}
                <Header />
            {/* </div> */}
            home page!
        </div>
     );
}
 
export default HomePage;