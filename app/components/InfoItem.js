import React from "react";

function InfoItem({title, description}) {
  return (
    <div className="bg-gray-900 w-[270px] h-[400px] p-4 rounded-lg text-center text-white flex flex-col items-center justify-center">
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <p className="text-lg">
        {description}
      </p>
    </div>
  );
}

export default InfoItem;
