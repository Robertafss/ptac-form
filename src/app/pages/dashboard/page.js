import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/componentes/Listadeusuario";

export default async function Dashboard() {

 const users = getUsers()
  return (
<div> 
    <Suspense fallback={<p>Carregando página...</p>}>
    <ListUsers users={users}/>
    <button><a href="/pages/alterarusuario">Alterar</a></button>
    <button><a href="/pages/registrarform">Registrar</a></button>
</Suspense>
            
</div>
    );
};