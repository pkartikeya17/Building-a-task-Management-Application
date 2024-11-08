import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className="space-y-4 md:w-1/4">
          <div className="p-4 bg-red-100 rounded-lg shadow text-center">
            <h3 className="text-red-500 text-lg font-semibold">
              Expired Tasks
            </h3>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="p-4 bg-orange-100 rounded-lg shadow text-center">
            <h3 className="text-orange-500 text-lg font-semibold">
              All Active Tasks
            </h3>
            <p className="text-2xl font-bold">7</p>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg shadow text-center">
            <h3 className="text-blue-500 text-lg font-semibold">
              Completed Tasks
            </h3>
            <p className="text-2xl font-bold">2/7</p>
          </div>
          <button className="bg-indigo-500 text-white rounded-lg p-3 w-full">
            + Add Task
          </button>
        </div>
    </>
  )
}

export default Sidebar