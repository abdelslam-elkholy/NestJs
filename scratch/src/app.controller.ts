import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class AppController {
  @Get("/asdf")
  getRootRouter() {
    return "Hi There! ";
  }

  @Get("/bye")
  getByeRouter() {
    return "<h1>Bye</h1>";
  }
}
