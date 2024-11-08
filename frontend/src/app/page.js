import React from "react";
import Tasklist from "../../components/Tasklist";
import Onprogress from "../../components/Onprogress";
import Donecolumn from "../../components/Donecolumn";
import Sidebar from "../../components/Sidebar";

function TaskDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-col md:flex-row justify-between items-center">
        <input
          type="text"
          placeholder="Search Project"
          className="border rounded-lg p-2 w-full md:max-w-md mb-4 md:mb-0"
        />
        <button className="w-full md:w-auto ml-0 md:ml-4 bg-gray-200 p-2 rounded-lg">
          Filter
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar Summary */}
        <Sidebar />

        {/* Task Lists Container */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* To Do Column */}
          <Tasklist />

          {/* On Progress Column */}
          <Onprogress />

          {/* Done Column */}
          <Donecolumn />
        </div>
      </div>
    </div>
  );
}

export default TaskDashboard;
