import { notFound } from "next/navigation";

const APP_CONFIG = {
  "vue-options": { port: 4000, name: "Vue Options API" },
  "vue-composition": { port: 4100, name: "Vue Composition API" },
  "vue-composition-composed": {
    port: 4200,
    name: "Vue Composition API (Composed)",
  },
  "react-class": { port: 2000, name: "React Class Components" },
  "react-hooks": { port: 2100, name: "React Hooks" },
  "react-hooks-composed": { port: 2200, name: "React Hooks (Composed)" },
  "svelte-magic": { port: 5000, name: "Svelte (Magic)" },
  "svelte-runes": { port: 5100, name: "Svelte Runes" },
  "svelte-runes-composed": { port: 5200, name: "Svelte Runes (Composed)" },
  "angular-inject-decorator": { port: 7100, name: "Angular Inject Decorator" },
  "angular-signals": { port: 7000, name: "Angular Signals" },
  "angular-signals-composed": {
    port: 7200,
    name: "Angular Signals (Composed)",
  },
} as const;

type AppSlug = keyof typeof APP_CONFIG;

export async function generateStaticParams() {
  return Object.keys(APP_CONFIG).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DemoPage({ params }: PageProps) {
  const { slug } = await params;
  const appConfig = APP_CONFIG[slug as AppSlug];
  if (!appConfig) notFound();

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-2xl font-semibold text-gray-900 m-0">
          {appConfig.name}
        </h1>
        <p className="mt-2 mb-0 text-gray-600 text-sm">
          Running on port {appConfig.port}
        </p>
      </div>
      <iframe
        src={`http://localhost:${appConfig.port}`}
        className="w-full flex-1 border-0"
        title={appConfig.name}
      />
    </div>
  );
}
