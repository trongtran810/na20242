import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ database: 'artex_db_2', name: 'product' })
export class Product {
  @PrimaryGeneratedColumn({ name: 'Id', type: 'int' })
  id!: number;

  @Column({ name: 'Name', type: 'varchar', length: 256, nullable: true })
  name?: string;

  @Column({ name: 'ProductCode', type: 'varchar', length: 256, nullable: true })
  productCode?: string;

  @Column({ name: 'Image_Price', type: 'varchar', length: 256, nullable: true })
  imagePrice?: string;

  @Column({ name: 'Image_Detail', type: 'text', nullable: true })
  imageDetail?: string;

  @Column({ name: 'Image_Marketing', type: 'text', nullable: true })
  imageMarketing?: string;

  @Column({ name: 'Image_Produce', type: 'text', nullable: true })
  imageProduce?: string;

  @Column({ name: 'DescriptionSummary', type: 'text', nullable: true })
  descriptionSummary?: string;

  @Column({ name: 'DescriptionDetail', type: 'text', nullable: true })
  descriptionDetail?: string;

  @Column({ name: 'Color', type: 'varchar', length: 256, nullable: true })
  color?: string;

  @Column({ name: 'MaterialId', type: 'int', nullable: true })
  materialId?: number;

  @Column({ name: 'Material_subId', type: 'int', nullable: true })
  materialSubId?: number;

  @Column({ name: 'CategoryId', type: 'int', nullable: true })
  categoryId?: number;

  @Column({ name: 'SupplierId', type: 'int', nullable: true })
  supplierId?: number;

  @Column({ name: 'Monopoly', type: 'int', nullable: true })
  monopoly?: number;

  @UpdateDateColumn({ name: 'UpdateTime', type: 'datetime', nullable: true })
  updateTime?: Date;

  @Column({ name: 'Validity', type: 'date', nullable: true })
  validity?: Date;

  @Column({ name: 'Status', type: 'int', nullable: true })
  status?: number;

  @Column({ name: 'Size', type: 'varchar', length: 256, nullable: true })
  size?: string;

  @Column({ name: 'Width', type: 'varchar', length: 256, nullable: true })
  width?: string;

  @Column({ name: 'Height', type: 'varchar', length: 256, nullable: true })
  height?: string;

  @Column({ name: 'Length', type: 'varchar', length: 256, nullable: true })
  length?: string;

  @Column({ name: 'Unit', type: 'varchar', length: 256, nullable: true })
  unit?: string;

  @Column({ name: 'Quantity', type: 'varchar', length: 256, nullable: true })
  quantity?: string;

  @Column({ name: 'BoxOutQuantity', type: 'int', nullable: true })
  boxOutQuantity?: number;

  @Column({ name: 'BoxOutHeihgt', type: 'int', nullable: true })
  boxOutHeight?: number;

  @Column({ name: 'BoxOutWidth', type: 'int', nullable: true })
  boxOutWidth?: number;

  @Column({ name: 'BoxOutLength', type: 'int', nullable: true })
  boxOutLength?: number;

  @Column({ name: 'BoxInQuantity', type: 'int', nullable: true })
  boxInQuantity?: number;

  @Column({ name: 'BoxInHeihgt', type: 'int', nullable: true })
  boxInHeight?: number;

  @Column({ name: 'BoxInWidth', type: 'int', nullable: true })
  boxInWidth?: number;

  @Column({ name: 'BoxInLength', type: 'int', nullable: true })
  boxInLength?: number;

  @Column({ name: 'CBM', type: 'int', nullable: true })
  cbm?: number;

  @Column({ name: 'QuantityOfBoxOut', type: 'int', nullable: true })
  quantityOfBoxOut?: number;

  @Column({ name: 'QuantityOfCBM', type: 'int', nullable: true })
  quantityOfCbm?: number;

  @Column({ name: 'QuantityOfContainer', type: 'int', nullable: true })
  quantityOfContainer?: number;

