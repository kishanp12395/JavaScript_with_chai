// Immediately Invoked Function Expression

(function chai(){
    console.log(`DB CONNECTED`);
})();

// must use semi-colon to stop to invoke function
// Avoids Global Scope Pollution: Variables inside an IIFE are not accessible outside.

// Encapsulation: Creates a private scope for variables.

// Execution Context: Runs immediately and doesn’t interfere with other scripts.

((name) => {
    console.log(`db connected 2 ${name}`);
}) ("kishan");
