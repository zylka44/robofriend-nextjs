import "tachyons";
import Link from "next/link";

const Card = (props) => {
  const { id, name, email } = props;
  return (
    <Link href={`robots/${id}`}>
      <div className="tc bg-washed-red dib br3 pa3 ma2 grow bw2 shadow-5 pointer">
        <img src={`https://robohash.org/${id}`} alt="robot" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