  @Column({ name: 'NetWeight', type: 'int', nullable: true })
  netWeight?: number;

  @Column({ name: 'GrossWeight', type: 'int', nullable: true })
  grossWeight?: number;

  @Column({ name: 'Warning', type: 'text', nullable: true })
  warning?: string;

  @Column({ name: 'Note', type: 'text', nullable: true })
  note?: string;

  @Column({ name: 'Price_Base', type: 'int', nullable: true })
  priceBase?: number;

  @Column({ name: 'Tolerant_Width', type: 'text', nullable: true })
  tolerantWidth?: string;

  @Column({ name: 'Tolerant_Length', type: 'text', nullable: true })
  tolerantLength?: string;

  @Column({ name: 'Tolerant_Height', type: 'text', nullable: true })
  tolerantHeight?: string;

  @Column({ name: 'Tolerant_Color', type: 'text', nullable: true })
  tolerantColor?: string;

  @Column({ name: 'Tolerant_weight', type: 'text', nullable: true })
  tolerantWeight?: string;

  @Column({ name: 'UserUpload', type: 'varchar', length: 256, nullable: true })
  userUpload?: string;

  @Column({ name: 'UserUpdate', type: 'varchar', length: 256, nullable: true })
  userUpdate?: string;

  @Column({ name: 'Lang', type: 'varchar', length: 256, default: 'vi' })
  lang?: string;

  @Column({ name: 'IsHide', type: 'int', default: 0 })
  isHide?: number;

  @Column({ name: 'PhotoDate', type: 'date', nullable: true })
  photoDate?: Date;

  @Column({ name: 'MarketingPrice', type: 'double', nullable: true })
  marketingPrice?: number;

  @Column({ name: 'AlibabaDate', type: 'date', nullable: true })
  alibabaDate?: Date;

  @Column({ name: 'AlibabaLink', type: 'varchar', length: 512, nullable: true })
  alibabaLink?: string;

  @Column({ name: 'WebsiteLink', type: 'varchar', length: 512, nullable: true })
  websiteLink?: string;

  @Column({ name: 'WebsiteDate', type: 'date', nullable: true })
  websiteDate?: Date;

  @Column({ name: 'Segment', type: 'int', default: 0 })
  segment?: number;

  @Column({ name: 'Tags', type: 'text', nullable: true })
  tags?: string;

  @Column({ name: 'MktName', type: 'varchar', length: 256, nullable: false })
  mktName!: string;

  @Column({ name: 'MktCategory', type: 'varchar', length: 256, nullable: false })
  mktCategory!: string;

  @Column({ name: 'MktShortDescription', type: 'text', nullable: false })
  mktShortDescription!: string;

  @Column({ name: 'MktDescription', type: 'text', nullable: false })
  mktDescription!: string;

  @Column({ name: 'MktColor', type: 'varchar', length: 256, nullable: false })
  mktColor!: string;

  @Column({ name: 'MktAccentColor', type: 'varchar', length: 256, nullable: false })
  mktAccentColor!: string;

  @Column({ name: 'MtkShape', type: 'varchar', length: 256, nullable: false })
  mtkShape!: string;

  @Column({ name: 'MktProductLine', type: 'varchar', length: 256, nullable: false })
  mktProductLine!: string;

  @Column({ name: 'ProductCode2', type: 'varchar', length: 256, nullable: true })
  productCode2?: string;

  @Column({ name: 'SourceId', type: 'int', nullable: true })
  sourceId?: number;

  @Column({ name: 'Publish', type: 'int', default: 1 })
  publish?: number;

  @Column({ name: 'RoomId', type: 'varchar', length: 512, nullable: false })
  roomId!: string;

  @Column({ name: 'MaterialType', type: 'int', nullable: false })
  materialType!: number;

  @Column({ name: 'BuyerId', type: 'int', nullable: true })
  buyerId?: number;
}
