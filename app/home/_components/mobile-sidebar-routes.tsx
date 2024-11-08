"use client";

import { Home, Rainbow, PhoneCall, Goal, Telescope } from "lucide-react"
import { MobileSidebarItem } from "./mobile-sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon: Home,
        label: "Inicio",
        href: "/",
    },
    {
        icon: Rainbow,
        label: "Nosotros",
        href: "#about",
    },
    {
        icon: Goal,
        label: "Misión",
        href: "#contactus",
    },
    {
        icon: Telescope,
        label: "Visión",
        href: "#contactus",
    },
    {
        icon: PhoneCall,
        label: "Contáctanos",
        href: "#contactus",
    },
]


export const MobileSidebarRoutes = () => {
    const routes = guestRoutes;

    return (
        <div className="flex flex-col w-full"> 
            {routes.map((route) => (
                <MobileSidebarItem 
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}