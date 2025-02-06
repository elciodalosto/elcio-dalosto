import { PostList } from "./PostList";
import { StatusPost } from "./StatusPost";

export default function MiddleColumn() {
  return (
    <>
      <div className="w3-col m7">
        <StatusPost />
        <PostList />
      </div>
    </>
  );
}
