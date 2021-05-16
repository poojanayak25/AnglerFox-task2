import "./Nav.css";
import Category from "../Category/Category";

export default function Nav() {
  return (
    <div style={{ marginBottom: "50px" }}>
      <div className="nav">
        <a href="#necklace">Necklace</a>

        <a href="#ring">Ring</a>

        <a href="#bracelet">Bracelet</a>

        <a href="#accessories">Accessories</a>

        <a href="#others">Others</a>
      </div>

      <div id="necklace">
        <Category heading="Necklace" />
      </div>
      <div id="ring">
        <Category heading="Ring" />
      </div>
      <div id="bracelet">
        <Category heading="Bracelet" />
      </div>
      <div id="accessories">
        <Category heading="Accessories" />
      </div>
      <div id="others">
        <Category heading="Others" />
      </div>
    </div>
  );
}
