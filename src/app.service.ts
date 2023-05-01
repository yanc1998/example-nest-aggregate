import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { CreateSaleCommand } from "./Domain/commands/createSaleCommand";

@Injectable()
export class AppService {

  constructor(private readonly commandBus: CommandBus) {

  }

  creteSale() {
    return this.commandBus.execute(new CreateSaleCommand([{ price: 43, name: "test", id: "adsaa" }]));
  }

}
