const promiseOne = new Promise((resolve, reject) => {
    // do an async task
    // db calls, cryptography, network calls
  setTimeout(() => {
    // console.log("promise one resolved");
    resolve()
    // resolve("Promise One Resolved");
  }, 1000);
}
);

promiseOne.then((result) => {
//   console.log("promise consumed");
}
).catch((error) => {
//   console.log(error);
}
);


//////
new Promise((resolve, reject) => {
  // do an async task
  // db calls, cryptography, network calls
  setTimeout(() => {
    // console.log("promise two resolved");
    resolve()
    // resolve("Promise Two Resolved");
  }, 2000);
}
).then((result) => {
//   console.log("promise two consumed");
}
).catch((error) => {
//   console.log(error);
}
);



///////


const promiseThree = new Promise((resolve, reject) => {

  setTimeout(() => {
    // resolve({username: "John Doe", email:"chai@example.com"});
  }, 1000);
})

promiseThree
  .then((user) => {
    // console.log("promise three resolved");
    // console.log(user);
  })




  //////

  const promiseFour = new Promise((resolve, reject) => {
    
    setTimeout(() => {
     let error = false;
     if(!error){
        resolve({username:'kishan', password:'1234'});
     }
     else{
        reject("Error: Promise Four Rejected");
     }
    }, 1000);
  }
  );
  promiseFour
    .then((user) => {
      console.log(user);
      return user.username;
    })
    .then((username) => {
      console.log(username);
    }
    )
    .catch((error) => {
      console.log(error);
    }
    )
    .finally(() => {
      console.log("Promise Four Completed");
    }
    );



///////////
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "1234" });
    } else {
      reject("Error: Promise Five Rejected");
    }
  }, 1000);
}
);
async function consumePromiseFive() {
  try {
    const user = await promiseFive;
    console.log(user);
    // return user.username;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Promise Five Completed");
  }
}
consumePromiseFive();



/////



// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         // return data;
//         console.log(data);
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });
