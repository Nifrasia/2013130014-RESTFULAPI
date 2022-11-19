
const users = [
    {name: "Pronkamol",
     nickName: "Toung",
     hobby: "Reading",
     address: {
        province: "Bangkok",
        postcode: 10250
    }},

    {name: "Pronlada",
     nickName: "Khawpun",
     hobby: "Listening to musics",
     address: {
        province: "Bangkok",
        postcode: 10252
    }},

    {name: "Pronphimol",
     nickName: "Lilly",
     hobby: "Gaming",
     address: {
        province: "Bangkok",
        postcode: 10253
    }}
]

for (const u of users){
    console.log(`${"\"My nickname is"} ${u.nickName} ${", My hobby is"} ${u.hobby}
    ${"and my postcode is"} ${u.address.postcode} ${"\""}`)
}