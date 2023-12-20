import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.css'
export default function Add({onAdd}) {
    const[NewPlayer,setNewPlayer]=useState({
        name:"",
        image:"",
        age:""
    })
    const handleAdd=()=>{
        if(NewPlayer.name.trim()==='' || NewPlayer.image.trim()==='' || NewPlayer.age.trim()===''){
            Swal.fire({
                icon:"error",
                title:"oops",
                text:"please fill in all fields"
            })
            return
        }
        onAdd(NewPlayer)
        setNewPlayer({
            name:"",
            image:"",
            age:""
        })
        Swal.fire({
            icon:'success',
            title:'player added',
            showConfirmButton: false,
            timer:1500
        })
    }
  return (
    <div>
      <form>
      <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={NewPlayer.name}
            onChange={(e) => setNewPlayer({ ...NewPlayer, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Image
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={NewPlayer.image}
            onChange={(e) => setNewPlayer({ ...NewPlayer, image: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Age
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={NewPlayer.age}
            onChange={(e) => setNewPlayer({ ...NewPlayer, age: e.target.value })}
          />
          <button className="btn btn-primary" type="button" onClick={handleAdd}>
          Add Player
        </button>

        </div>
      </form>
    </div>
  )
}
