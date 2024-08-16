import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'naman_admin', name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true, name: 'id' })
  id!: number;

  @Column('varchar', { nullable: false, length: 255, name: 'name' })
  name?: string;

  @Column('varchar', { nullable: false, length: 255, name: 'user_name' })
  userName!: string;

  @Column('varchar', { nullable: false, length: 255, name: 'password' })
  password!: string;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'updated_at',
  })
  updated_at!: Date;

  @Column('timestamp', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_at',
  })
  created_at!: Date;
}
