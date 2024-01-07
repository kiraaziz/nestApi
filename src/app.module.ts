import { Module } from '@nestjs/common';
//import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';

@Module({
    imports: [UploadModule]
})
export class AppModule {}
