class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }


    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
    get password(){
        // return this._password.toUpperCase();
        return `${this._password[0]}********`;
    }

    set password(value){
        this._password = value;
    }
}


const kishan = new User('kkp1@gmail.com', 'asdf1234');
console.log(kishan);
console.log(kishan.password);
console.log(kishan.email);