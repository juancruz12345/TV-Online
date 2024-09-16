import { useState } from "react"
import { useParams } from "react-router-dom"
import './VerCanal.css'
import { canales } from "../hooks/canales"
import { Button } from "react-bootstrap"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function VerCanal(){

    const {nombre} = useParams()
  
   

    const canal = canales.filter(e=>e.nombre==nombre)
    console.log(canal)
    const [urlActual, setUrl] = useState(canal[0].src[0])
    console.log(nombre)
    console.log(canal[0].src[0])
    
    return(
    <div>

        <Header></Header>
        <div className="div-detalle">
            <h3>{canal.nombre}</h3>
           <div className="iframe-container">
           <iframe src={urlActual} allowFullScreen={"true"} ></iframe>
           </div>
            <div className="list">
            {
                canal[0].src.length>1
                ?
                canal[0].src?.map((e, i)=>(
                    <li key={i}>
                        <Button onClick={()=>{setUrl(e)}}>Opcion {i+1}</Button>
                    </li>
                ))
                :
                <></>
            }
            </div>
        </div>
            <Footer></Footer>
    </div>
    )
    
}