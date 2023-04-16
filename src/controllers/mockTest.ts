import express from "express";

import {deleteMockTestByID, getMockTests} from "../db/mockTest";

export const getAllMockTests = async (
    req: express.Request,
    res: express.Response
)=>{
    try {
        const mockTests = await getMockTests();
        return res.status(200).json(mockTests);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteMockTest = async (
    req: express.Request,
    res: express.Response
)=>{
    const {id} = req.params;
    try {
        const deletedMockTest = await deleteMockTestByID(id);
        return res.status(200).json(deletedMockTest);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}