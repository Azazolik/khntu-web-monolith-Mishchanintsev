
import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/product.service';

const productService = new ProductService();

export class ProductController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const page = Number(req.query.page || 1);
      const limit = Number(req.query.limit || 10);

      if (!Number.isInteger(page) || page < 1 ||
          !Number.isInteger(limit) || limit < 1) {
        return res.status(400).json({
          status: 'error',
          message: 'page та limit мають бути додатними цілими числами'
        });
      }

      const result = await productService.getAll(page, limit);

      res.status(200).json({
        status: 'success',
        data: result
      });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const product = await productService.getById(id);

      res.status(200).json({
        status: 'success',
        data: product
      });
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await productService.create(req.body);

      res.status(201).json({
        status: 'success',
        data: product
      });
    } catch (error) {
      next(error);
    }
  }
}
