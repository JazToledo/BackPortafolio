import app from "./app.js";
import connectDB from "./db.js";
const port = process.env.PORT;

connectDB();
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
