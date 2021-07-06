import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductService } from "src/products/dto/products.service.ts;

@Controller("products")
export class ProductsController {

  constructor(private productService: ProductService ) {
    return this.productService.getAll()

  }


  @Get()
  @Redirect('https://google.com', 301)
  getAll(): string {
    return "getAll";
  }


  @Get(":id")
  getOne(@Param("id") id: string): string {
    return ("getOne " + id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProduct: CreateProductDto ): string {
    return `Title: ${createProduct.title} Price: ${createProduct.price}`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove' + id;

  }

  @Put('id')
  update(@Body() updateProduct: UpdateProductDto, @Param('id') id: string) {
    return 'Update' + id;
  }


}
