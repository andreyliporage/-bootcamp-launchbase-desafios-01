const user = {
    name: 'Diego',
    company: {
        name: 'Rocketseat',
        color: 'Roxo',
        focus: 'Programação'
    },
    adress: {
        street: 'Rua Guilherme Gembala',
        number: 260
    },
}

console.log(`A empresa ${user.company.name} está localizada em ${user.adress.street}, ${user.adress.number}`)