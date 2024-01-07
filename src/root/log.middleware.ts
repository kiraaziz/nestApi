import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (false) {
      throw new HttpException("Forbidden", HttpStatus.FORBIDDEN)
    } else {
      next();
    }
  }
}
