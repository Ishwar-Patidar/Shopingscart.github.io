import React from 'react'

function Pass(props) {
  return (
    <div>
        <h1>Props Defination</h1>
        <p>Props stand for properties. it is an object which stores the value of atributes of tag and work similar to the HTML atributes. <br /> <br />it gives a way to pass the data from one componants to the other componants. <br /><br />props are immutable so we can't mopdify  props inside the  componant </p>
        {props.value}
    </div>
  )
}

export default Pass;