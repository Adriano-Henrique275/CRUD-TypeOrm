import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

const routes = Router();

/**
 * [X] C - CREATE - POST
 * [X] R - READ   - GET
 * [X] U - UPDATE - PUT
 * [X] D - DELETE - DELETE
 */

routes.post("/category", new CreateCategoryController().handle);
routes.get("/category", new GetAllCategoriesController().handle);
routes.delete("/category/:id", new DeleteCategoryController().handle);
routes.put("/category/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };