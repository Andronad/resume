import express from "express";
import dotenv from "dotenv";
import todosRouter from "./routes/todos.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT ?? 3001;
const app = express();

//мидлвейр для обработки json в body
app.use(express.json());

app.use(cors());

//мидлвейр для отправки форм и получения бади
app.use(express.urlencoded({ extended: false }));

//Обычные запросы(любой метод)
app.get("/", (req, res) => {
    res.json({
        body: "hello",
        head: "head",
    });
});

app.use("/todos", todosRouter);

app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}...`);
});
