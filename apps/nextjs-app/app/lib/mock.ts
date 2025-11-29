export async function mockFetch(delay = 2000): Promise<{
  data: string;
  timestamp: number;
}> {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return { data: `Response after ${delay}ms`, timestamp: Date.now() };
}
