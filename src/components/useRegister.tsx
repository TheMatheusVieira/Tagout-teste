import { Upload } from "lucide-react";

export function ConjCadastrar() {
  return (
    <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-bold transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">
      <a
        href="/viewTask"
        className="flex justify-center items-center ml-5 mt-5 w-60 h-12 text-2xl bg-red text-primary-foreground shadow-md shadow-gray-200 hover:bg-red-900 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5"
      >
        CADASTRAR
      </a>

      <button
        type="button"
        className="cursor-pointer shadow-md shadow-gray-200 hover:bg-red-900 gap-1.5 px-3 has-[>svg]:px-2.5 h-12 bg-red w-15 rounded-sm mt-5 flex justify-center items-center"
      >
        <span>
          <Upload className="size-8 text-white" />
        </span>
      </button>
    </div>
  );
}
