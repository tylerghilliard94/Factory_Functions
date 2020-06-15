let BowWowKennels = []
const petFactory = (name, breed) => {
    return{
        "name": name,
        "breed": breed
    }
}

BowWowKennels.push(petFactory("Brenda", "Yorkie"))
BowWowKennels.push(petFactory("Rose", "Boston Terrier"))
BowWowKennels.push(petFactory("Audrey", "Yorkie"))
console.log(BowWowKennels)