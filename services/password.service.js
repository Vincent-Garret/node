async function verifyPassword(password){
    if(password.length > 4){
        return true
    }
    else  {
        return false
    }
}

module.exports = { verifyPassword }