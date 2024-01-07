import { Body, Controller, Head, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as sharp from 'sharp'

@Controller('upload')
export class UploadController {


    @Post("/image")
    @UseInterceptors(FileInterceptor('image'))
    async uploadImage(@UploadedFile() file) {
        const imageBuffer = sharp(file.buffer).toFormat("webp").resize(200)
        return imageBuffer
    }
}
