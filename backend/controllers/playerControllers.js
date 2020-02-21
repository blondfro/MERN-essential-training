// controller are the functions that interact with the db when a request is made to the api
// the flow is the request sends to the api with route and the controller executes.

import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModels";

// create a new instance of the schema.
const Player = mongoose.model("Player", PlayerSchema);

// the POST
export const addNewPlayer = (req, res) => {
    let newPlayer = new Player(req.body);
    newPlayer.save((err, Player) => {
        if (err) {
            res.send(err)
        } res.json(Player);
    });
};

// GET all players
export const getPlayers = (req, res) => {
    Player.find({}, (err, Player) => {
        if (err) {
            res.send(err)
        } res.json(Player);
    });
};

// GET a player
export const getPlayerByID = (req, res) => {
    Player.findById(req.params.PlayerId, (err, Player) => {
        if (err) {
            res.send(err)
        } res.json(Player);
    });
};

// PUT a player
export const updatePlayer = (req, res) => {
    // we need to pass in the id, and requests body to get the current info.
    // we also want to pass in the {new: true} param so that we return the updated info.
    Player.findOneAndUpdate({_id: req.params.PlayerId}, req.body, {new: true}, (err, Player) => {
        if (err) {
            res.send(err)
        } res.json(Player);
    });
};



