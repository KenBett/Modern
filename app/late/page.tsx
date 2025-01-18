export default function Late() {
  return (
    <div className="flex flex-col h-screen w-full p-4">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row justify-between gap-16 pl-8">
          <h1 className="font-bold tracking-wider text-3xl">MELTY</h1>
          <p className=" font-light text-sm text-neutral-300 pt-4">PRICING</p>
          <p className=" font-light text-sm text-neutral-300 pt-4">
            INTERGRATIONS
          </p>
          <p className=" font-light text-sm text-neutral-300 pt-4">
            CONTACT SALES
          </p>
        </div>
        <div className="flex items-center px-4 py-1 bg-sky-500 rounded-full cursor-pointer h-10">
          <p className="text-white font-bold">Download App</p>
        </div>
      </div>
      <div className="flex h-3/4 w-full bg-sky-500 mt-4 rounded-lg"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 h-1/4 w-full mt-4 rounded-lg gap-4">
        <div className="h-full w-full bg-sky-500 rounded-lg"></div>
        <div className="h-full w-full bg-sky-500 rounded-lg"></div>
        <div className="h-full w-full bg-sky-500 rounded-lg"></div>
      </div>
      <div className="grid grid-cols-2"></div>
    </div>
  );
}
