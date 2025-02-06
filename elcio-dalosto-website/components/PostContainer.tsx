import { Avatar } from "./Avatar";
import { PostButtons } from "./PostButtons";
import { PostList } from "./PostList";

export function PostContainer() {
  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <Avatar src="/avatar2.png" className="w3-circle" height="23" width="23" alt="Avatar2"/>
      <PostList />
      <PostButtons />
    </div>
  );
}
