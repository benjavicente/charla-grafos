"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

const FRAMEWORK_GROUPS = {
  Vue: [
    { slug: "vue-options", label: "Options API" },
    { slug: "vue-composition", label: "Composition API" },
    { slug: "vue-composition-composed", label: "Composition API (Composed)" },
  ],
  React: [
    { slug: "react-class", label: "Class Components" },
    { slug: "react-hooks", label: "Hooks" },
    { slug: "react-hooks-composed", label: "Hooks (Composed)" },
  ],
  Svelte: [
    { slug: "svelte-magic", label: "Magic" },
    { slug: "svelte-runes", label: "Runes" },
    { slug: "svelte-runes-composed", label: "Runes (Composed)" },
  ],
  Angular: [
    { slug: "angular-signals", label: "Signals" },
    { slug: "angular-inject-decorator", label: "Inject Decorator" },
    { slug: "angular-signals-composed", label: "Signals (Composed)" },
  ],
} as const;

export default function DemoLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const currentSlug = pathname?.split("/").pop() || "";

  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-6 lg:gap-8">
            {Object.entries(FRAMEWORK_GROUPS).map(([framework, apps]) => (
              <div key={framework} className="flex flex-col gap-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {framework}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {apps.map((app) => {
                    const isActive = currentSlug === app.slug;
                    return (
                      <Link
                        key={app.slug}
                        href={`/demo/${app.slug}`}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 border ${
                          isActive
                            ? "bg-blue-600 text-white shadow-md border-transparent"
                            : "bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50"
                        }`}
                      >
                        {app.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
