export function FilterSearch(){
    return (
<form className="max-w-lg mx-auto">
    <div className="flex">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium 
        text-gray-900 sr-only dark:text-white">Your Email</label>
        
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

            <input type="search" id="search-dropdown" className="block p-2.5 w-40 z-20 text-sm text-gray-900 rounded-lg dark:bg-gray-700 dark:border-s-gray-700 dark:text-white " placeholder="Buscar..." required />

            <button type="submit" className="top-0 end-0 p-2.5 text-sm font-medium h-full text-gray-700 rounded-e-lg borderfocus:ring-4 focus:outline-none">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
            
    <button id="dropdown-button" data-dropdown-toggle="dropdown" className="shrink-0 
        z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 rounded-lg 
        focus:ring-1 focus:outline-none dark:text-white " type="button">
        Filtrar 
        <svg className="w-2.5 
        h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>

        </button>

        </div>

    </div>
</form>
    )

}


