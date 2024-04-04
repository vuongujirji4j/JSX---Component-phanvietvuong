import React from 'react'

export default function Func_JSX_phanvietvuong(props) {
    const users ={
        name:"phan viet vuong",
        age:20
    }
  return (
    <div>
        <h2>function component demo</h2>
        <h3>
            welcome to ,{users.name} - {users.age}
        </h3>
        <hr/>
        <h3>props:
            <br/>fullname: {props.fullname}
            <br/>age: {props.age}

        </h3>
    </div>
  )
}
