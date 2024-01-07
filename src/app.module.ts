import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';

@Module({
    imports: [UserModule, UploadModule]
})
export class AppModule {}
