// Add your code here
function submitData(userName, userEmail){
    const postData = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": `${userName}`,
            "email": `${userEmail}`
        })
    };
    return fetch("http://localhost:3000/users", postData)
    .then(res => res.json())
    .then(newUser => {
        document.body.append(`${newUser.id}`);
    })
    .catch(function (error) {
        document.body.append(`${error.message}`);
    })
}