export const rewardsIdMock = { getRewardsByUserId: [ { id: '3', uid: '2', rid: '1' } ] }

export const allRewardsMock = {
    getAllRewards: [
      {
        rid: '1',
        name: 'reward1',
        amount: '100',
        expiry_date: '25/12/2020'
      },
      {
        rid: '2',
        name: 'reward2',
        amount: '200',
        expiry_date: '10/12/2020'
      },
      {
        rid: '3',
        name: 'reward3',
        amount: '500',
        expiry_date: '10/12/2020'
      },
      {
        rid: '4',
        name: 'reward4',
        amount: '1000',
        expiry_date: '10/12/2021'
      },
      {
        rid: '5',
        name: 'reward5',
        amount: '1500',
        expiry_date: '15/5/2021'
      },
      {
        rid: '6',
        name: 'reward10',
        amount: '10000',
        expiry_date: '1/1/2021'
      }
    ]
}

export const getUserConsumedRewardsResponseMock = [{
      rid: '1',
      name: 'reward1',
      amount: '100',
      expiry_date: '25/12/2020'
    }
]

export const allUsersMock =  [
    {
      name: 'ozan',
      email: 'ozanozfirat@gmail.com',
      phone: '0536724XXX',
      country: 'Turkey',
      uid: 1
    },
    {
      name: 'ali',
      email: 'ali@gmail.com',
      phone: '0576xxxxxx',
      country: 'Turkey',
      uid: 2
    },
    {
      name: 'can',
      email: 'can@gmail.com',
      phone: '053333333',
      country: 'Turkey',
      uid: 3
    },
    {
      name: 'jhon',
      email: 'jhon@gmail.com',
      phone: '057555555',
      country: 'Turkey',
      uid: 4
    },
    {
      name: 'wawa',
      email: 'wawa@gmail.com',
      phone: '05755115555',
      country: 'Turkey',
      uid: 5
    },
]

export const userMock: any = {
    uid: 1,
    name: "ozan",
    email: "ozan email" ,
    phone: "ozan phone",
    country: "ozan country"
}

export const invalidUserMock: any = {
    uid: 1,
    email: "ozan email" ,
    phone: "ozan phone",
    country: "ozan country"
}