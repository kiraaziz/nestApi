import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {

    constructor(private db: PrismaService) { }

    async createUser(userData): Promise<any> {

        return await this.db.user.create({
            data: {
                ...userData.account,
                profile: {
                    create: {
                        ...userData.profile
                    }
                }
            },
            select: {
                name: true,
                email: true,
                profile: {
                    select: {
                        dispalyName: true,
                        photoURL: true
                    }
                }
            }
        })

    }

    async getUsers(): Promise<any> {

        return await this.db.user.findMany({
            where: {
                profile: {
                    active: {
                        equals: true
                    }
                }
            }
        })
    }
}
