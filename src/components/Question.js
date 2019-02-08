import React from 'react';

const Question = (props) => {
  return(
       <div>  
       {props.item.question && <p>Question: {props.item.question}</p>}
       </div>
   )
}
export default Question;