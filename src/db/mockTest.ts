import mongoose from "mongoose";

const MockTestSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    questions: {type: mongoose.Schema.Types.ObjectId, ref: "Question"},
    answers: {type: mongoose.Schema.Types.ObjectId, ref: "Answer"},
    score: {type: Number, required: true},
    duration: {type: Number, required: true},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    updatedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    deletedAt: {type: Date, default: Date.now},
    deletedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});

export const MockTestModel = mongoose.model("MockTest", MockTestSchema);

export const getMockTests = () => MockTestModel.find();

export const getMockTestById = (id: string) => MockTestModel.findById(id).populate("questions").populate("answers").populate("createdBy").populate("updatedBy");

export const createMockTest = (values: Record<string, any>) => new MockTestModel(values).save().then((mockTest) => mockTest.toObject());

export const deleteMockTestByID = (id: string) => MockTestModel.findByIdAndDelete({_id: id});

export const updateMockTestById = (id: string, values: Record<string, any>) => MockTestModel.findByIdAndUpdate(id, values);



