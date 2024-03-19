import { MongoClient } from "mongodb";

const dbUrl = process.env.DB_URL;

const dbName = process.env.DB_NAME;

function createDbClient(url: string, name: string): MongoClient {
    const client = new MongoClient(url);

    return client;
}

function findOne<T>(col: string, filter: object, opt?: object): T {
    // TODO
}
