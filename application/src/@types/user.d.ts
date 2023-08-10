import { UserPayload } from './middleware/fetchuser';

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}
