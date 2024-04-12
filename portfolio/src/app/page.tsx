import BgGrid from "./components/background/bg-grid";
import Foreground from "./components/foreground/foreground";

export default function Home() {
  return (
    <main className="bg-white w-screen h-screen">
      <Foreground></Foreground>
      <BgGrid></BgGrid>
    </main>
  );
}
