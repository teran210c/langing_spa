import Image from "next/image";
import NavBar from "../components/NavBar";
import Video from "/components/Video";
import Mission from "/components/Mission";
import SubscriptionStripe from "@/components/SubscriptionStripe";

export default function Home() {
  return (
    <>
      <NavBar />
      <Video />
      <Mission />
      <SubscriptionStripe />
    </>
  );
}
