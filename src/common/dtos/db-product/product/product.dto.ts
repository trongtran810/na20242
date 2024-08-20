import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({ required: true })
  id!: number;

  @ApiProperty()
  name?: string;

  @ApiProperty({ example: 'SG 09 05 110 5S', required: false })
  productCode?: string;

  @ApiProperty({
    description: 'Image price',
    example: '/view/admin/themes/kcfinder/upload/images/C%C3%B3i%20xi%C3%AAn/Basket/IMG_0552.JPG',
    required: false,
  })
  imagePrice?: string;

  @ApiProperty({ example: '[]', required: false })
  imageDetail?: string;

  @ApiProperty({ example: '', required: false })
  imageMarketing?: string;

  @ApiProperty({ example: '', required: false })
  imageProduce?: string;

  @ApiProperty({ example: 'White plastic', required: false })
  descriptionSummary?: string;

  @ApiProperty({ example: '', required: false })
  descriptionDetail?: string;

  @ApiProperty({ example: 'White', required: false })
  color?: string;

  @ApiProperty({ example: 65, required: false })
  materialId?: number;

  @ApiProperty({ example: 37, required: false })
  materialSubId?: number;

  @ApiProperty({ example: 30, required: false })
  categoryId?: number;

  @ApiProperty({ example: 3, required: false })
  supplierId?: number;

  @ApiProperty({ example: 0, required: false })
  monopoly?: number;

  // updateTime?: Date;

  @ApiProperty({ example: null, required: false })
  validity?: Date;

  @ApiProperty({ example: 0, required: false })
  status?: number;

  @ApiProperty({ example: 'S', required: false })
  size?: string;

  @ApiProperty({ example: '25', required: false })
  width?: string;

  @ApiProperty({ example: '20/34', required: false })
  height?: string;

  @ApiProperty({ example: '25', required: false })
  length?: string;

  @ApiProperty({ example: 'Chiếc', required: false })
  unit?: string;

  @ApiProperty({ example: '300', required: false })
  quantity?: string;

  @ApiProperty({ example: 8, required: false })
  boxOutQuantity?: number;

  @ApiProperty({ example: 40, required: false })
  boxOutHeight?: number;

  @ApiProperty({ example: 53, required: false })
  boxOutWidth?: number;

  @ApiProperty({ example: 53, required: false })
  boxOutLength?: number;

  @ApiProperty({ example: 0, required: false })
  boxInQuantity?: number;

  @ApiProperty({ example: 0, required: false })
  boxInHeight?: number;

  @ApiProperty({ example: 0, required: false })
  boxInWidth?: number;

  @ApiProperty({ example: 0, required: false })
  boxInLength?: number;

  @ApiProperty({ example: 0, required: false })
  cbm?: number;

  @ApiProperty({ example: 0, required: false })
  quantityOfBoxOut?: number;

  @ApiProperty({ example: 0, required: false })
  quantityOfCbm?: number;

  @ApiProperty({ example: 0, required: false })
  quantityOfContainer?: number;

  @ApiProperty({ example: 0, required: false })
  netWeight?: number;

  @ApiProperty({ example: 0, required: false })
  grossWeight?: number;

  @ApiProperty({ example: '', required: false })
  warning?: string;

  @ApiProperty({ example: '', required: false })
  note?: string;

  @ApiProperty({ example: 120000, required: false })
  priceBase?: number;

  @ApiProperty({ example: '<p>\n	+- 1 cm</p>\n', required: false })
  tolerantWidth?: string;

  @ApiProperty({ example: '<p>\n	+- 1 cm</p>\n', required: false })
  tolerantLength?: string;

  @ApiProperty({ example: '<p>\n	+- 1 cm</p>\n', required: false })
  tolerantHeight?: string;

  @ApiProperty({ example: '', required: false })
  tolerantColor?: string;

  @ApiProperty({ example: '', required: false })
  tolerantWeight?: string;

  @ApiProperty({ example: '', required: false })
  userUpload?: string;

  @ApiProperty({ example: '', required: false })
  userUpdate?: string;

  @ApiProperty({ example: 'vi', default: 'vi', required: true })
  lang!: string;

  @ApiProperty({ example: 0, default: 0, required: true })
  isHide!: number;

  @ApiProperty({ example: null, required: false })
  photoDate?: Date;

  @ApiProperty({ example: null, required: false })
  marketingPrice?: number;

  @ApiProperty({ example: null, required: false })
  alibabaDate?: Date;

  @ApiProperty({ example: null, required: false })
  alibabaLink?: string;

  @ApiProperty({ example: null, required: false })
  websiteLink?: string;

  @ApiProperty({ example: null, required: false })
  websiteDate?: Date;

  @ApiProperty({ example: 0, default: 0, required: true })
  segment!: number;

  @ApiProperty({ example: '', required: false })
  tags?: string;

  @ApiProperty({ example: '', required: true, default: '' })
  mktName!: string;

  @ApiProperty({ example: '', required: true, default: '' })
  mktCategory!: string;

  @ApiProperty({ example: '', required: true, default: '' })
  mktShortDescription!: string;

  @ApiProperty({ example: '', required: true, default: '' })
  mktDescription!: string;

  @ApiProperty({ example: '', required: true, default: '' })
  mktColor!: string;

  @ApiProperty({ example: '', required: true, default: '' })
  mktAccentColor!: string;

  @ApiProperty({ example: '', required: true, default: '' })
  mtkShape!: string;

  @ApiProperty({ example: '', required: true, default: '' })
  mktProductLine!: string;

  @ApiProperty({ example: '', required: false })
  productCode2?: string;

  @ApiProperty({ example: 65, required: false })
  sourceId?: number;

  @ApiProperty({ example: 0, default: 1, required: false })
  publish?: number = 1;

  @ApiProperty({ example: '["3","4","5","6","7","8","9"]', required: true, default: '' })
  roomId!: string;

  @ApiProperty({ example: 0, required: true })
  materialType!: number;

  @ApiProperty({ example: 1, required: false })
  buyerId?: number;
}
