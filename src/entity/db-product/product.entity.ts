import { Entity, Column, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'artexdb', name: 'product' })
export class Product {
  @PrimaryGeneratedColumn({ name: 'Id', type: 'int', unsigned: true })
  id!: number;

  @Column({ name: 'Name', type: 'varchar', length: 256 })
  name?: string;

  @Column({ name: 'ProductCode', type: 'varchar', length: 256 })
  productCode?: string;

  @Column({ name: 'Image_Price', type: 'varchar', length: 256 })
  imagePrice?: string;

  @Column({ name: 'Image_Detail', type: 'text' })
  imageDetail?: string;

  @Column({ name: 'Image_Marketing', type: 'text' })
  imageMarketing?: string;

  @Column({ name: 'Image_Produce', type: 'text' })
  imageProduce?: string;

  @Column({ name: 'DescriptionSummary', type: 'text' })
  descriptionSummary?: string;

  @Column({ name: 'DescriptionDetail', type: 'text' })
  descriptionDetail?: string;

  @Column({ name: 'Color', type: 'varchar', length: 256 })
  color?: string;

  @Column({ name: 'MaterialId', type: 'int', width: 11 })
  materialId?: number;

  @Column({ name: 'Material_subId', type: 'int', width: 11 })
  materialSubId?: number;

  @Column({ name: 'CategoryId', type: 'int', width: 11 })
  categoryId?: number;

  @Column({ name: 'SupplierId', type: 'int', width: 11 })
  supplierId?: number;

  @Column({ name: 'Monopoly', type: 'int', width: 11 })
  monopoly?: number;

  @UpdateDateColumn({ name: 'UpdateTime', type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updateTime?: Date;

  @Column({ name: 'Validity', type: 'date' })
  validity?: Date;

  @Column({ name: 'Status', type: 'int', width: 11 })
  status?: number;

  @Column({ name: 'Size', type: 'varchar', length: 256 })
  size?: string;

  @Column({ name: 'Width', type: 'varchar', length: 256 })
  width?: string;

  @Column({ name: 'Height', type: 'varchar', length: 256 })
  height?: string;

  @Column({ name: 'Length', type: 'varchar', length: 256 })
  length?: string;

  @Column({ name: 'Unit', type: 'varchar', length: 256 })
  unit?: string;

  @Column({ name: 'Quantity', type: 'varchar', length: 256 })
  quantity?: string;

  @Column({ name: 'BoxOutQuantity', type: 'int', width: 11 })
  boxOutQuantity?: number;

  @Column({ name: 'BoxOutHeihgt', type: 'int', width: 11 })
  boxOutHeight?: number;

  @Column({ name: 'BoxOutWidth', type: 'int', width: 11 })
  boxOutWidth?: number;

  @Column({ name: 'BoxOutLength', type: 'int', width: 11 })
  boxOutLength?: number;

  @Column({ name: 'BoxInQuantity', type: 'int', width: 11 })
  boxInQuantity?: number;

  @Column({ name: 'BoxInHeihgt', type: 'int', width: 11 })
  boxInHeight?: number;

  @Column({ name: 'BoxInWidth', type: 'int', width: 11 })
  boxInWidth?: number;

  @Column({ name: 'BoxInLength', type: 'int', width: 11 })
  boxInLength?: number;

  @Column({ name: 'CBM', type: 'int', width: 11 })
  cbm?: number;

  @Column({ name: 'QuantityOfBoxOut', type: 'int', width: 11 })
  quantityOfBoxOut?: number;

  @Column({ name: 'QuantityOfCBM', type: 'int', width: 11 })
  quantityOfCbm?: number;

  @Column({ name: 'QuantityOfContainer', type: 'int', width: 11 })
  quantityOfContainer?: number;

  @Column({ name: 'NetWeight', type: 'int', width: 11 })
  netWeight?: number;

  @Column({ name: 'GrossWeight', type: 'int', width: 11 })
  grossWeight?: number;

  @Column({ name: 'Warning', type: 'text' })
  warning?: string;

  @Column({ name: 'Note', type: 'text' })
  note?: string;

  @Column({ name: 'Price_Base', type: 'int', width: 11 })
  priceBase?: number;

  @Column({ name: 'Tolerant_Width', type: 'text' })
  tolerantWidth?: string;

  @Column({ name: 'Tolerant_Length', type: 'text' })
  tolerantLength?: string;

  @Column({ name: 'Tolerant_Height', type: 'text' })
  tolerantHeight?: string;

  @Column({ name: 'Tolerant_Color', type: 'text' })
  tolerantColor?: string;

  @Column({ name: 'Tolerant_weight', type: 'text' })
  tolerantWeight?: string;

  @Column({ name: 'UserUpload', type: 'varchar', length: 256 })
  userUpload?: string;

  @Column({ name: 'UserUpdate', type: 'varchar', length: 256 })
  userUpdate?: string;

  @Column({ name: 'Lang', type: 'varchar', length: 256, default: 'vi' })
  lang?: string;

  @Column({ name: 'IsHide', type: 'int', width: 11, default: 0 })
  isHide?: number;

  @Column({ name: 'PhotoDate', type: 'date' })
  photoDate?: Date;

  @Column({ name: 'MarketingPrice', type: 'double' })
  marketingPrice?: number;

  @Column({ name: 'AlibabaDate', type: 'date' })
  alibabaDate?: Date;

  @Column({ name: 'AlibabaLink', type: 'varchar', length: 512 })
  alibabaLink?: string;

  @Column({ name: 'WebsiteLink', type: 'varchar', length: 512 })
  websiteLink?: string;

  @Column({ name: 'WebsiteDate', type: 'date' })
  websiteDate?: Date;

  @Column({ name: 'Segment', type: 'int', width: 11, default: 0 })
  segment?: number;

  @Column({ name: 'Tags', type: 'text' })
  tags?: string;

  @Column({ name: 'MktName', type: 'varchar', length: 256, nullable: false, default: 'mothaiba' })
  mktName!: string;

  @Column({ name: 'MktCategory', type: 'varchar', length: 256, nullable: false, default: 'mothaiba' })
  mktCategory!: string;

  @Column({ name: 'MktShortDescription', type: 'text', nullable: false, default: 'mothaiba' })
  mktShortDescription!: string;

  @Column({ name: 'MktDescription', type: 'text', nullable: false, default: 'mothaiba' })
  mktDescription!: string;

  @Column({ name: 'MktColor', type: 'varchar', length: 256, nullable: false, default: 'mothaiba' })
  mktColor!: string;

  @Column({ name: 'MktAccentColor', type: 'varchar', length: 256, nullable: false, default: 'mothaiba' })
  mktAccentColor!: string;

  @Column({ name: 'MtkShape', type: 'varchar', length: 256, nullable: false, default: 'mothaiba' })
  mtkShape!: string;

  @Column({ name: 'MktProductLine', type: 'varchar', length: 256, nullable: false, default: 'mothaiba' })
  mktProductLine!: string;
}
