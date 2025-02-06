import { Avatar } from "./Avatar";

export default function Profile() {
  return (
    <>
      <div className="w3-card w3-round w3-white">
        <div className="w3-container">
          <h4 className="w3-center">Perfil</h4>
          <p className="w3-center">
            <Avatar
              src="/avatar.png"
              className="w3-circle"
              height="106"
              width="106"
              alt="Avatar"
            />
          </p>
          <hr />
          <p>
            <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>
            Skateboarding, Street
          </p>
          <p>
            <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>
            Taquara - Rio Grande do Sul - Brasil
          </p>
          <p>
            <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>
            25/02/1987
          </p>
        </div>
      </div>
    </>
  );
}
