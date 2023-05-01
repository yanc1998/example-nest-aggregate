import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { SaleCreatedEvent } from "./SaleCreatedEvent";

@EventsHandler(SaleCreatedEvent)
export class SaleCreatedHandler implements IEventHandler<SaleCreatedEvent> {
  handle(event: SaleCreatedEvent): any {
    console.log(event);
  }

}
