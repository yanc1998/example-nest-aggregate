import { ICommand } from "@nestjs/cqrs";

export class CreateSaleCommand implements ICommand{
  constructor(readonly products: Product []) {
  }
}
