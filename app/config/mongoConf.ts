import { connect } from "mongoose";

async function connectToMongo() {
    try {
        await connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export {
    connectToMongo
} 
