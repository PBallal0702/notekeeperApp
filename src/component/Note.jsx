import React from "react";

function Note(props){
  return(
    <div className = "note">
      <h1>{props.Title}</h1>
      <p>{props.content}</p>
      <button
        onClick={()=>{
          props.onDelete(props.id)
        } }>delete</button>
    </div>
  )
}
export default Note;
