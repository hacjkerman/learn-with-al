import React from "react";

function Podium() {
  const topQs = ["1", "2", "3"];

  return (
    <div className="w-full py-12">
      <div className="container flex flex-col gap-6 px-4 text-center md:gap-10 md:flex-row lg:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Top Questions of the Month
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
            The community has spoken. Here are the hottest questions of the
            month.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
          {topQs.map((question) => {
            return (
              <div
                key={question}
                className="min-w-[150px] min-h-[250px] rounded-lg border border-gray-200 bg-white shadow-sm p-4 flex flex-col items-start dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="rounded-full border border-gray-200 dark:border-gray-800 dark:bg-gray-950">
                  <img
                    alt="Avatar"
                    className="rounded-full object-cover"
                    height="40"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width="40"
                  />
                </div>
                <div className="w-full grid grid-cols-1 gap-1 mt-4">
                  <div
                    className="text-xl font-bold leading-none line-clamp-2 hover:underline dark:text-gray-50 dark:hover:underline"
                    href="#"
                  >
                    {question} question is right here click to see
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
                    Lorem ipsum
                  </p>
                </div>
                <div className="w-full flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="font-semibold">12.5k</div>
                    <div>votes</div>
                  </div>
                  <button
                    className="rounded-full border-gray-200 dark:border-gray-800"
                    size="sm"
                    variant="outline"
                  >
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    // <div className="w-full py-12">
    //   <div className="container flex">
    //     <div className="flex flex-col text-center justify-center">
    //       <div className="mx-auto text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
    //         Top Questions of the Month
    //       </div>
    //       <div className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
    //         The community has spoken. Here are the hottest questions of the
    //         month!
    //       </div>
    //     </div>
    //     <div className="flex gap-4 pl-4">
    //       <div className="w-48 h-64 border rounded-md">
    //         <img className="w-6 h-6 rounded-full bg-gray-300"></img>
    //         <div></div>
    //         <div></div>
    //         <div>
    //           <div>
    //             <div></div>
    //             <div></div>
    //           </div>
    //           <div></div>
    //         </div>
    //       </div>
    //       <div className="w-48 h-64 border rounded-md">
    //         <img className="w-6 h-6 rounded-full bg-gray-300"></img>
    //         <div></div>
    //         <div></div>
    //         <div>
    //           <div>
    //             <div></div>
    //             <div></div>
    //           </div>
    //           <div></div>
    //         </div>
    //       </div>
    //       <div className="w-48 h-64 border rounded-md">
    //         <img className="w-6 h-6 rounded-full bg-gray-300"></img>
    //         <div></div>
    //         <div></div>
    //         <div>
    //           <div>
    //             <div></div>
    //             <div></div>
    //           </div>
    //           <div></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Podium;
