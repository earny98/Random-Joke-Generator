// GET https://icanhazdadjoke.com/

const joke = document.querySelector('.joke');
const jokebtn = document.querySelector('.jokebtn');


// promise
// const generateJokes = () => {  
//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }

// fetch(' https://icanhazdadjoke.com', setHeader)
//     .then( (res) => res.json())
//     .then( (data) => {
//         joke.innerHTML = data.joke;
//     }).catch( (error) => {
//         console.log(error);
//     })
// }
// jokebtn.addEventListener('click', generateJokes );
// generateJokes()


// asynchronous and wait
const generateJokes = async () => {  
    try { 
        const setHeader = {
        headers: {
            Accept : "application/json"
        }
    }
const res = await   fetch(' https://icanhazdadjoke.com', setHeader);
const data = await res.json();
joke.innerHTML = data.joke;
}catch(err){
    console.log(`the error is ${err}`);
}
    
}

jokebtn.addEventListener('click', generateJokes );
generateJokes()