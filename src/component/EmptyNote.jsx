import React ,{useState} from "react";



function EmptyNote(props){

  const [title,setTitle] = useState();

  const [content ,setContent] = useState();


  function titleOnchange(event){
    const newTitle = event.target.value
    setTitle(newTitle)
  }
  function contentOnchange(event){
    const newContent= event.target.value
    setContent(newContent)
  }


  return(
    <div className = "notee">
      <input type ="text" onChange ={titleOnchange} name ="Title" value ={title} ></input>
      <input type ="text"onChange ={contentOnchange} name="content" value ={content}  ></input>
      <button type="button" onClick ={() => {
          props.onAdd(title,content);
           setTitle("");
           setContent("");
        }} >+</button>
    </div>
  )
}
export default EmptyNote;
