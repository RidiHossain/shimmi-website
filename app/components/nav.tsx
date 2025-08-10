import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../lib/config";

const navItems = {
  "/research": { name: "Research", icon: "🔬" },
  "/publications": { name: "Publications", icon: "📚" },
  "/projects": { name: "Projects", icon: "💻" },
  "/cv": { name: "CV", icon: "📄" },
  "/blog": { name: "Blog", icon: "✍️" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex items-center">
          <Link 
            href="/" 
            className="text-3xl font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-600 dark:hover:text-slate-400 transition-all duration-300"
          >
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-8 mt-6 lg:mt-0 lg:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name, icon }]) => (
            <Link
              key={path}
              href={path}
              className="group flex items-center gap-2 transition-all duration-300 hover:text-slate-700 dark:hover:text-slate-300 relative"
            >
              <span className="text-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                {icon}
              </span>
              <span className="font-medium">{name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-400 dark:bg-slate-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <div className="ml-4">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
