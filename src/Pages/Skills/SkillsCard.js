import React from "react";

const SkillsCard = ({ title, text, icon }) => {
  return (
    <div className="flex flex-col justify-between p-8 transition-shadow bg-white rounded-sm shadow group hover:bg-indigo-200">
      <div>
        <h5 className="text-xl font-bold text-indigo-600 truncate">{title}</h5>
        <div className="pt-2 mt-4 border-t-2 border-indigo-100">
          <p className="text-xs font-medium tracking-widest text-gray-500 ">
            {text}
          </p>
        </div>
      </div>

      {/* <div className="inline-flex items-center mt-6 gap-2 text-indigo-600 hover:underline cursor-help ">
        <p className="text-sm font-medium">How I Learned it?</p>
        {icon}
      </div> */}
    </div>
  );
};

export default SkillsCard;
