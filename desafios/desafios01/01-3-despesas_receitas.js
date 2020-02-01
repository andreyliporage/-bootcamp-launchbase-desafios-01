const users = [
    {
        name: 'Salvio',
        revenue: [115.3, 48.7, 98.3, 14.5],
        expense: [85.3, 13.5, 19.9]
    },
    {
        name: 'Márcio',
        revenue: [24.6, 214.3, 45.3],
        expense: [185.3, 12.1, 120.0]
    },
    {
        name: 'Lucia',
        revenue: [9.8, 120.3, 340.2, 45.3],
        expense: [450.2, 29.9]
    }
]

function calculateBalance(revenue, expense) {
    const sumRevenue = sumNumbers(revenue)
    const sumExpense = sumNumbers(expense)

    return sumRevenue - sumExpense
}

function sumNumbers(numbers) {
    let sum = 0

    for (let number of numbers){
        sum += number
    }
    return sum
}

for (let user of users) {
    const balance = calculateBalance(user.revenue, user.expense)

    if (balance > 0) {
        console.log(`${user.name} possui saldo POSITIVO de ${balance.toFixed(2)}`)
    } else {
        console.log(`${user.name} possui saldo NEGATIVO de ${balance.toFixed(2)}`)
    }
}