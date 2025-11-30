export async function mockFetch(delay = 2000): Promise<{
  data: string;
  timestamp: number;
}> {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return { data: `Response after ${delay}ms`, timestamp: Date.now() };
}

export async function getNavData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    links: [
      { href: "/", label: "Home" },
      { href: "/demo", label: "Demos" },
      { href: "/pages-router", label: "Pages Router" },
    ],
    timestamp: Date.now(),
  };
}

export async function getUserData() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    name: "John Doe",
    email: "john@example.com",
    role: "user",
    timestamp: Date.now(),
  };
}

