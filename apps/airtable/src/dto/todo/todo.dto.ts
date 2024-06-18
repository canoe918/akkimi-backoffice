import { IsDate, IsEnum, IsNumber, IsString, IsUrl } from 'class-validator';
import { TODO_STATUS } from '../../constants/enum';

export class TodoTableDto {
  @IsNumber()
  priority: number;

  @IsEnum(TODO_STATUS)
  status: string;

  @IsString()
  description: string;

  @IsDate()
  endAt: Date;

  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsDate()
  startAt: Date;

  @IsUrl()
  imageUrl: string;
}
