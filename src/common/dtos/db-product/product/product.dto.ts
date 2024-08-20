import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  productCode?: string;

  @ApiProperty()
  imagePrice?: string;

  @ApiProperty()
  imageDetail?: string;

  @ApiProperty()
  imageMarketing?: string;

  @ApiProperty()
  imageProduce?: string;

  @ApiProperty()
  descriptionSummary?: string;

  @ApiProperty()
  descriptionDetail?: string;

  @ApiProperty()
  color?: string;

  @ApiProperty()
  materialId?: number;

  @ApiProperty()
  materialSubId?: number;

  @ApiProperty()
  categoryId?: number;

  @ApiProperty()
  supplierId?: number;

  @ApiProperty()
  monopoly?: number;

  @ApiProperty({ example: '2017-04-14T22:50:41.000Z' })
  updateTime?: Date;

  @ApiProperty()
  validity?: Date;

  @ApiProperty()
  status?: number;

  @ApiProperty()
  size?: string;

  @ApiProperty()
  width?: string;

  @ApiProperty()
  height?: string;

  @ApiProperty()
  length?: string;

  @ApiProperty()
  unit?: string;

  @ApiProperty()
  quantity?: string;

  @ApiProperty()
  boxOutQuantity?: number;

  @ApiProperty()
  boxOutHeight?: number;

  @ApiProperty()
  boxOutWidth?: number;

  @ApiProperty()
  boxOutLength?: number;

  @ApiProperty()
  boxInQuantity?: number;

  @ApiProperty()
  boxInHeight?: number;

  @ApiProperty()
  boxInWidth?: number;

  @ApiProperty()
  boxInLength?: number;

  @ApiProperty()
  cbm?: number;

  @ApiProperty()
  quantityOfBoxOut?: number;

  @ApiProperty()
  quantityOfCbm?: number;

  @ApiProperty()
  quantityOfContainer?: number;

  @ApiProperty()
  netWeight?: number;

  @ApiProperty()
  grossWeight?: number;

  @ApiProperty()
  warning?: string;

  @ApiProperty()
  note?: string;

  @ApiProperty()
  priceBase?: number;

  @ApiProperty()
  tolerantWidth?: string;

  @ApiProperty()
  tolerantLength?: string;

  @ApiProperty()
  tolerantHeight?: string;

  @ApiProperty()
  tolerantColor?: string;

  @ApiProperty()
  tolerantWeight?: string;

  @ApiProperty()
  userUpload?: string;

  @ApiProperty()
  userUpdate?: string;

  @ApiProperty({ default: 'vi' })
  lang?: string;

  @ApiProperty({ default: 0 })
  isHide?: number;

  @ApiProperty()
  photoDate?: Date;

  @ApiProperty()
  marketingPrice?: number;

  @ApiProperty()
  alibabaDate?: Date;

  @ApiProperty()
  alibabaLink?: string;

  @ApiProperty()
  websiteLink?: string;

  @ApiProperty()
  websiteDate?: Date;

  @ApiProperty({ default: 0 })
  segment?: number;

  @ApiProperty()
  tags?: string;

  @ApiProperty({ required: true })
  mktName?: string;

  @ApiProperty({ required: true })
  mktCategory?: string;

  @ApiProperty({ required: true })
  mktShortDescription?: string;

  @ApiProperty({ required: true })
  mktDescription?: string;

  @ApiProperty({ required: true })
  mktColor?: string;

  @ApiProperty({ required: true })
  mktAccentColor?: string;

  @ApiProperty({ required: true })
  mtkShape?: string;

  @ApiProperty({ required: true })
  mktProductLine?: string;
}
