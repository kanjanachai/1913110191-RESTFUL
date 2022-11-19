const user = {
    name: "Kanjanachai",
    nickname: "Lin",
    hobby: "sleep",
    address: "phatthanakan",
    province:{
        province: "Bangkok",
        postcode: 10250
    }
}
 function show ({nickname, hobby, province}){
    return `\"My nickname is ${nickname}, My hobby is ${hobby}
and my postcode is ${province.postcode}\"`
 }

 console.log(show(user))