"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ComboboxProps {
    options: { label: string; value: string }[];
    value?: string;
    onChange: (value: string) => void;
};

export const Combobox = ({
    options,
    value,
    onChange
} : ComboboxProps) => {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
         <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
           {value
            ? options.find((option) => option.value === value)?.label
            : "Seleccionar opción..."}
           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
         </Button>
       </PopoverTrigger>
       <PopoverContent className="w-[200px] p-0">
         <Command>
           {/* <CommandInput placeholder="Opción de búsqueda..." />
           <CommandEmpty>No se encontró ninguna opción.</CommandEmpty> */}
           <CommandGroup>

                {options.map((option) => (
                    <div
                        key={option.value}
                        onClick={() => {
                        onChange(option.value === value ? "" : option.value);
                        setOpen(false);
                        }}
                        className={cn(
                            "py-2 px-4 cursor-pointer hover:bg-gray-100 flex items-center", // Modificado
                            value === option.value && "bg-gray-100"
                        )}
                        style={{ fontSize: "11px", padding: "6px 8px" }}
                    >
                    <Check
                        className={cn(
                            "mr-2 h-4 w-4",
                            value === option.value ? "opacity-100" : "opacity-0"
                        )}
                    />
                    {option.label}
                </div>
                ))}
           </CommandGroup>
         </Command>
       </PopoverContent>
     </Popover>
  )
}


