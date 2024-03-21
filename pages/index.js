import { useState } from "react";
import Card from "../components/Card.js";
import SearchBox from "../components/SearchBox.js";
import { robots as originRobots } from "../consts/robots";
import styles from "../styles.module.css";

const Index = () => {
  const [robots, setRobots] = useState(originRobots);

  const onSearchChange = (event) => {
    const { value } = event.target;
    const filteredRobots = originRobots.filter((robot) =>
      robot.name.toLowerCase().includes(value.toLowerCase())
    );
    setRobots(filteredRobots);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.header}>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <div>
        {robots.map((robot) => {
          const { id, name, email } = robot;
          return <Card key={id} id={id} name={name} email={email} />;
        })}
      </div>
    </div>
  );
};

export default Index;
