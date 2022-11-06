import db from "../ext/db.js";

const todoScheme = new db.Schema({
    title: String,
    done: Boolean,
});

const ToDo = db.model("todo", todoScheme);

export default ToDo;
