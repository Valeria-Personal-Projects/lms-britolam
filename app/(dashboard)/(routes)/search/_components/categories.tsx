"use client";

import { Category } from "@prisma/client";
import {
    FcEngineering,
    FcFilmReel,
    FcRules, //ethics
    FcMusic,
    FcManager, //leadership
    FcIdea,  //philosophy
    FcReading, // hebrew
    FcLibrary, //studies
    FcGlobe, //history
} from "react-icons/fc";
import { FaStarOfDavid } from "react-icons/fa"; //torah
import { GoLaw } from "react-icons/go"; //law
import { DiAtom } from "react-icons/di"; //science
import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
    items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
    "Estudios Bíblicos": FcLibrary,
    "Leyes y Principios Bnei Noach": GoLaw,
    "Historia y Cultura": FcGlobe,
    "Filosofía": FcIdea,
    "Hebreo": FcReading,
    "Liderazgo": FcManager,
    "Ética": FcRules,
    "Ciencia": DiAtom,
    "Torah Avanzado": FaStarOfDavid,
}

export const Categories = ({
    items,
}: CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
                <CategoryItem 
                    key={item.id}
                    label={item.name}
                    icon={iconMap[item.name]}
                    value={item.id}
                />
            ))}
        </div>
    )
}