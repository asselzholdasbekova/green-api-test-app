import { TypeOrmConfigModule } from "@app/server/config";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        TypeOrmConfigModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}