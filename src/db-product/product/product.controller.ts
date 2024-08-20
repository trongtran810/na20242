import { Body, Controller, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateProductDto } from 'src/common/dtos/db-product/product/create-product.dto';
import { ProductService } from './product.service';
import { ProductDto } from 'src/common/dtos/db-product/product/product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
@ApiTags('Products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(FileInterceptor('fileImagePrice'))
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The product has been successfully created.', type: ProductDto })
  async createProduct(
    @UploadedFile() fileImagePrice: Express.Multer.File,
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductDto> {
    return this.productService.create(createProductDto, fileImagePrice);
  }
}
