query{
  getAllUsers{
    uid
    name
    email
    phone
    country
    }
}


query{
  getUser(id: 1){
    name
    }
}

query{
  createUser(name: "asd", email: "em", phone: "phone", country: "coun"){
    name
    }
}

mutation {
   createUser(name:"col-2",email:"Tim",phone:"George",country:"George")
}