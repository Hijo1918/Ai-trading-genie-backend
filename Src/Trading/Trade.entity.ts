import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Trade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  symbol: string;

  @Column()
  strategy: string;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}
