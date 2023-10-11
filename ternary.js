let firstName = "Benson"
// A basic ternary
console.log((firstName) ? // if firstName is truthy
    firstName : // console log firstName
    'who are you?' // Otherwise ask 'who are you?'

)
// using a templated literal
console.log(`Hello${
    (firstName) ? // If firstName is truthy
', ' + firstName : // add their name
'' // otherwise, don't add anything
}`)


function showData(data){
    console.log((data) ? // If we  have data
    data : // console log the data
    'loading...' // Otherwise console log loading
    )
    
}

let ourData = undefined; // Our page loads
showData(ourData)

ourData = ['apple', 'Oranges'] // Our page finishes loading the data
showData(ourData)
