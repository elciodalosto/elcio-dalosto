// import Accordion from "./Accordion";
import AlertBox from "./AlertBox";
import Interests from "./Interests";
import Profile from "./Profile";

export default function LeftColumn() {
  return (
    <>
      <div className="w3-col m3">
        <Profile />
        {/* <Accordion /> */}
        <Interests />
        <AlertBox />
      </div>
    </>
  );
}
