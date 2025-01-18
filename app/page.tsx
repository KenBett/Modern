import { Anchor, Menu } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col h-full w-full p-8">
      <div className="flex w-full">
        <div className="flex flex-row w-full justify-between">
          <h1 className="font-semibold text-white text-2xl tracking-wider">
            Modern.
          </h1>
          <div className="flex flex-row justify-between gap-4">
            <p className="text-white">kenatohat@gmail.com</p>
            <p className="text-white">0740121019</p>
            <Menu />
          </div>
        </div>
      </div>
      <div className="w-full mt-16">
        <p className="text-6xl text-white font-bold tracking-normal">
          Marketing is an art <br /> and we are artists
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-16 w-full">
        <p>
          Marketing is essential for businesses to connect with their audience
          and drive sales. It involves understanding customer needs and creating
          value.
        </p>
        <p>
          Effective marketing strategies leverage various channels, including
          social media, email, and content marketing, to reach potential
          customers.
        </p>
        <p>
          Branding plays a crucial role in marketing, as it helps establish a
          unique identity and fosters customer loyalty.
        </p>
        <p>
          Data-driven marketing allows businesses to analyze consumer behavior
          and optimize their campaigns for better results.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-16 w-full">
        <div className="flex flex-col h-96 w-full bg-rose-500 rounded-lg justify-between p-6 items-center">
          <Anchor color="black" />
          <div>
          <p className="text-neutral-800 text-2xl">01</p>
          <h1 className="text-black font-bold text-2xl"><br />Social Media <br /> Marketing</h1>
          </div>
        </div>
        <div className="h-96 w-full bg-yellow-500 rounded-lg"></div>
        <div className="h-96 w-full bg-teal-500 rounded-lg"></div>
        <div className="h-96 w-full bg-white rounded-lg"></div>
      </div>
    </div>
  );
}
