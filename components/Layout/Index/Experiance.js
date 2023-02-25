import React from "react";

function Experiance() {
  return (
    <div className="h-[441px] w-full flex items-center justify-center">
      <div className="w-[1005px] flex flex-col gap-[68px]">
        <div className="text-center">
          <p className="text-secondery text-2xl mb-3.5">Experiance</p>
          <h2 className="text-projectsTitle font-bold text-56">
            My Professional <br />
            Experiance
          </h2>
        </div>
        <div className="flex gap-[55px]">
          <div className="p-5 border border-solid border-primary-border rounded-[10px]">
            <div className="flex gap-4">
              <div className="flex items-center justify-center relative">
                <div className="w-14px h-14px rounded-full bg-btnPrimary opacity-50 blur-8px absolute"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-btnPrimary absolute"></div>
              </div>
              <p className="text-h6 text-lg font-semibold">
                Linux System Administrator
              </p>
            </div>
            <p className="text-primary-border">
              School of Freelancing (Comilla,Bangladesh)
            </p>
            <p className="text-primary-border">May 2020- Present</p>
            <hr className="border-primary-border" />
            <p className="text-primary-border">
              Configure & deploy web applications based on the LEMP and LAMP
              stacks. Troubleshoot various production environment issues.
              Training new candidates on various system administration processes
            </p>
          </div>
          <div className="p-5 border border-solid border-primary-border rounded-[10px]">
            <div className="flex gap-4">
              <div className="flex items-center justify-center relative">
                <div className="w-14px h-14px rounded-full bg-btnPrimary opacity-50 blur-8px absolute"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-btnPrimary absolute"></div>
              </div>
              <p className="text-h6 text-lg font-semibold">
                Linux System Administrator
              </p>
            </div>
            <p className="text-primary-border">
              School of Freelancing (Comilla,Bangladesh)
            </p>
            <p className="text-primary-border">May 2020- Present</p>
            <hr className="border-primary-border" />
            <p className="text-primary-border">
              Configure & deploy web applications based on the LEMP and LAMP
              stacks. Troubleshoot various production environment issues.
              Training new candidates on various system administration processes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiance;
