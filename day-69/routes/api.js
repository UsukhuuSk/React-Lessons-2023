import express, { response } from "express";
const apiRouter = express.Router();
import { getPopularCategories } from "../services/category-services.js";
import { getChildrenMenus, getParentMenus } from "../services/menus-service.js";
import { search } from "../services/products-services.js";

apiRouter.get("/popular", async (request, response) => {
  const result = await getPopularCategories();
  response.status(200).send(result);
});
apiRouter.get("/search", async (request, response) => {
  const keyword = request.query.keyword;
  const result = await search(keyword);
  response.status(200).send(result);
});
apiRouter.get("/menus", async (request, resposne) => {
  const parentMenus = await getParentMenus();
  await Promise.all(
    parentMenus.map(async (parent) => {
      const children = await getChildrenMenus(parent.id);
      parent.children = children;
      return parent;
    })
  );

  response.status(200).send(parentMenus);
});
export default apiRouter;
