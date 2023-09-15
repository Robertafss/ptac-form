import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const listadenomes = getUsers() 
    return (
        <div>
            <h1>Dashboard</h1>
            {listadenomes.map((u)=>
             <p>{u.name}</p>
            )}
        </div>
    );
};