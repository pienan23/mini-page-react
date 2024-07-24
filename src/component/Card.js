import data from "../data";

export default function Card(props) {
  {
    /* condition if  */
  }

  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="Card">
      {/*{badgeText &&<div className="card--bagde">{badgeText}</div>} permet ici de verifier si badgeText existe
       */}
      <div className="card--bagde">{badgeText}</div>
      <img src={`../image/${props.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../image/Star1.png" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
