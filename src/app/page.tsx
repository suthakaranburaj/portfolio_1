import Image from "next/image";
import Components from '@/components/index'
export default function Home() {
  return (
    <Components.BackgroundBeamsWithCollision>
      <Components.FloatingDockDemo />
    </Components.BackgroundBeamsWithCollision>
  );
}
