import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, IsDate, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Colied seagrass basket', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'SG 09 05 110 5S', required: false })
  @IsString()
  @IsOptional()
  productCode?: string;

  @ApiProperty({
    description: 'Image price',
    example: '/view/admin/themes/kcfinder/upload/images/C%C3%B3i%20xi%C3%AAn/Basket/IMG_0552.JPG',
    required: false,
  })
  @IsString()
  @IsOptional()
  imagePrice?: string;

  @ApiProperty({ example: '[]', required: false })
  @IsString()
  @IsOptional()
  imageDetail?: string;

  @ApiProperty({ example: '', required: false })
  @IsString()
  @IsOptional()
  imageMarketing?: string;

  @ApiProperty({ example: '', required: false })
  @IsString()
  @IsOptional()
  imageProduce?: string;

  @ApiProperty({ example: 'White plastic', required: false })
  @IsString()
  @IsOptional()
  descriptionSummary?: string;

  @ApiProperty({ example: '', required: false })
  @IsString()
  @IsOptional()
  descriptionDetail?: string;

  @ApiProperty({ example: 'White', required: false })
  @IsString()
  @IsOptional()
  color?: string;

  @ApiProperty({ example: 65, required: false })
  @IsInt()
  @IsOptional()
  materialId?: number;

  @ApiProperty({ example: 37, required: false })
  @IsInt()
  @IsOptional()
  materialSubId?: number;

  @ApiProperty({ example: 30, required: false })
  @IsInt()
  @IsOptional()
  categoryId?: number;

  @ApiProperty({ example: 3, required: false })
  @IsInt()
  @IsOptional()
  supplierId?: number;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  monopoly?: number;

  // updateTime?: Date;

  @ApiProperty({ example: null, required: false })
  @IsDate()
  @IsOptional()
  validity?: Date;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  status?: number;

  @ApiProperty({ example: 'S', required: false })
  @IsString()
  @IsOptional()
  size?: string;

  @ApiProperty({ example: '25', required: false })
  @IsString()
  @IsOptional()
  width?: string;

  @ApiProperty({ example: '20/34', required: false })
  @IsString()
  @IsOptional()
  height?: string;

  @ApiProperty({ example: '25', required: false })
  @IsString()
  @IsOptional()
  length?: string;

  @ApiProperty({ example: 'Chiếc', required: false })
  @IsString()
  @IsOptional()
  unit?: string;

  @ApiProperty({ example: '300', required: false })
  @IsString()
  @IsOptional()
  quantity?: string;

  @ApiProperty({ example: 8, required: false })
  @IsInt()
  @IsOptional()
  boxOutQuantity?: number;

  @ApiProperty({ example: 40, required: false })
  @IsInt()
  @IsOptional()
  boxOutHeight?: number;

  @ApiProperty({ example: 53, required: false })
  @IsInt()
  @IsOptional()
  boxOutWidth?: number;

  @ApiProperty({ example: 53, required: false })
  @IsInt()
  @IsOptional()
  boxOutLength?: number;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  boxInQuantity?: number;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  boxInHeight?: number;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  boxInWidth?: number;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  boxInLength?: number;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  cbm?: number;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  quantityOfBoxOut?: number;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  quantityOfCbm?: number;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  quantityOfContainer?: number;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  netWeight?: number;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  grossWeight?: number;

  @ApiProperty({ example: '', required: false })
  @IsString()
  @IsOptional()
  warning?: string;

  @ApiProperty({ example: '', required: false })
  @IsString()
  @IsOptional()
  note?: string;

  @ApiProperty({ example: 120000, required: false })
  @IsInt()
  @IsOptional()
  priceBase?: number;

  @ApiProperty({ example: '<p>\n	+- 1 cm</p>\n', required: false })
  @IsString()
  @IsOptional()
  tolerantWidth?: string;

  @ApiProperty({ example: '<p>\n	+- 1 cm</p>\n', required: false })
  @IsString()
  @IsOptional()
  tolerantLength?: string;

  @ApiProperty({ example: '<p>\n	+- 1 cm</p>\n', required: false })
  @IsString()
  @IsOptional()
  tolerantHeight?: string;

  @ApiProperty({ example: '', required: false })
  @IsString()
  @IsOptional()
  tolerantColor?: string;

  @ApiProperty({ example: '', required: false })
  @IsString()
  @IsOptional()
  tolerantWeight?: string;

  @ApiProperty({ example: '', required: false })
  @IsString()
  @IsOptional()
  userUpload?: string;

  @ApiProperty({ example: '', required: false })
  @IsString()
  @IsOptional()
  userUpdate?: string;

  @ApiProperty({ example: 'vi', default: 'vi', required: false })
  @IsString()
  @IsOptional()
  lang?: string = 'vi';

  @ApiProperty({ example: 0, default: 0, required: false })
  @IsInt()
  @IsOptional()
  isHide?: number = 0;

  @ApiProperty({ example: null, required: false })
  @IsDate()
  @IsOptional()
  photoDate?: Date;

  @ApiProperty({ example: null, required: false })
  @IsNumber()
  @IsOptional()
  marketingPrice?: number;

  @ApiProperty({ example: null, required: false })
  @IsDate()
  @IsOptional()
  alibabaDate?: Date;

  @ApiProperty({ example: null, required: false })
  @IsString()
  @IsOptional()
  alibabaLink?: string;

  @ApiProperty({ example: null, required: false })
  @IsString()
  @IsOptional()
  websiteLink?: string;

  @ApiProperty({ example: null, required: false })
  @IsDate()
  @IsOptional()
  websiteDate?: Date;

  @ApiProperty({ example: 0, default: 0, required: false })
  @IsInt()
  @IsOptional()
  segment?: number = 0;

  @ApiProperty({ example: '', required: false })
  @IsString()
  @IsOptional()
  tags?: string;

  @ApiProperty({ example: '', required: false, default: '' })
  @IsString()
  @IsOptional()
  mktName: string = '';

  @ApiProperty({ example: '', required: false, default: '' })
  @IsString()
  @IsOptional()
  mktCategory: string = '';

  @ApiProperty({ example: '', required: false, default: '' })
  @IsString()
  @IsOptional()
  mktShortDescription: string = '';

  @ApiProperty({ example: '', required: false, default: '' })
  @IsString()
  @IsOptional()
  mktDescription: string = '';

  @ApiProperty({ example: '', required: false, default: '' })
  @IsString()
  @IsOptional()
  mktColor: string = '';

  @ApiProperty({ example: '', required: false, default: '' })
  @IsString()
  @IsOptional()
  mktAccentColor: string = '';

  @ApiProperty({ example: '', required: false, default: '' })
  @IsString()
  @IsOptional()
  mtkShape: string = '';

  @ApiProperty({ example: '', required: false, default: '' })
  @IsString()
  @IsOptional()
  mktProductLine: string = '';

  @ApiProperty({ example: '', required: false })
  @IsString()
  @IsOptional()
  productCode2?: string;

  @ApiProperty({ example: 65, required: false })
  @IsInt()
  @IsOptional()
  sourceId?: number;

  @ApiProperty({ example: 0, default: 1, required: false })
  @IsInt()
  @IsOptional()
  publish?: number = 1;

  @ApiProperty({ example: '["3","4","5","6","7","8","9"]', required: true, default: '' })
  @IsString()
  @IsOptional()
  roomId: string = `["3","4","5","6","7","8","9"]`;

  @ApiProperty({ example: 0, required: false })
  @IsInt()
  @IsOptional()
  materialType: number = 0;

  @ApiProperty({ example: 1, required: false })
  @IsInt()
  @IsOptional()
  buyerId?: number;
}
