import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {

    async uploadImage(image) {
        return image
    }
}
