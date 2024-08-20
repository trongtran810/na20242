import { Body, Controller, HttpStatus, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateProductDto } from 'src/common/dtos/db-product/product/create-product.dto';
import { ProductService } from './product.service';
import { ProductDto } from 'src/common/dtos/db-product/product/product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRole } from 'src/common/constants/user-role.enum';

@Controller('products')
@ApiTags('Products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  @UseInterceptors(FileInterceptor('fileImagePrice'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: `[Admin role required] Create a new product with imagePrice. Return product created, includes the product id. 
    Request explain: 
    - createProductDto: Product infos,
    - fileImagePrice: Blob,
    - folderName: suppose we is in the parent directory of images
    `,
  })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The product has been successfully created.', type: ProductDto })
  async createProduct(
    @UploadedFile() fileImagePrice: Express.Multer.File | undefined,
    @Body() createProductDto: CreateProductDto,
    @Body('folderName') folderName: string = 'images',
  ): Promise<ProductDto> {
    return this.productService.create(createProductDto, fileImagePrice, folderName);
  }
}
