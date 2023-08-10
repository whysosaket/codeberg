import { Router } from "express";
import services from "./services";

const router = Router();

export default (): Router => {
  services(router);
  return router;
};