import { ChevronDown, Search } from "lucide-react";

export function FilterSearch(){
    return (
<form className="max-w-lg mx-auto absolute right-0">
    <div className="flex">
        
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>

        <div className="relative w-full flex-row flex">

            <input type="search" id="search-dropdown" className="p-2.5 w-40 z-20 text-sm text-gray-900 rounded-lg dark:text-white " placeholder="Buscar..." required />

            <button type="submit" className="top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-700 rounded-e-lg borderfocus:ring-4 focus:outline-none">
               <span>
                <Search className="size-5 "/>
               </span>
                <span className="sr-only">Search</span>
            </button>
            
    <button id="dropdown-button" data-dropdown-toggle="dropdown" className="inline-flex items-center 
    py-2.5 px-4 text-sm font-medium text-center text-gray-900 rounded-lg 
    focus:ring-1 focus:outline-none dark:text-white " type="button">
    Filtrar 
        
        <span>
            <ChevronDown className="size-5 ml-2"/>
        </span>
    </button>

        </div>

    </div>
</form>
    )

}


