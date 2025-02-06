import LeftColumn from "../../components/LeftColumn";
import MiddleColumn from "../../components/MiddleColumn";
// import RightColumn from "../../components/RightColumn";

export default function Home() {
  return (
    <div className="w3-container w3-content">
      <div className="w3-row">
        <LeftColumn />
        <MiddleColumn />
        {/* <RightColumn /> */}
      </div>
    </div>
  );
}
