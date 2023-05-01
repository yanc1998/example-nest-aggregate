import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CqrsModule } from "@nestjs/cqrs";
import { SaleCreatedEvent } from "./Domain/events/SaleCreatedEvent";
import { CreateSaleCommand } from "./Domain/commands/createSaleCommand";
import { CreateSaleHandler } from "./Domain/commands/createSaleHandler";
import { SaleCreatedHandler } from "./Domain/events/SaleCreatedHandler";

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [AppService, SaleCreatedEvent, CreateSaleCommand, CreateSaleHandler, SaleCreatedHandler]
})
export class AppModule {
}
