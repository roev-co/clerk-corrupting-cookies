import Image from "next/image";
import Link from "next/link";
import componentsImg from "./assets/components.svg";
import { DownArrow, RightArrow } from "./icons";
import "./home.css";
import ShowCookies from './ShowCookies';

export default function Home() {
  return (
    <main className="">
      <article
        className="px-8 py-12 bg-black bg-opacity-5 md:px-20 md:py-24"
        id="cookies"
      >
        <ShowCookies />
      </article>
    </main>
  );
}
