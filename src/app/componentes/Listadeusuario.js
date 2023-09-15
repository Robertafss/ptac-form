import { suspense } from "react";

export default async function Listadeusuario({users}){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return(
        <div>
            {users?.map((user, index) => 
            <p key={index}>
                {user.name}
            </p>
            )}
        </div>
    );
};