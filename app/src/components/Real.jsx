import React from 'react'
import Data from '../database/Data'
import Add from './Add';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
export default function Real() {
    const [Players,setPlayers]= useState(Data)
    const handleAdd=(NewPlayer)=>{
        const updateYear=[...Players,{...NewPlayer,id:Players.length+1}]
        setPlayers(updateYear)
    }
  return (
    <div>
         {Players.map((player)=>(
        <div class="card mb-3" key={player.id} style={{maxWidth: "540px"}}>

            
        <div class="row g-0">
          <div class="col-md-4">
            <img src={player.image} style={{ width: "138%", height: "auto" }}/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{player.name}</h5>
              <h5>{player.age}</h5>
              <p class="card-text"></p>
              
              <p class="card-text"><small class="text-body-secondary"></small></p>
            </div>
          </div>
        </div>

      </div>
      ))
   
    }
    <Add onAdd={handleAdd}/>
    </div>
  )
}


