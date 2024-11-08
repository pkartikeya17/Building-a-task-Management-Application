import React from "react";

const Donecolumn = () => {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-green-600 font-semibold border-b pb-2 mb-4">
          Done (2)
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h4 className="font-semibold">Mobile App Design</h4>
            <p className="text-sm text-gray-600">Deadline: 12/5/24</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h4 className="font-semibold">Design System</h4>
            <p className="text-sm text-gray-600">Deadline: 12/5/24</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donecolumn;
