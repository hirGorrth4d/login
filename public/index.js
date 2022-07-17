const bienvenido = document.querySelector('#bienvenido')
const btnLogOut = document.querySelector('#btnlogout')

fetch('/usuario').then((res) => res.text()).then((user) => (bienvenido.innerHTML = 'Bienvenido ' + user))
const loginBtn = document.querySelector("btn")



const btn = document.createElement('button')
btn.classList.add('btn', 'btn-danger')
btn.innerHTML = 'Cerrar sesion'
btn.addEventListener('click', async () => {
    const goodbye = await document.createElement('div')
    const html = goodbye
    document.querySelector('body').innerHTML = html

})

btnLogOut.appendChild(btn)