const programmer = {
    name: 'Andrey',
    age: 24,
    technolgies: [
        {name: 'JavaScript', speciality: 'Web'},
        {name: 'JavaScript', speciality: 'Desktop'},
    ]
}

console.log(`O usuário ${programmer.name} tem ${programmer.age} anos e usa a tecnologia ${programmer.technolgies[0].name} com especialidade em ${programmer.technolgies[0].speciality}`)