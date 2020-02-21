import { addNewPlayer} from "../controllers/playerControllers";

const routes = (app) => {
    app.route("/players")
        // this is the post endpoint
        .post(addNewPlayer);
};

export default routes;