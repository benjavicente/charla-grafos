import { mockFetch } from "../lib/mock";
import { ThirdComponent } from "./ThirdComponent";

interface MockData {
  data: string;
  timestamp: number;
}

interface SecondComponentProps {
  firstData: MockData;
}

export async function SecondComponent({ firstData }: SecondComponentProps) {
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
      <ThirdComponent firstData={firstData} secondData={secondData} />
    </div>
  );
}
