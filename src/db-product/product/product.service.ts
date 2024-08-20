import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from 'src/common/dtos/db-product/product/product.dto';
import { plainToInstance } from 'class-transformer';
import { Product } from '#entity/db-product/product.entity';
import { CreateProductDto } from 'src/common/dtos/db-product/product/create-product.dto';
import path from 'path';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Create a new product.
   * @param createProductDto The data transfer object containing product details.
   * @returns The created product.
   */
  async create(createProductDto: CreateProductDto, fileImagePrice: Express.Multer.File): Promise<ProductDto> {
    // Create a new Product entity instance using the DTO
    const product = this.productRepository.create(createProductDto);
    this.saveFile(fileImagePrice, 'test');
    const productSaved = await this.productRepository.save(product);

    return plainToInstance(ProductDto, productSaved);
  }

  async saveFile(file: Express.Multer.File, folderName: string): Promise<string> {
    const mediaPath = this.configService.getOrThrow('MEDIA_ABSOLUTE_DIR');
    const uploadPath = path.join(mediaPath, folderName);

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    const originalName = path.parse(file.originalname).name;
    const extension = path.extname(file.originalname);

    let fileName = `${originalName}${extension}`;
    let filePath = path.join(uploadPath, fileName);
    let counter = 1;

    while (fs.existsSync(filePath)) {
      fileName = `${originalName}-(${counter})${extension}`;
      filePath = path.join(uploadPath, fileName);
      counter++;
    }

    fs.writeFileSync(filePath, file.buffer);

    return filePath;
  }
}
