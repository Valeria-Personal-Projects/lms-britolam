import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return ( 
       <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#047857,#ecfdf5_66%)]">
        <div className="container">
            <div>
                <h1 className="text-5xl font-bold bg-gradient-to-b from-primary to-emerald-500 text-transparent bg-clip-text mt-6">Pathway to productivity</h1>
                <p className="text-xl text-primary mt-6">
                    Celebrate the jou of accomplishmetn with an app designed to your progress, motivate your efforeds
                </p>
                <div className="flex gap-1 items-center mt-[30px]">
                    <Link href="/sign-in">
                        <Button variant="default">Regístrate</Button>
                    </Link>
                    <Link href="/sign-in">
                        <Button variant="link">Inicia Sesión</Button>
                    </Link>
                </div>
            </div>
            <div className="mt-20">
                <Image 
                    height={430}
                    width={430}
                    alt="britolam"
                    src="/man.png"
                />
            </div>
        </div>
       </section>
     );
}
 
export default Hero;
