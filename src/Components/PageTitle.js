import React from "react";

const PageTitle = ({ children }) => {
 
  return (
    <div className="pb-5 md:pb-10 sm:px-10 md:px-20 max-w-xl mx-auto">
      <p className="text-2xl font-bold text-center mb-2 capitalize p-2 bg-gradient-to-r rounded from-white to-white via-yellow-500  dark:via-red-500 dark:from-zinc-900 dark:to-zinc-900">
        {children}
      </p>
    </div>
  );
};

export default PageTitle;
