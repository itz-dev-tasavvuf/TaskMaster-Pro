import React from "react";

function TaskItem({ val, toggleTask }) {
  return (
    <div className="bg-[#1b1b1d] flex flex-col justify-between p-3 rounded-3xl h-60 w-50 relative">
   
      
      <input
  type="checkbox"
  checked={val.isDone}
  onChange={() => toggleTask(val.id)}
  className="absolute top-5 right-5 w-5 h-5 accent-amber-400 cursor-pointer transition-all duration-200 "
/>
     <h3 className={`text-3xl font-bold ${val.isDone ? "line-through text-zinc-500" : "text-zinc-100"}`}>
        {val.tittle}
      </h3>

      <div className="bg-zinc-600 w-full h-[1px]" />

      <p className="text-lg">{val.des}</p>

      <div className="bg-zinc-600 w-full h-[1px]" />

      <div className="flex gap-2">
        <span
          className={`px-3 py-1 rounded ${
            val.priority === "Low"
              ? "bg-green-400"
              : val.priority === "Medium"
              ? "bg-yellow-300"
              : val.priority === "High"
              ? "bg-red-400"
              : "bg-amber-300"
          }`}
        >
          {val.priority}
        </span>

        <span className="px-3 py-1 bg-blue-400 rounded">
          {val.cata}
        </span>
      </div>
    </div>
  );
}

export default TaskItem;
