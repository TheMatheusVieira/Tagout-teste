import { Circle } from "lucide-react";

export function IndicatorView() {
  return (
    <div className="w-full mt-16">
      <nav className="pagination flex flex-wrap justify-center text-gray-700 -mt-px">
        <a
          className="p-1 mx-1 border-t border-transparent hover:border-gray-700"
          href="/"
        >
          <Circle className="w-2" />
        </a>
        <a
          className="p-1 mx-1 border-t border-transparent hover:border-gray-700"
          href="/"
        >
          <Circle className="w-4" />
        </a>
        <a
          className="p-1 mx-1 border-t border-transparent hover:border-gray-700"
          href="/"
        >
          <Circle className="w-2" />
        </a>
      </nav>
    </div>
  );
}
