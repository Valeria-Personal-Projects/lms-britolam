import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Header } from "./_components/header";
import { MobileHeader } from "./_components/mobile-header";
import Hero from "./_components/hero";

const HomePage = async () => {
    const { userId } = auth();
    if (userId) {
        redirect("/")
    }
    return ( 
        <div className="h-full ">
        {/* <div>*/}
                <Hero />
                {/* <Header /> */}
        </div>
     );
}
 
export default HomePage;