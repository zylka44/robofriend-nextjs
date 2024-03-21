import { useRouter } from "next/router";
import styles from "../../styles.module.css";
import { robots } from "../../consts/robots";
import "tachyons";
import Link from "next/link";

const Robot = () => {
  const router = useRouter();
  const robot = robots.find((r) => r.id.toString() === router.query.robotId);
  return (
    <div className={styles.main}>
      <h1 className={styles.header}>{robot?.name}</h1>
      <img src={`https://robohash.org/${robot?.id}`} alt="robot" />
      <div className="pa4 fw6">{robot?.email}</div>
      <Link href={"/"}>
        <button className="f8 ba b--light-purple link dim ph3 pv2 mb2 dib white bg-light-purple pointer">
          back
        </button>
      </Link>
    </div>
  );
};

export default Robot;
