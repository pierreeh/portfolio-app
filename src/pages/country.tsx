import { useParams } from "react-router-dom";

export default function Country() {
  const { ccn3 } = useParams();

  console.log(ccn3);

  return <section>Country</section>;
}
