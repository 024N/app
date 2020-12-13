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
    id
  	uid
    rid
  }
}




mutation {
  createReward(name: "col-2", amount: "Tim", expiry_date: "George")
}

mutation {
  assignReward(uid: "col-2", rid: "Tim")
}
