import { Canal } from "./Canal"


export function ListaDeCanales({canales, categoria}){

  const canalesFiltrados = (categoria=== 'todos') ? canales : canales.filter(e=>e.categoria===categoria)
  
    
    return(
      <div>
          <div className="canales-list">
          {
            canalesFiltrados.length>0
            ? canalesFiltrados?.map((e, i)=>(
              <Canal key={i} canal={e}></Canal>
            )
             
            )
            :<></>
          }
          </div>
      </div>
    )
}