import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { Products2Controller } from './products2/products2.controller';
import { ProductsService } from "./products/dto/products.service";

@Module({
  imports: [],
  controllers: [AppController, ProductsController, Products2Controller],
  providers: [AppService, ProductsService],
})
export class AppModule {}
