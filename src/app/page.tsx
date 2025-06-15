import Image from "next/image";
import Components from '@/components/index'

export default function Home() {
  return (
    <div>
      <Components.BackgroundBeamsWithCollision>
        <Components.FloatingDockDemo />
        <div className="px-20 w-[100vw] h-[100vh] py-auto ">
          <Components.hero />
        </div>
      </Components.BackgroundBeamsWithCollision>
    </div>
  );
}
