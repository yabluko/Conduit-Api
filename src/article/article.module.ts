import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleController } from "./article.controller";
import { ArticleService } from "./article.service";
import { ArticleEntity } from "./article.entity";
import { UserEntity } from "@app/user/user.entity";
import { FollowEntity } from "@app/profile/follow.entity";


@Module({
    imports : [TypeOrmModule.forFeature([ArticleEntity, UserEntity, FollowEntity])],
    providers : [ArticleService],
    controllers : [ArticleController],
})
export class ArticleModule {}