import Image from "next/image";
import Components from '@/components/index'

export default function Home() {
  return (
    <div>
      <Components.BackgroundBeamsWithCollision>
        <Components.FloatingDockDemo />
        <div className="px-20 w-[100vw] pt-6">
          <Components.hero />
        </div>
      </Components.BackgroundBeamsWithCollision>
    </div>
  );
}
