import Head from "next/head";
import Image from "next/image";
import bg from "../public/assets/banner2.jpg";
import { Row, Col } from "react-bootstrap";
export default function About() {
  return (
    <div>
      <Head>
        <title>Resto | About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/resto.png" />
      </Head>

      <div className="about">
        <Image
          src={bg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="img"
        />

        <Row>
          <Col sm={12} md={6}>
            <h1>What Resto about is?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iusto
              dolore odit eos qui velit molestiae minus tempore? Animi, tempora
              quam. Eaque assumenda aliquam amet labore illum totam hic Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Facere
              adipisci molestias molestiae excepturi saepe a soluta totam nisi
              eaque sequi? mollitia.
            </p>
            <p>
              Eaque assumenda aliquam amet labore illum totam hic Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Facere adipisci
              molestias molestiae excepturi saepe a soluta totam nisi eaque
              sequi? mollitia.
            </p>
          </Col>
          <Col sm={12} md={6}>
            <Image src={bg} objectPosition="center" alt="img" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const fetching = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await fetching.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
