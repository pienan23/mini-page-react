import Card from "./Card";
import data from "../data";

export default function Main() {
  const Cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="main-section">
      {/* cards */}
      {Cards}
    </div>
  );
}
