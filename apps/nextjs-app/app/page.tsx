import { Suspense } from "react";
import { mockFetch } from "../lib/mock";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Next.js App with React Server Components
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <FirstComponent />
        </Suspense>
      </div>
    </div>
  );
}

async function FirstComponent() {
  const firstData = await mockFetch(2000);

  return (
    <div
      style={{
        margin: "2rem 0",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>First Component</h2>
      <p>First fetch completed: {firstData.data}</p>
      <p>Timestamp: {firstData.timestamp}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <SecondComponent firstData={firstData} />
      </Suspense>
    </div>
  );
}

interface SecondComponentProps {
  firstData: MockData;
}

async function SecondComponent({ firstData }: SecondComponentProps) {
  const secondData = await mockFetch(2000);

  return (
    <div
      style={{
        margin: "2rem 0",
        padding: "1rem",
        border: "1px solid #999",
        borderRadius: "8px",
        marginLeft: "2rem",
      }}
    >
      <h2>Second Component</h2>
      <p>Second fetch completed: {secondData.data}</p>
      <p>Timestamp: {secondData.timestamp}</p>
      <p>First data received: {firstData.data}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <ThirdComponent firstData={firstData} secondData={secondData} />
      </Suspense>
    </div>
  );
}

interface MockData {
  data: string;
  timestamp: number;
}

interface ThirdComponentProps {
  firstData: MockData;
  secondData: MockData;
}

async function ThirdComponent({ firstData, secondData }: ThirdComponentProps) {
  const thirdData = await mockFetch(2000);

  return (
    <div
      style={{
        margin: "2rem 0",
        padding: "1rem",
        border: "1px solid #666",
        borderRadius: "8px",
        marginLeft: "2rem",
      }}
    >
      <h2>Third Component</h2>
      <p>Third fetch completed: {thirdData.data}</p>
      <p>Timestamp: {thirdData.timestamp}</p>
      <p>First data received: {firstData.data}</p>
      <p>Second data received: {secondData.data}</p>
      <p>Total cascade time: {thirdData.timestamp - firstData.timestamp}ms</p>
    </div>
  );
}
