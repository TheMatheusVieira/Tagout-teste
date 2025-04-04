import { Circle } from "lucide-react";

export function IndicatorView() {
  return (
    <div className="w-full">
      <nav className="pagination flex flex-wrap justify-center items-center text-gray-700 -mt-px h-8">
        <a
          className="p-1 mx-1 transition-all duration-200 hover:scale-150"
          href="/"
        >
          <Circle className="w-2 h-2" />
        </a>
        <a
          className="p-1 mx-1 transition-all duration-200 hover:scale-150"
          href="/"
        >
          <Circle className="w-2 h-2" />
        </a>
        <a
          className="p-1 mx-1 transition-all duration-200 hover:scale-150"
          href="/"
        >
          <Circle className="w-2 h-2" />
        </a>
      </nav>
    </div>
  );
}