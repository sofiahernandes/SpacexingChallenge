import { cn } from "@/lib/utils";
import { libreCaslon } from "@/app/fonts";

interface SubtituloProps {
    texto: string;
}

const Subtitulo = ({ texto }: SubtituloProps) => {
    return (
        <div className="text-center text-blue-900 mt-20 mb-10">
            <h1 className={cn(`justify-center text-3xl m-0 py-1`, libreCaslon.className)}>{texto}</h1>
        </div>
    )
}

export default Subtitulo;
