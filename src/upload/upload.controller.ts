import { Body, Controller, Head, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as sharp from 'sharp'
import { initializeApp } from 'firebase-admin/app'
import { getStorage } from 'firebase-admin/storage'

process.env["FIREBASE_STORAGE_EMULATOR_HOST"] = "127.0.0.1:9199"
initializeApp({ projectId: "lightai-2fc73" })

const bucket = getStorage().bucket("lightai-2fc73.appspot.com")

@Controller('upload')
export class UploadController {


    @Post("/image")
    @UseInterceptors(FileInterceptor('image'))
    async uploadImage(@UploadedFile() file) {
        const imageBuffer = sharp(file.buffer).resize(100)
        await bucket.file('x.webp').save(imageBuffer)
        return imageBuffer
    }
}
