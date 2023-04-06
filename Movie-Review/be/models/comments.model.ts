import mongoose, { Date, Schema } from "mongoose";
interface IComment {
  name: string;
  email: string;
  movie_id: { type: mongoose.Schema.Types.ObjectId };
  text: string;
  date: Date;
}
const commentSchema: Schema = new Schema({});
const commentModel = mongoose.model<IComment>("Comments", commentSchema);

export default commentModel;
