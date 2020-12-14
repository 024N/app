import { createUser, getAllUsers, getUserConsumedRewards } from "../../src/service/UserService";
import * as RequestService from '../../src/service/RequestService';
import * as UserRepository from '../../src/repository/UserRepository';
import * as TestConstant  from '../testConstant';

describe('UserService Test Suite', () => {
  beforeEach(() => {
    // jest.clearAllMocks();
    // jest.resetAllMocks();
  });

  //################# getUserConsumedRewards(id: any) ############################################################
  test('In normal process for getUserConsumedRewards', async () => {
    // GIVEN
    const getRewarsIdSPY = jest.spyOn(RequestService, 'getRewarsId').mockResolvedValue(TestConstant.rewardsIdMock);
    const getAllRewardsSPY = jest.spyOn(RequestService, 'getAllRewards').mockResolvedValue(TestConstant.allRewardsMock);
    // WHEN
    const response = await getUserConsumedRewards("2");
    // THEN
    expect(getRewarsIdSPY).toBeCalled();
    expect(getAllRewardsSPY).toBeCalled();
    expect(response).toStrictEqual(TestConstant.getUserConsumedRewardsResponseMock);
  });

  //################# getAllUsers() ############################################################
  test('In normal process for getAllUsers', async () => {
    // GIVEN
    const getAllUsersQuerySPY = jest.spyOn(UserRepository, 'getAllUsersQuery').mockResolvedValue(TestConstant.allUsersMock);
    // WHEN
    const response = await getAllUsers();
    // THEN
    expect(getAllUsersQuerySPY).toBeCalled();
    expect(response).toBe(TestConstant.allUsersMock);
  });

  //################# createUser(body: UserEntity) ############################################################
  test('In normal process for createUser', async () => {
    // GIVEN
    const createUserQuerySPY = jest.spyOn(UserRepository, 'createUserQuery').mockResolvedValue(true);
    // WHEN
    const response = await createUser(TestConstant.userMock);
    // THEN
    expect(createUserQuerySPY).toBeCalled();
    expect(response).toBe('Created');
  });

  test('Should be return "Not Created", If create user request fail', async () => {
    // GIVEN
    const createUserQuerySPY = jest.spyOn(UserRepository, 'createUserQuery').mockResolvedValue(false);
    // WHEN
    const response = await createUser(TestConstant.userMock);
    // THEN
    expect(createUserQuerySPY).toBeCalled();
    expect(response).toBe('Not Created');
  });

  test('Should be return "Wrong parameters", If body is invalid', async () => {
    // GIVEN
    const createUserQuerySPY = jest.spyOn(UserRepository, 'createUserQuery').mockResolvedValue(true);
    // WHEN
    const response = await createUser(TestConstant.invalidUserMock);
    // THEN
    expect(createUserQuerySPY).not.toBeCalled();
    expect(response).toBe('Wrong parameters');
  });
});
