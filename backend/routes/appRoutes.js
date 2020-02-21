import { addNewPlayer, getPlayers} from "../controllers/playerControllers";

const routes = (app) => {
    app.route("/players")
        // this is the post endpoint
        .post(addNewPlayer)
        .get(getPlayers);
};

export default routes;