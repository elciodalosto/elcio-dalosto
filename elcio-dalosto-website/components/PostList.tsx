export function PostList() {
  const posts = [
    {
      id: 0,
      firstName: "Elcio",
      lastName: "Dalosto",
      time: "há 12 minutos",
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`,
    },
    {
      id: 1,
      firstName: "Augusto",
      lastName: "Dalosto",
      time: "há 5 minutos",
      content: `quis nostrud exercitation ullamco l Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`,
    },
    {
      id: 2,
      firstName: "Teste Nome",
      lastName: "TESTE SOBRENOME",
      time: "há 2 minutos",
      content: `sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.`,
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <div className="w3-container w3-card w3-white w3-round w3-margin">
          <span className="w3-right w3-opacity">{post.time}</span>
          <h4>
            Publicado por: {post.firstName} {post.lastName}
          </h4>
          <hr className="w3-clear" />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
