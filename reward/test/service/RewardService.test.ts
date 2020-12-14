// import { createUser, getAllUsers, getUserConsumedRewards } from "../../src/service/UserService";
import * as RequestService from '../../src/service/RequestService';
import * as RewardRepository from '../../src/repository/RewardRepository';
import * as TestConstant  from '../testConstant';
import { assignReward, checkExpiryDate, createReward, getAllRewards, getRewardedUsers, getRewardsByUserId } from '../../src/service/RewardService';

describe('RewardService Test Suite', () => {
  beforeEach(() => {
    // jest.clearAllMocks();
    // jest.resetAllMocks();
  });

  //################# getRewardedUsers(id: any) ############################################################
  test('In normal process for getRewardedUsers', async () => {
    // GIVEN
    const getRewardedUsersQuerySPY = jest.spyOn(RewardRepository, 'getRewardedUsersQuery').mockResolvedValue(TestConstant.uidListMock);
    const getAllUsersSPY = jest.spyOn(RequestService, 'getAllUsers').mockResolvedValue(TestConstant.allUsersMock);
    // WHEN
    const response = await getRewardedUsers("2");
    // THEN
    expect(getRewardedUsersQuerySPY).toBeCalled();
    expect(getAllUsersSPY).toBeCalled();
    expect(response).toStrictEqual(TestConstant.rewardedUserListResponseMock);
  });

  //################# getAllRewards() ############################################################
  test('In normal process for getAllRewards', async () => {
    // GIVEN
    const getAllRewardsQuerySPY = jest.spyOn(RewardRepository, 'getAllRewardsQuery').mockResolvedValue(TestConstant.allRewardsMock);
    // WHEN
    const response = await getAllRewards();
    // THEN
    expect(getAllRewardsQuerySPY).toBeCalled();
    expect(response).toBe(TestConstant.allRewardsMock);
  });

  //################# getRewardsByUserId(uid) ############################################################
  test('In normal process for getRewardsByUserId', async () => {
    // GIVEN
    const getRewardsByUserIdQuerySPY = jest.spyOn(RewardRepository, 'getRewardsByUserIdQuery').mockResolvedValue(TestConstant.getRewardsByUserIdMock);
    // WHEN
    const response = await getRewardsByUserId("2");
    // THEN
    expect(getRewardsByUserIdQuerySPY).toBeCalled();
    expect(response).toBe(TestConstant.getRewardsByUserIdMock);
  });

  //################# createReward(body: UserEntity) ############################################################
  test('In normal process for createReward', async () => {
    // GIVEN
    const createRewardQuerySPY = jest.spyOn(RewardRepository, 'createRewardQuery').mockResolvedValue(true);
    // WHEN
    const response = await createReward(TestConstant.rewardMock);
    // THEN
    expect(createRewardQuerySPY).toBeCalled();
    expect(response).toBe('Created');
  });

  test('Should be return "Not Created", If create reward request fail', async () => {
    // GIVEN
    const createRewardQuerySPY = jest.spyOn(RewardRepository, 'createRewardQuery').mockResolvedValue(false);
    // WHEN
    const response = await createReward(TestConstant.rewardMock);
    // THEN
    expect(createRewardQuerySPY).toBeCalled();
    expect(response).toBe('Not Created');
  });

  test('Should be return "Wrong parameters", If body is invalid', async () => {
    // GIVEN
    const createRewardQuerySPY = jest.spyOn(RewardRepository, 'createRewardQuery').mockResolvedValue(true);
    // WHEN
    const response = await createReward(TestConstant.invalidRewardMock);
    // THEN
    expect(createRewardQuerySPY).not.toBeCalled();
    expect(response).toBe('Wrong parameters');
  });

  //################# assignReward(body: RewardedUserEntity) ############################################################
  test('In normal process for assignReward', async () => {
    // GIVEN
    const getRewardSPY = jest.spyOn(RewardRepository, 'getReward').mockResolvedValue(TestConstant.getRewardMock);
    const assignRewardQuerySPY = jest.spyOn(RewardRepository, 'assignRewardQuery').mockResolvedValue(true);
    // WHEN
    const response = await assignReward(TestConstant.rewardedUserMock);
    // THEN
    expect(getRewardSPY).toBeCalled();
    expect(assignRewardQuerySPY).toBeCalled();
    expect(response).toBe('Created');
  });

  //################# checkExpiryDate(ExpiryDate: any) ############################################################
  test('Should return true", If Expiry Date is VALID', async () => {
    // WHEN
    const response = await checkExpiryDate("10/1/2050");
    // THEN
    expect(response).toBe(true);
  });

  test('Should return true", If Expiry Date is INVALID', async () => {
    // WHEN
    const response = await checkExpiryDate("10/1/2020");
    // THEN
    expect(response).toBe(false);
  });
});
