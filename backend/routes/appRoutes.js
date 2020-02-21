import * as player from "../controllers/playerControllers";

const routes = (app) => {
    app.route("/players")
        // this is the post endpoint
        .post(player.addNewPlayer)
        // this is the GET endpoint for all players.
        .get(player.getPlayers);

    // GET for player by id
    app.route("/player/:PlayerId")
        // GET specific player
        .get(player.getPlayerByID)
        // PUT specific player
        .put(player.updatePlayer)
        // DEL specific player
        .delete(player.deletePlayer);
};

export default routes;