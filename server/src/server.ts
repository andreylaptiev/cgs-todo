import express from "express";
import cors from "cors";

import connectDB from "../config/database";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import AppRouter from "./routes";
import axios from "axios";
import errorHandler from "./middleware/errorHandler";

const app = express();
const router = new AppRouter(app);
// Connect to MongoDB
connectDB();

app.use(cors());

// Express configuration
app.set("port", process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.init();

// Error handling middleware
app.use(errorHandler);

// TODO: Move that to model GraphQL
const schema = buildSchema(`
  type Query {
    todos: String
  }
`);

// TODO: Create graphQL controller
const rootValue = {
  todos: async () => {
    // TODO: Create http service for that
    const todos = await axios.get("http://localhost:5000/api/todos");
    return todos.data;
  },
};


// TODO: Move that to router init function ONLY AFTER MAIN PART OF APP
app.use("/graphql", graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

const port = app.get("port");
const server = app.listen(port, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server started on port ${port}`)
);

export default server;
