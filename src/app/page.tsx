import Image from "next/image";
import Components from '@/components/index'

export default function Home() {
  return (
    <div>
      <Components.BackgroundBeamsWithCollision>
        <Components.FloatingDockDemo />
        <div className="container w-full mx-5 p-4">
          <Components.hero />
        </div>
      </Components.BackgroundBeamsWithCollision>
    </div>
  );
}
