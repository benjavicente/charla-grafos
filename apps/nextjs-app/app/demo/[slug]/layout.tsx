"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    { slug: "angular-inject", label: "Inject" },
    { slug: "angular-inject-composed", label: "Inject (Composed)" },
  ],
} as const;

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentSlug = pathname?.split("/").pop() || "";

  return (
    <>
      <nav
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #e0e0e0",
          padding: "0 1rem",
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(FRAMEWORK_GROUPS).map(([framework, apps]) => (
          <div
            key={framework}
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#666",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.25rem",
              }}
            >
              {framework}
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {apps.map((app) => {
                const isActive = currentSlug === app.slug;
                return (
                  <Link
                    key={app.slug}
                    href={`/demo/${app.slug}`}
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "4px",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      backgroundColor: isActive ? "#0070f3" : "transparent",
                      color: isActive ? "#fff" : "#0070f3",
                      border: isActive ? "none" : "1px solid #0070f3",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = "#f0f8ff";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {app.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      {children}
    </>
  );
}
