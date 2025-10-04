import React from "react";

const Container = ({ children }) => {
  return (
    <div className="sm:w-[458px] md:w-[798px] lg:w-[1019px] xl:w-[1248px] mx-auto items-center">
      {children}
    </div>
  );
};

export default Container;
