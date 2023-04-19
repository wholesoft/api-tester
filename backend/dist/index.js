import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("API TESTER");
});
app.listen(port, () => {
    console.log(`now listening on port ${port}`);
});
//# sourceMappingURL=index.js.map