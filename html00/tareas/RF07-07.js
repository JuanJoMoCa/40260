let user=document.getElementById("user")
let password=document.getElementById("password")

function datos(){
    
    console.log(password.value)
    console.log(user.value)
    return user, password
}

function busqueda(user, password){
    let formulario = document.getElementsByTagName("form")
    console.log(formulario)
    user.setAttribute("name", "q")
    password.setAttribute("name", "password")
    formulario[0].setAttribute("action", "https://www.google.com/search")
    formulario[0].submit()
}

export const mostrar =  () => {
    console.log("los parametros")
    datos()
    busqueda(user, password)

        

}