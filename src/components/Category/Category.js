import "./Category.css";
import Card from "../Card/Card";

let CardDeatils = [
  {
    Title: "The Venice Necklace",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    Title: "The Venice Necklace",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  },
  {
    Title: "The Venice Necklace",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  }
];

export default function Category({ heading }) {
  return (
    <div className="category">
      <h1 style={{ margin: "40px 0" }}>{heading}</h1>
      <main className="grid">
        {CardDeatils.map((item) => (
          <Card item={item} />
        ))}
      </main>
    </div>
  );
}
