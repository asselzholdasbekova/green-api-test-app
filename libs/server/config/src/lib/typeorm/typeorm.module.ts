import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as Entities from '@app/server/entities';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        {
          module: class TypeORMConfigProxyModule {}
        },
      ],
      useFactory: () => {
        const entities = Object.keys(Entities).map(
          (entityKey) => Entities[entityKey]
        );

        return {
            type: 'postgres',
            host: process.env.TYPEORM_HOST,
            port: Number(process.env.TYPEORM_PORT),
            database: process.env.TYPEORM_DATABASE,
            username: process.env.TYPEORM_USERNAME,
            password: process.env.TYPEORM_PASSWORD,
            synchronize: !process.env.TYPEORM_NO_SYNCHRONISE,
            logging: !process.env.TYPEORM_NO_LOGGING,
            entities,
        };
      },
    }),
  ],
})
export class TypeOrmConfigModule {}