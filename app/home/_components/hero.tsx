import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/rainbow-bg.jpg";
import { Header } from "./header";

const Hero = () => {
    return (
        // <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#2D5CA5,#ffffff_66%)]">
        <>
            <div className="relative">
                <div className="bg bg-[#ffff] absolute h-screen w-screen z-[-1]">
                    <section>
                        <div className="img-container flex items-center justify-center h-screen w-screen">
                            <img className="image" src="/rainbow-bg.jpg" alt="rainbow" />
                            <div className="text-black absolute flex flex-col items-center justify-center">
                                <h1 className="text-[100px]">
                                    <span className="text-stroke">Brit Olam Bolivia</span> Learn
                                </h1>
                                <p className="w-48 text-center text-[13px]">
                                    {" "}
                                    Promoviendo los valores universales del judaísmo
                                </p>
                            </div>
                        </div>

                        <div className="container py-12 flex flex-wrap items-center justify-around">
                            <div className="col-1 flex flex-col gap-16 translate-y-[15%] pb-8">
                                <img className="w-[450px] h-[350px]" src="man.png" alt="" />
                                <img className="w-[400px] h-[400px]" src="man.png" alt="" />
                            </div>
                            <div className="col-2 flex flex-col gap-16">
                                <img className="w-[600px] h-[400px]" src="man.png" alt="" />
                                <img className="w-[400px] h-[400px]" src="man.png" alt="" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>

        //     <div className="container">
        //         <div>
        //             <h1 className="text-8xl font-bold bg-gradient-to-b from-red-500 via-yellow-300 to-emerald-500 text-transparent bg-clip-text mt-6">Brit Olam Bolivia</h1>
        //             <h1 className="text-5xl font-bold bg-gradient-to-b from-primary to-sky-500 text-transparent bg-clip-text mt-6">Brit Olam Bolivia</h1>
        //             <p className="text-xl text-primary mt-6">
        //                 Celebrate the jou of accomplishmetn with an app designed to your progress, motivate your efforeds
        //             </p>
        //             <div className="flex gap-1 items-center mt-[30px]">
        //                 <Link href="/sign-in">
        //                     <Button variant="default">Regístrate</Button>
        //                 </Link>
        //                 <Link href="/sign-in">
        //                     <Button variant="link">Inicia Sesión</Button>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="mt-20">
        //             <Image
        //                 height={430}
        //                 width={430}
        //                 alt="britolam"
        //                 src="/logo.svg"
        //             />
        //         </div>
        //     </div>
        // </section>
    );
}

export default Hero;
