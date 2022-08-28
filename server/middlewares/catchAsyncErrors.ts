import { Request, Response } from 'express';

const catchAsyncErrors =
  (fn: Function) => (req: Request, res: Response, next: any) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

module.exports = catchAsyncErrors;
