const users = [
    {name: 'Carlos', technologies: ['HTMl', 'CSS']},
    {name: 'Jasmine', technologies: ['JavaScript', 'CSS']},
    {name: 'Tuane', technologies: ['HTMl', 'Node.js']}
]

for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} trabalha com ${users[i].technologies.join(', ')}`)
}