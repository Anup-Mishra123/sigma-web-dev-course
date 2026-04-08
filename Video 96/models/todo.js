import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    title: string,
    desc: string,
    isDone: Boolean,
});

export const Todo = mongoose.model("Todo", TodoSchema);