const {MongoClient} = require("mongodb");
const mongo = process.env.host;
const uri = `mongodb+srv://${mongo}/test`;
const client = new MongoClient(uri);
const dbName = "RetroGames";
const db = client.db(dbName);
const users = db.collection("users");
const games = db.collection("games");
const offers = db.collection("offers");

const defaultUsers = [
    {
        userID: 1,
        name: "Joseph Shull",
        email: "JoeTheStud@gmail.com",
        address: {
            state: "Utah",
            city: "Salt Lake City",
            zipcode: "11111"
        }
    },
    {
        userID: 2,
        name: "Jesus",
        email: "Jesus@gmail.com",
        address: {
            state: "Utah",
            city: "Salt Lake City",
            zipcode: "11111"
        }
    },
];
const defaultOffer = {
    offerID: 1,
    trade: {
        offeredTrade: ["RetroGames/games/gameID/1"],
        expectedTrade: ["RetroGame/games/gameID/2"]
    },
    recipient: ["Jesus"],
    date: "1/25/2023",
    status: "pending"
};
const defaultGames = [
    {
        gameID: 1,
        gameName: "Fortnite",
        publisher: "Epic Games",
        releaseDate: "01/01/2017",
        deviceCompatability: "All platforms",
        condition: "good",
        preownedHistory: [
            "Jesus", "Eric"
        ]
    },
    {
        gameID: 2,
        gameName: "GTAV",
        publisher: "RockStar Games",
        releaseDate: "03/02/2013",
        deviceCompatability: "All platforms",
        condition: "Mint",
        preownedHistory: ["Eric"]
    },
];

async function main(){
    try{
        await client.connect();
        //Only populates collection if collection is empty
        const userData = await users.insertMany(defaultUsers);
        const gameData = await games.insertMany(defaultGames);
        const offerData = await offers.insertOne(defaultOffer);


        if(userData != null & gameData != null & offerData != null){
            console.log("RetroGames database and collections have been populated");
        }
        else { console.log("Already Populated");}

    }catch(exception){ console.error(exception); }
    finally{ await client.close();}
}

//Gets all user data
const readUsers = async() => {
    const result = users.find({});
    const data = await result.toArray();
    return data;
}

//Creates an user object in DB
const createUser = async(newUser) =>{
    const action = await users.insertOne(newUser);
    console.log(`Created User in database`);
    client.close();
}

//Updates an user based on userID
const updateUser = async(userID, updateData ) =>{
    const action = await users.updateOne({
        userID: userID}, {$set: newData}
    );
    console.log(`updated User in database`);
    client.close();
}

//Gets all game data
const readGames = async() => {
    const result = games.find({});
    const data = await result.toArray();
    return data;
}

//Creates an game object in DB
const createGame = async(newGame) =>{
    const action = await games.insertOne(newGame);
    console.log(`Created game in database`);
    client.close();
}

//Updates a game based on gameID
const updateGame = async(gameID, newData) =>{
    const action = await games.updateOne({
        gameID: gameID}, {$set: newData}
    );
    console.log(`updated game in database`);
    client.close();
}

//Deletes game from DB based on gameID
const deleteGame = async(ID) =>{
    await client.connect();
    const action = await games.deleteOne({gameID:ID});
    console.log(`deleted game in database`);
    client.close();
}

//Gets all offer data
const readOffers = async() => {
    const result = offers.find({});
    const data = await result.toArray();
    return data
}

//Creates an offer object in DB
const createOffer = async(newOffer) =>{
    const action = await offers.insertOne(newUser);
    console.log(`Created offer in database`);
    client.close();
}

//Updates an offer based on offerID
const updateOffer = async(offerID, newData) =>{
    const action = await offers.updateOne({
        offerID: offerID}, {$set: newData}
    );
    console.log(`updated offer in database`);
    client.close();
}

//Deletes offer from DB based on offerID
const deleteOffer = async(offerID) =>{
    await client.connect();
    const action = await offers.deleteOne({offerID: offerID});
    console.log(`deleted offer in database`);
    client.close();
}

//Connects to MongoDB and populates database with default data set
main();

module.exports = {
    readUsers,
    createUser,
    updateUser,
    readGames,
    createGame,
    updateGame,
    deleteGame,
    readOffers,
    createOffer,
    updateOffer,
    deleteOffer,
}