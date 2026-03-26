import React from "react";

function TaskItem({ task }) {
  return (
    <div className="flex flex-wrap gap-2">
      {" "}
      {task.map(function (val) {
        return (
          <div className="bg-[#1b1b1d] flex flex-col justify-between p-3 rounded-3xl h-60 w-50">
            <h3 className="text-3xl font-bold text-zinc-100">{val.tittle}</h3>
            <div className="bg-zinc-600 w-[100%] h-[1px] "></div>
            <p className="text-lg">{val.des}</p>
            <div className="bg-zinc-600 w-[100%] h-[1px] "></div>

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
              <span className="px-3 py-1 bg-blue-400 rounded">{val.cata}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskItem;
