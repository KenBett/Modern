export default function Late() {
  return (
    <>
      <div className="grid grid-cols-2 w-full h-screen p-5">
        <div className="w-full h-full bg-black"></div>
        <div className="flex w-full h-full bg-blue-500 rounded-lg">
          <div className="grid grid-cols-2 w-full h-full">
            <div className="w-full h-full bg-blue-500"></div>
            <div className="w-full h-full bg-rose-500 "></div>
            <div className="w-full h-full bg-yellow-500"></div>
            <div className="w-full h-full bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
}
