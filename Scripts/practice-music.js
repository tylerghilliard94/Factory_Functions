let jumpStopRecordsArray = []
let chattenRecordsArray = []
let polarRecordsArray = []



const funkMaker = (name, age) => {
    return{
        "name": name,
        "genre": "Funk",
        "age": age,
        "recordLabel": "JumpStop Records"
    }
}

const rapMaker = (name, age) => {
    return{
        "name": name,
        "genre": "Rap",
        "age": age,
        "recordLabel": "JunpStop Records"
    }
}
const countryMaker = (name, age) => {
    return{
        "name": name,
        "genre": "Country",
        "age": age,
        "recordLabel": "Chatten Records"
    }
}
const bluegrassMaker = (name, age) => {
    return{
        "name": name,
        "genre": "Bluegrass",
        "age": age,
        "recordLabel": "Chatten Records"
    }
}
const popMaker = (name, age) => {
    return{
        "name": name,
        "genre": "Pop",
        "age": age,
        "recordLabel": "Polar Records"
    }
}

chattenRecordsArray.push(countryMaker("Bruce Atikins", 23))
polarRecordsArray.push(popMaker("Jensen Brown", 20))
jumpStopRecordsArray.push(funkMaker("Dre Funkz", 25))
jumpStopRecordsArray.push(rapMaker("Dusta Grimes", 21))
chattenRecordsArray.push(bluegrassMaker("Bartholomew Danielson", 23))
chattenRecordsArray.push(countryMaker("Avilee Dallas", 19))
polarRecordsArray.push(popMaker("Austin Kinkaid", 22))
jumpStopRecordsArray.push(rapMaker("Loyonce Branis", 27))
console.log(jumpStopRecordsArray, chattenRecordsArray, polarRecordsArray)