const user = [
    {nickname: "Lin", hobby: "sleep", postcode: 10250},
    {nickname: "Lan", hobby: "eat", postcode: 10360},
    {nickname: "Lun", hobby: "fly", postcode: 10470},
]

for (const u of user){
    let show = `\"My nickname is ${u.nickname}, My hobby is ${u.hobby}
and my postcode is ${u.postcode}\"`
    console.log(show)
}
