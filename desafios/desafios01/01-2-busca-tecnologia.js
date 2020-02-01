const users = [
    {name: 'Carlos', technologies: ['HTMl', 'CSS']},
    {name: 'Jasmine', technologies: ['JavaScript', 'CSS']},
    {name: 'Tuane', technologies: ['HTMl', 'Node.js']}
]

function checkCSS(user){
    for (let technology of user.technologies) {
        if (technology == 'CSS')
        return true
    }
    return false
}

for (let i = 0; i < users.length; i++) {
    const useCSS = checkCSS(users[i])

    if (useCSS) {
        console.log(`O usuário ${users[i].name} trabalha com CSS.`)
    }
}