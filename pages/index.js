import Link from "next/link";

const Index = () => (
  <div>
    <h1>Robofriend</h1>
    <Link href={"/about"}>
      <a>About</a>
    </Link>
  </div>
);

export default Index;
