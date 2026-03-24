import { Router } from "express";
import { getAllCities } from "../controllers/city.controller";
import { getAllBatches } from "../controllers/batch.controller";

const router = Router();

// Public routes - no authentication required
// These routes are used for dropdowns and filters

// Get all cities
router.get("/cities", getAllCities);

// Get all batches
router.get("/batches", getAllBatches);

export default router;
