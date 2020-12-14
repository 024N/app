
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
