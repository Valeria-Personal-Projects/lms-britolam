"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/rainbow-bg.jpg";
import { Header } from "./header";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from "react";
import { CarTaxiFront, Container } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const bg1 = useRef(null);
    const img_container = useRef(null);
    const img = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);
    const cardContainer = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: bg1.current,
                pin: bg1.current,
                pinSpacer: false,
                start: "top top",
                endTrigger: ".last",
                end: "bottom bottom"
            });

            gsap.set(cardContainer.current, { marginTop: -cardContainer.current.offsetHeight})
            gsap.timeline({
                scrollTrigger: {
                    trigger: img_container.current,
                    pin: img_container.current,
                    scrub: 1,
                    start: "0% 0%",
                },
            }).to(img.current, { transform: "translateZ(2200px)" }, 0)
            .to(text1.current, { y: -800 }, 0.05, "<")
            .to(text2.current, { y: -800 }, 0.08, "<")
            .fromTo(cardContainer.current, {yPercent:100, scaleY:2}, {yPercent:0, scaleY:0});
        })

        return () => ctx.revert();
    }, []);
    return (
        // <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#2D5CA5,#ffffff_66%)]">
        <>
            <div className="relative">
                <div ref={bg1} className="bg bg-[#fff] absolute h-screen w-screen z-[-1]">
                    <section>
                        <div ref={img_container} className="img-container perspective flex items-center justify-center h-screen w-screen">
                            <img ref={img} className="image" src="/rainbow-bg.jpg" alt="rainbow" />
                            <div className="text-black absolute flex flex-col items-center justify-center">
                                <h1 ref={text1} className="text-[100px] text-center">
                                    <span className="text-stroke">Brit Olam Bolivia</span> Learn
                                </h1>
                                <p ref={text2} className="w-48 text-center text-[13px]">
                                    {" "}
                                    Promoviendo los valores universales del judaísmo desde 2021
                                </p>
                            </div>
                        </div>

                        <div ref={cardContainer} className="container py-12 flex flex-wrap items-center justify-around">
                            <div className="col-1 flex flex-col gap-16 translate-y-[15%] pb-8">
                                <img className="w-[450px] h-[350px]" src="man.png" alt="" /> img1
                                <img className="w-[400px] h-[400px]" src="man.png" alt="" />img2
                            </div>
                            <div className="col-2 flex flex-col gap-16">
                                <img className="w-[600px] h-[400px]" src="man.png" alt="" />img3
                                <img className="w-[400px] h-[400px] last" src="man.png" alt="" />img4
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
