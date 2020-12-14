mutation {
   createUser(name:"jhon", email:"jhon@gmail.com", phone:"057555555", country:"Turkey")
}

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
  getUserConsumedRewards(id: 2){
    rid
    name
    amount
    expiry_date
  }
}