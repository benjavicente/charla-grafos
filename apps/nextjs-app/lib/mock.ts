export async function mockFetch(delay = 1500): Promise<{
  data: string;
  timestamp: number;
}> {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return { data: `Response after ${delay}ms`, timestamp: Date.now() };
}

export async function getNavData() {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return {
    links: [
      { href: "/", label: "Home" },
      { href: "/demo", label: "Demos" },
      { href: "/app-router", label: "App Router" },
      { href: "/pages-router", label: "Pages Router" },
      { href: "/ui", label: "UI" },
    ],
    timestamp: Date.now(),
  };
}

export async function getUserData() {
  await new Promise((resolve) => setTimeout(resolve, 750));
  return {
    name: "John Doe",
    email: "john@example.com",
    role: "user",
    timestamp: Date.now(),
  };
}
