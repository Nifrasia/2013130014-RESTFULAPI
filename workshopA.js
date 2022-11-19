function myInfo ({ nickName,hobby,address:{postcode} }) {
    return `${"\"My nickname is"} ${nickName} ${", My hobby is"} ${hobby}
    ${"and my postcode is"} ${postcode} ${"\""}`
}

const user = {
    name: "Pronkamol",
    nickName: "Toung",
    hobby: "Reading",
    address: {
        province: "Bangkok",
        postcode: 10250
    }
}

console.log(myInfo(user))