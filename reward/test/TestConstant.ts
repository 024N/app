export const uidListMock: any = [
  { uid: '1', rid: '1', id: 1 },
  { uid: '2', rid: '1', id: 3 }
]

export const allUsersMock = {
  getAllUsers: [
    {
      uid: '1',
      name: 'ozan',
      email: 'ozanozfirat@gmail.com',
      phone: '0536724XXX',
      country: 'Turkey'
    },
    {
      uid: '2',
      name: 'ali',
      email: 'ali@gmail.com',
      phone: '0576xxxxxx',
      country: 'Turkey'
    },
    {
      uid: '3',
      name: 'can',
      email: 'can@gmail.com',
      phone: '053333333',
      country: 'Turkey'
    },
    {
      uid: '4',
      name: 'jhon',
      email: 'jhon@gmail.com',
      phone: '057555555',
      country: 'Turkey'
    },
    {
      uid: '5',
      name: 'wawa',
      email: 'wawa@gmail.com',
      phone: '05755115555',
      country: 'Turkey'
    },
    {
      uid: '6',
      name: 'aaa',
      email: 'aaa@gmail.com',
      phone: '057555555',
      country: 'Turkey'
    },
    {
      uid: '7',
      name: 'jhon',
      email: 'jhon@gmail.com',
      phone: '057555555',
      country: 'Turkey'
    }
  ]
}

export const rewardedUserListResponseMock = [
  {
    uid: '1',
    name: 'ozan',
    email: 'ozanozfirat@gmail.com',
    phone: '0536724XXX',
    country: 'Turkey'
  },
  {
    uid: '2',
    name: 'ali',
    email: 'ali@gmail.com',
    phone: '0576xxxxxx',
    country: 'Turkey'
  }
]

export const allRewardsMock =  [
  {
    name: 'reward1',
    amount: '100',
    expiry_date: '25/12/2020',
    rid: 1
  },
  {
    name: 'reward2',
    amount: '200',
    expiry_date: '10/12/2020',
    rid: 2
  },
  {
    name: 'reward3',
    amount: '500',
    expiry_date: '10/12/2020',
    rid: 3
  },
  {
    name: 'reward4',
    amount: '1000',
    expiry_date: '10/12/2021',
    rid: 4
  },
  {
    name: 'reward5',
    amount: '1500',
    expiry_date: '15/5/2021',
    rid: 5
  },
  {
    name: 'reward10',
    amount: '10000',
    expiry_date: '1/1/2021',
    rid: 6
  }
]

export const getRewardsByUserIdMock: any = [
  { uid: '1', rid: '1', id: 1 },
  { uid: '1', rid: '4', id: 2 },
  { uid: '1', rid: '6', id: 4 }
]

export const rewardMock: any = {
  rid: 1,
  name: "reward 1",
  amount: "100" ,
  expiry_date: "15/12/2030",
}

export const invalidRewardMock: any = {
  rid: 1,
  expiry_date: "15/12/2030",
}

export const getRewardMock: any = [
  {
    name: 'reward1',
    amount: '100',
    expiry_date: '25/12/2050',
    rid: 1
  }
]

export const getExpiredRewardMock: any = [
  {
    name: 'reward1',
    amount: '100',
    expiry_date: '25/12/2010',
    rid: 1
  }
]

export const rewardedUserMock: any = {
  id: 4,
  rid: "1",
  uid: "1"
}
