import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        {/* <div className=" absolute top-[10%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl">
          Documents.
        </div> */}
        <h1 className="absolute top-1/2 left-1/2 text-[13vw] font-semibold text-zinc-900 -translate-y-[50%] -translate-x-[50%] leading-none tracking-tighter">
          Docs.
        </h1>
        <p className="absolute top-[55%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl">
          Play Arround by dragging the cards.
        </p>
      </div>
    </>
  );
}

export default Background;
