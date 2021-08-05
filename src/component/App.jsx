import React ,{useState} from "react";
import Note from "./Note.jsx"
import EmptyNote  from "./EmptyNote.jsx"

function App (){

  const [finalNote,setFinalNote]= useState([{}])

  function noteOnclick(title,content){

    setFinalNote(prevItems =>{
      return[...prevItems ,{title , content}]
    })}
    function onClickDelete(id){
        console.log("delete kara lagte re")
        console.log(id)
        setFinalNote(prevItems =>{
          return prevItems.filter((item,index) => index !==id)
        })
    }

  return(
    <div>
    <div>
    <EmptyNote onAdd ={noteOnclick} />
    </div>
      {finalNote.map((fnote,index) =>(<Note Title = {fnote.title } content={fnote.content} id ={index} onDelete ={onClickDelete}/>))}
      </div>
  )

}

export default App;
