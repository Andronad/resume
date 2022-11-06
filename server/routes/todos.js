import express from "express";
import ToDo from "./../schemas/todo.js";

const todosRouter = express.Router();

todosRouter
    .route("/")
    .get(async (req, res) => {
        try {
            const todos = await ToDo.find();
            res.json(todos);
        } catch (e) {
            console.log(e);
            res.status(400).send("bad request");
        }
    })
    .post(async (req, res) => {
        try {
            const newTodo = new ToDo(req.body);
            newTodo.save();
            res.send("todo created");
        } catch (e) {
            console.log(e);
            res.status(400).send("bad request");
        }
    })
    .put(async (req, res) => {
        try {
            const todo = await ToDo.findById(req.body.id);
            await todo.updateOne({ done: !todo.done });
            const updatedTodo = await todo.save();
            res.json(updatedTodo);
        } catch (e) {
            console.log(e);
            res.status(400).send("bad request");
        }
    })
    .delete(async (req, res) => {
        try {
            await ToDo.findByIdAndDelete(req.body.id);
            res.send("Todo deleted");
        } catch (e) {
            res.status(400).send("bad request");
        }
    });

todosRouter.get("/:id", async (req, res) => {
    try {
        const todo = await ToDo.findById(req.params.id);
        res.json(todo);
    } catch (e) {
        res.status(400).send("bad request");
    }
});

export default todosRouter;
