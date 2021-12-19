import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import bg from "../public/assets/banner1.jpg";
export default function Home(s) {
  return (
    <div>
      <Head>
        <title>Resto | Contacts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/resto.png" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/fe2e019d14.js"
        crossOrigin="anonymous"
      ></Script>

      <div className="contacts">
        <h1>Contact us</h1>

        <Image
          src={bg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="bg"
        />

        <form>
          <div className="input-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name..." />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name..." />
          </div>

          <select>
            <option value="">Choose Subject..</option>
            <option value="for dish"> For Dish</option>
            <option value="for drinks"> For Drinks</option>
            <option value="for reservation"> For Reservation</option>
          </select>

          <div className="input-group">
            <label>Message</label>
            <textarea type="text" placeholder="Your Concern..." />
          </div>
          <div className="btn">
            <button>Send up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
