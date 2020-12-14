# npm i

# npm start 

# USER Query
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

# REWARD Query
mutation {
  createReward(name: "reward1", amount: "100", expiry_date: "25/12/2020")
}

mutation {
  assignReward(uid: "1", rid: "1")
}

query{
  getAllRewards{
    rid
    name
    amount
    expiry_date
    }
}

query{
  getRewardedUsers(id: 2){
    uid
    name
    email
    phone
    country
  }
}
