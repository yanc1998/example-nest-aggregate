import { SaleAggregate } from "../entities/SaleAggregate";

export class SaleCreatedEvent {
  constructor(private readonly sale: SaleAggregate) {
  }
}
