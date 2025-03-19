export function IndicatorView(){
    return (
    <div className="w-full border-t border-gray-200 font-mono mt-16">
    <nav className="pagination flex flex-wrap justify-center text-gray-700 -mt-px">
        <span className="p-2 mx-1 current text-gray-800 border-t border-black">1</span>
        <a className="p-2 mx-1 border-t border-transparent hover:border-gray-700" href="/page/2/">2</a>
        <span className="p-2 mx-1">
         ...
            </span>
        <a className="p-2 mx-1 border-t border-transparent hover:border-gray-700" href="/page/84/">84</a>
        <a className="p-2 mx-1" href="/page/2/">
            &#8702;
        </a>
    </nav>
</div>
    )
}
