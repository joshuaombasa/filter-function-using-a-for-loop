const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

function getPetOwners(array, callback) {
    array.filter((person) => {
        return person.hasPet
    })
}

console.log(getPetOwners(people, 1))