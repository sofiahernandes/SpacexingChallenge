"use client";

import { libreCaslon } from "@/app/fonts";
import Link from "next/link";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Titulo = () => {
    return (
        <div className="justify-start">
            <h1 className={cn(`text-4xl align-middle m-0`, libreCaslon.className)}>
                Reserve sua <br/>passagem na <br/><span className="italic">SpaceX</span>
            </h1>
            <h2 className="py-3 text-lg">
                Fácil. Rápido. Seguro.
            </h2>

            <Button asChild className="mt-6">
                <Link href="#agendar-ticket">Agendar <ArrowDown className="h-5 w-5 ml-2 text-lg"/></Link>
            </Button>
        </div>
    )
}

export default Titulo;