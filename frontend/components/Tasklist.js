import React from "react";

const Tasklist = () => {
  return (
    <>
      {/* To Do Column */}
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-purple-600 font-semibold border-b pb-2 mb-4">
          To Do (3)
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h4 className="font-semibold">Brainstorming</h4>
            <p className="text-sm text-gray-600">Deadline: 12/5/24</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow border-t-4 border-red-500">
            <h4 className="font-semibold">Research</h4>
            <p className="text-sm text-gray-600">Deadline: 12/5/24</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow border-t-4 border-red-500">
            <h4 className="font-semibold">Wireframes</h4>
            <p className="text-sm text-gray-600">Deadline: 12/5/24</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasklist;
