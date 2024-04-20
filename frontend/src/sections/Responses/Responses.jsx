import React from "react";
import arrow from "../../images/arrow.png";

function Responses() {
  return (
    <div className="flex justify-center">
      <div className="flex w-[800px] h-[120px] bg-black justify-around items-center rounded-2xl">
        <div className="w-14 h-14 rounded-full bg-slate-300 text-3xl flex items-center justify-center">
          <img />
        </div>
        <div className="w-[70%] h-[50%]">
          <div className="w-[100%] h-[100%] p-2 bg-white truncate hover:cursor-pointer">
            aewfapofmawef kwepofakweofpawkefpoawk akwfea wefa wefae waew faewf
            aew fawe faew aew fawe fawe fawe fawe fawe fwe fwe fawe f feaw
            aefawfawf aewf wae fawef awefae fwef aewf aewf awef we
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-slate-300 text-3xl flex items-center justify-center hover:cursor-pointer rotate-[-90deg]">
            <img src={arrow} className="w-8 h-4" />
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-300 text-3xl flex items-center justify-center hover:cursor-pointer rotate-90">
            <img src={arrow} className="w-8 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Responses;
