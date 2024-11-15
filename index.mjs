import express from "express";
import cors from "cors";
import {Parser} from "json2csv"


const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.use(express.json());
app.use(cors());

app.post("/export-products", (req, res) => {
    const products = req.body.products

    if (!products || products.length === 0) {
        return res.status(400).json({ message: "No products selected" })
    }

    const fields = ["id", "name", "price"]
    const csvParser = new Parser({ fields })
    const csv = csvParser.parse(products)

    res.header("Content-Type", "text/csv")
    res.attachment("selected_products.csv")
    res.send(csv)
})

app.listen(PORT, () => {
    console.log("server is running");
});