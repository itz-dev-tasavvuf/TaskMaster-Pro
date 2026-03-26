import React, { useState } from "react";

function AddTaskForm({addTask}) {
    const [tittle, setTittle] = useState("")
  const [des, setdes] = useState("")
  const [Priority, setPriority] = useState("Low")
  const [cata, setcata] = useState("Work")
  const isDesable = tittle.trim()===""
  const handleSub = ()=>{
  if(tittle.trim()==="")return
    const details = {
      tittle : tittle,
      des : des,
      priority : Priority,
      cata : cata
    }
  addTask(details)
    setTittle("")
    setdes("")
    setcata("Work")
    setPriority("Low") 
  }

  
  return (
    <div className="h-full w-full bg-[#1b1b1d] mt-5 rounded p-3">
      <h2> add your tasks here </h2>
      <form action="">
       Title :  <input type="text" value={tittle}   name="tiltle" onChange={(value)=>{
        setTittle(value.target.value)
        
    
       }} placeholder="tittle of your task" />
       <br />
       <div className="flex gap-1.5 items-center" >
        <div >description</div>  <textarea className="bg-black rounded"
          name="description"
          value={des}
          placeholder="description of task..."
          onChange={(value)=>{
        setdes(value.target.value)
       }}
        ></textarea>

       </div>
      
        <br />
        <div> Priority </div>
        <select className="  appearance-none rounded border border-slate-200 bg-transparent py-2 pl-3 pr-8 text-sm focus:border-slate-400 focus:outline-none" onChange={(val)=>setPriority(val.target.value)} value={Priority}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <div> Category </div>
        <select className="  appearance-none rounded border border-slate-200 bg-transparent py-2 pl-3 pr-8 text-sm focus:border-slate-400 focus:outline-none"
        onChange={(val)=>setcata(val.target.value)} value={cata}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Urgent">Urgent</option>
        </select>
        <br />
        <br />
     
      
       <button
         disabled={isDesable}
 
       onClick={(e)=>{e.preventDefault()
        handleSub();
      }} className={`px-3 py-1 text-yellow-300 
        ${isDesable ? "bg-red-900 cursor-not-allowed"
          : "bg-black rounded cursor-pointer"
        }
       `} > add task</button>
     
      </form>
    </div>
  );
}

export default AddTaskForm;
