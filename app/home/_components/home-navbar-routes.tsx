"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";
import { LogIn } from "lucide-react";
import Link from "next/link";

import { SearchInput } from "@/components/search-input";

export const HomeNavbarRoutes = () => {
 
    const pathname = usePathname();

    const isHomePage = pathname?.startsWith("/home");
    const isSearchPage = pathname === "/search";

    return (
        <>
            {isSearchPage && (
                <div className="hidden md:block">
                    <SearchInput />
                </div>
            )}
            <div className="flex gap-x-2 ml-auto">
                {isHomePage ? (
                    <div>
                        <Link href="/sign-in">
                            <Button size="sm" variant="default">
                                <LogIn className="h-4 w-4 mr-2" />
                                Iniciar Sesión
                            </Button>
                        </Link>
                        <Link href="/sign-in">
                            <Button size="sm" variant="ghost">
                                <LogIn className="h-4 w-4 mr-2" />
                                Regístrate
                            </Button>
                        </Link>
                    </div>
                ) : null }
                <UserButton
                    afterSignOutUrl="/"
                />
            </div>
        </>
    )
}