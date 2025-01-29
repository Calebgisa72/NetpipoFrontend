import React from "react";

interface ComingSoonProps {
  page: string;
}

const ComingSoon = ({ page }: ComingSoonProps) => {
  return (
    <div className="flex font-poppinskjesfdb items-center justify-center h-full bg-background dark:bg-background-dark py-4">
      <div className="p-5 mx-2 bg-card dark:bg-card-dark border-background-dark dark:border-background border-[1px] rounded-[8px] shadow-custom dark:bg-dark-bg md:p-20">
        <div className="text-center">
          <h2 className="text-2xl font-medium leading-10 tracking-tight text-light-text dark:text-dark-text-fill sm:leading-none md:text-4xl">
            {page} Page
          </h2>
          <h3 className="mt-10 text-[18px] text-light-text dark:text-dark-text-fill md:text-[22px]">
            Coming Soon !!!!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
