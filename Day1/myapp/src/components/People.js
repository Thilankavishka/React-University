import "../assets/css/main.css";

export default function people({ detail }) {
  console.log(detail);
  return (
    <>
      <div className="maincard">
        <div className="profile">
          <img
            className="image"
            src={"https://i.imgur.com/" + detail.imageId + "s.jpg"}
          ></img>
        </div>
        <div className="details">
          <p>Name:{detail.name}</p>
          <p>Profession:{detail.profession}</p>
          <p>Accomplishment:{detail.accomplishment}</p>
        </div>
      </div>
    </>
  );
}
