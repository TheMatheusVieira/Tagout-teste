export function TaskBlock() {
  return (
    <div>
      <h1 className="m-5 text-2xl text-red text font-bold">
        Manutenção atual: Painel elétrico X
      </h1>

      <div>
        <span className="bg-red text-white text-2xl font-bold rounded-sm px-5 py-2 ml-5 ">
          SEGUNDA-FEIRA <span>9</span>
        </span>
      </div>

      <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-bold transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">
        <a
          href="/viewTask"
          className="flex justify-center items-center ml-5 mt-5 w-50 h-12 text-2xl bg-gray-700 text-primary-foreground shadow-xs hover:bg-primary/90 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5"
        >
          ACOMPANHAR
        </a>
      </div>
    </div>
  );
}
