import express, { Router } from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import { createproduct, deleteproduct, getproducts, updateproduct } from '../controllers/product.controllers.js';
const router = express.Router();

router.get("/", getproducts);

router.post("/", createproduct);

router.patch("/:id", updateproduct);

router.delete("/:id", deleteproduct);

export default router;