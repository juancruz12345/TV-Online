
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ListaDeCanales } from "./ListaDeCanales"
import { canales } from "../hooks/canales"
import { useParams } from "react-router-dom"


export function Home(){

    
    const {categoria} = useParams()

    return(
        <div>
            <Header></Header>
            <ListaDeCanales canales={canales} categoria={categoria ? categoria : 'todos'}></ListaDeCanales>
            <Footer></Footer>
        </div>
    )
}