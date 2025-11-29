import { mockFetch } from "../lib/mock";
import { SecondComponent } from "./SecondComponent";

export async function FirstComponent() {
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
      <SecondComponent firstData={firstData} />
    </div>
  );
}
