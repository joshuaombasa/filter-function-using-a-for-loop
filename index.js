const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

function getPetOwners(array, callback) {
      const petOwners = []
      for (let i=0; i<people.length; i++) {
        const item = callback()
      }
}

function sortPeople() {

}

console.log(getPetOwners(people, sortPeople))