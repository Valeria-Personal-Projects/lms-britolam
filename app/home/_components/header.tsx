import { MobileHeader } from "./mobile-header";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return(
        <header className="sticky top-0 backdrop-blur-sm">
            <div className="flex justify-center items-center py-3 bg-primary text-white text-sm gap-3">
                <p className="text-white/60 hidden md:block">Conéctate con la comunidad Noájida</p>
                <div className="inline-flex gap-1 items-center">
                    <p>¡Empieza Ahora!</p>
                    <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <Image 
                            height={60}
                            width={60}
                            alt="logo"
                            src="/logo.svg"
                        />
                        {/* <Menu className="h-5 w-5 md:hidden" /> */}
                        <MobileHeader />
                        <nav className="hidden md:flex gap-6 items-center">
                            <a href="#">Inicio</a>
                            <a href="#">Nosotros</a>
                            <a href="#">Mision</a>
                            <a href="#">Vision</a>
                            <a href="#">Contactanos</a>
                            <Link href="/sign-in">
                                <Button className="px-4 py-2 inline-flex justify-center" size="sm" variant="default">
                                    Iniciar Sesión
                                </Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button className="px-4 py-2 inline-flex justify-center" size="sm" variant="ghost">
                                    Regístrate
                                </Button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    //     <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            
    //     {/* <HomeMobileSidebar/> */}
    //     <HomeNavbarRoutes />
    // </div>
    )
}