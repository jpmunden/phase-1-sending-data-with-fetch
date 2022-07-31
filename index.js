// Add your code here
/*
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };

const configurationObject = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};

fetch('http://localhost:3000/dogs/', configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    })
    .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    });
    
    .catch(error => {
        if (error.response) {
            console.log('Unauthorized Access')
*/

/*
function submitData(firstName, email) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json",
        },
        body:JSON.stringify({
            "name": firstName,
            "email": email
        })
    })
    .then(res => res.json())
    .then(console.log(firstName, email))   
};
*/




function submitData(firstName, email) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'name': firstName,
            'email': email
         }),
     })
        .then(res => {
            return res.json()})
        .then(getID)
        .catch(errorMessage)
};

function getID(object) {
    document.body.innerHTML = object.id
}

function errorMessage() {
    document.body.innerHTML = "Unauthorized Access"
}