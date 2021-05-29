
class User
{
    constructor(email, passwordHash) {
        this.email = email;
        this.passwordHash = passwordHash;
    }

    static createWithPassword(email, password) {

    }

    verifyPassword(password) {

    }

}

export { User };