import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from 'src/common/dtos/db-product/product/product.dto';
import { plainToInstance } from 'class-transformer';
import { Product } from '#entity/db-product/product.entity';
import { CreateProductDto } from 'src/common/dtos/db-product/product/create-product.dto';
import path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import Jimp from 'jimp';

@Injectable()
export class ProductService {
  ubuntuPrefix = '/var/www/db.artexnaman.com';
  mediaAbsolutePath = os.platform() === 'win32' ? process.env.MEDIA_ABSOLUTE_DIR_WIN : process.env.MEDIA_ABSOLUTE_DIR_UBT;
  mediaThumbAbsolutePath = os.platform() === 'win32' ? process.env.MEDIA_THUMB_ABSOLUTE_DIR_WIN : process.env.MEDIA_THUMB_ABSOLUTE_DIR_UBT;

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  /**
   * Create a new product.
   * @param createProductDto The data transfer object containing product details.
   * @returns The created product.
   */
  async create(
    createProductDto: CreateProductDto,
    fileImagePrice: Express.Multer.File | undefined,
    folderName: string,
  ): Promise<ProductDto> {
    // Create a new Product entity instance using the DTO
    const product = this.productRepository.create(createProductDto);

    if (fileImagePrice) {
      product.imagePrice = await this.saveFile(fileImagePrice, folderName);
    }

    const productSaved = await this.productRepository.save(product);
    return plainToInstance(ProductDto, productSaved);
  }

  async saveFile(file: Express.Multer.File, folderName: string): Promise<string> {
    const uploadPath = path.join(this.mediaAbsolutePath, folderName);
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    const uploadThumbPath = path.join(this.mediaThumbAbsolutePath, folderName);
    if (!fs.existsSync(uploadThumbPath)) {
      fs.mkdirSync(uploadThumbPath, { recursive: true });
    }

    const originalName = path.parse(file.originalname).name;
    const extension = path.extname(file.originalname);
    let fileName = `${originalName}${extension}`;
    let filePath = path.join(uploadPath, fileName);
    let fileThumbPath = path.join(uploadThumbPath, fileName);
    let counter = 1;
    while (fs.existsSync(filePath) || fs.existsSync(fileThumbPath)) {
      fileName = `${originalName}-(${counter})${extension}`;
      filePath = path.join(uploadPath, fileName);
      fileThumbPath = path.join(uploadThumbPath, fileName);
      counter++;
    }

    fs.writeFileSync(filePath, file.buffer);
    fs.chmodSync(filePath, '0644');

    const resizeImage = async (inputPath: string, outputPath: string) => {
      const image = await Jimp.read(inputPath);
      await image.resize(300, 300).writeAsync(outputPath);
    };

    try {
      await resizeImage(filePath, fileThumbPath);
      fs.chmodSync(fileThumbPath, '0644');
    } catch (error) {
      console.log(error);
      return '';
    }

    if (filePath.startsWith(this.ubuntuPrefix)) {
      return filePath.slice(this.ubuntuPrefix.length);
    }

    return encodeURI(filePath);
  }
}
