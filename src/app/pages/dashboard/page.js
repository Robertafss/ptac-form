import { getUsers } from "@/app/functions/handlerAcessAPI";
import '../../css/estilo.css';



export default async function Dashboard() {
   const listadenomes = getUsers() 
    return (
        <div>
            <h1>Dashboardddd</h1>
            {listadenomes.map((u)=>
             <p>{u.name}</p>
            )}
        </div>
    );
};