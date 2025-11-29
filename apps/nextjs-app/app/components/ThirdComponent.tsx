import { mockFetch } from "../lib/mock";

interface MockData {
  data: string;
  timestamp: number;
}

interface ThirdComponentProps {
  firstData: MockData;
  secondData: MockData;
}

export async function ThirdComponent({
  firstData,
  secondData,
}: ThirdComponentProps) {
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
