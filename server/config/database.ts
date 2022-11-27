import config from "config";
import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string = config.get("mongoURI");
    await connect(mongoURI);
    // tslint:disable-next-line:no-console
    console.log("MongoDB Connected...");
  } catch (err) {
    const message = (err instanceof Error) ? err.message : String(err);
    // tslint:disable-next-line:no-console
    console.error(message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
