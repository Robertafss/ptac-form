'use server'

const listadenomes = [
    {
        name: 'roberta',
        email: 'roberta@gmail.com',
        password: '123',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5'
    },
    {
        name: 'levi',
        email: 'levi@gmail.com',
        password: '456',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5'
    },
    {
        name: 'rafa',
        email: 'rafa@gmail.com',
        password: '890',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5'
    }
] 



const getUserAuthenticated = (userlogin) => {
    let userAuth = {}
    listadenomes.map ((user)=> {
        if (user.email ===  userlogin.email && user.password === userlogin.password){
            userAuth = user 
        }
        
    })
    return userAuth
}

const getUsers = () =>{
        return listadenomes
}
export { getUsers, getUserAuthenticated };