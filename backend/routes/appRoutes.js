import { addNewPlayer, getPlayers, getPlayerByID} from "../controllers/playerControllers";

const routes = (app) => {
    app.route("/players")
        // this is the post endpoint
        .post(addNewPlayer)
        // this is the GET endpoint for all players.
        .get(getPlayers);

    // GET for player by id
    app.route("/player/:PlayerId")
        .get(getPlayerByID);
};

export default routes;