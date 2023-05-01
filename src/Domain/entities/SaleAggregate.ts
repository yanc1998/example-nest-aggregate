import { AggregateRoot } from "@nestjs/cqrs";
import { SaleCreatedEvent } from "../events/SaleCreatedEvent";

export class SaleAggregate extends AggregateRoot {
  private constructor(private readonly products: Product [], private readonly totalPrice: number) {
    super();
  }

  New(products: Product[]) {
    const total: number = products.reduce((total, item) => total + item.price, 0);
    const saleAggregate = new SaleAggregate(products, this.AddDiscount(total));
    saleAggregate.apply(new SaleCreatedEvent(saleAggregate));
    return saleAggregate;
  }

  private AddDiscount(value) {
    const minPriceDiscount = 150;
    if (value > minPriceDiscount) {
      return value - value * 10 / 100;
    }
    return value;
  }
}


