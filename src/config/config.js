import dotenv from 'dotenv';

dotenv.config();

export const config = {
    mongoUrl: process.env.MONGO_URL,
    serverPort: process.env.PORT || 8080,
    jwtSecret: process.env.JWT_SECRET,
    mapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    floraKey: process.env.FLORA_KEY,
}