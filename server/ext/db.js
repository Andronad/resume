import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/resume", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose;

export default db;
