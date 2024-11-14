import express from "express";
import cors from "cors";


const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log("server is running");
});