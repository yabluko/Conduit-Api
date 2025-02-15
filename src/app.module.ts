import { Module, RequestMethod } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TagModule } from '@app/tag/tag.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '@app/ormconfig'
import { UserModule } from './user/user.module';
import { MiddlewareConsumer } from '@nestjs/common';
import { AuthMiddleware } from './user/middlewares/auth.middleware';
import { ArticleModule } from './article/article.module';
import { ProfileModule } from './profile/profile.module';
import { CommentModule } from './comment/comment.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [ConfigModule.forRoot({
    envFilePath : '.env',
    isGlobal : true
    }), TypeOrmModule.forRoot(ormconfig) , TagModule, UserModule, ArticleModule, ProfileModule, CommentModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer : MiddlewareConsumer){
    consumer.apply(AuthMiddleware).forRoutes({
      path : '*',
      method : RequestMethod.ALL
    })
}
}
