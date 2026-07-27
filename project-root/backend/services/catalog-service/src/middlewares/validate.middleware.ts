import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export const validate = (schema: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error: any) {
      if (error instanceof ZodError || (error && error.errors)) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: error.errors?.map((e: any) => ({
            path: e.path?.join('.'),
            message: e.message,
          })),
        });
      }
      return next(error);
    }
  };
};
