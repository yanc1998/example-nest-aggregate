import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { CreateSaleHandler } from "./Domain/commands/createSaleHandler";
import { CommandBus } from "@nestjs/cqrs";
import { CreateSaleCommand } from "./Domain/commands/createSaleCommand";

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {
  }

  @Get()
  getHello() {
    return this.service.creteSale();
  }
}
