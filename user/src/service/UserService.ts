import { UserEntity } from "../db/entity/UserEntity";
import { createUserQuery, getAllUsersQuery, getUserRewardsQuery } from "../repository/UserRepository";

export async function getUserRewards(id: any){
    console.log(`getUserRewards ID: ${id}`);
    const response = await getUserRewardsQuery(id);
    return response;
}

export async function getAllUsers(){
    console.log("Loading users from the database...");
    const response = await getAllUsersQuery();
    response ? console.log("Loaded users: ", response) : console.log("Database Error");
    return response;
}

export async function createUser(body: UserEntity) {
    if(body.name && body.email && body.phone && body.country){
        console.log("Inserting a new user into the database...");
        const user = new UserEntity(body.name, body.email, body.phone, body.country);
        console.log(`User info ${JSON.stringify(user)}`);
        const response = await createUserQuery(user);
        response ? console.log("Created Successfully") : console.log("Database Error");
        return response ? 'Created' : 'Not Created';
    }
    return 'Wrong parameters';
}