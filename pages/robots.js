import Card from "../components/Card.js";
import { robots } from "../consts/robots";

const Robots = () => {
  return (
    <div>
      <h1>Robots</h1>
      <div>
        {robots.map((robot) => {
          const { id, name, email } = robot;
          return <Card key={id} id={id} name={name} email={email} />;
        })}
      </div>
    </div>
  );
};

export default Robots;
