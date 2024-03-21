import { useRouter } from "next/router";

const Robot = () => {
  const router = useRouter();
  return <div>{`Robot ${router.query.robotId}`}</div>;
};

export default Robot;
