import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { SaleAggregate } from "../entities/SaleAggregate";
import { CreateSaleCommand } from "./createSaleCommand";


@CommandHandler(CreateSaleCommand)
export class CreateSaleHandler implements ICommandHandler<CreateSaleCommand> {

  constructor(private readonly publisher: EventPublisher) {
  }

  async execute(command: CreateSaleCommand): Promise<SaleAggregate> {
    const saleAggregate = SaleAggregate.prototype.New(command.products);
    //TODo:call to persist
    const sale = this.publisher.mergeObjectContext(saleAggregate);
    sale.commit();
    return sale;
  }
}
