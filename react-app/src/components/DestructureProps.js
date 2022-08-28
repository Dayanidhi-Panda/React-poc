import React from 'react'


//=====Without destructuring props
// export const DestructureProps = (props) =>{
//   return <h1>Hi {props.name} is {props.age}</h1>
// }

//type1- with destructure the props

// export const DestructureProps = (props) =>{
//   const {name, age} = props;
//   return <h1>Hi {name} is {age}</h1>
// }

//type2- with destructure the props

export const DestructureProps = ({name, age}) =>{
  return <h1>Hi {name} is {age}</h1>
}