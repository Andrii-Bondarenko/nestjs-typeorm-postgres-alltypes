import { 
  IsBoolean, 
  IsDate,
  IsEnum,
  IsInt,
  IsIP,
  IsNotEmpty, 
  IsNumber,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  IsBase64,
  MaxLength,
  IsMACAddress,
  IsArray,
  ArrayNotEmpty,
  IsUrl
} from 'class-validator';
import { Type } from 'class-transformer';
import { UserRole } from '../user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsInt()
  fingerAmount?: number;

  @IsOptional()
  @IsInt()
  age?: number;

  @IsOptional()
  @IsNumberString()
  accountNumber?: string;

  @IsOptional()
  @IsNumber()
  debt?: number;

  @IsOptional()
  @IsNumber()
  debt2?: number;

  @IsOptional()
  @IsNumber()
  debt3?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  walletBalance?: number;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  shortDescription?: string;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  comment?: string;

  @IsOptional()
  @IsString()
  longDescription?: string;

  @IsOptional()
  @IsBase64()
  document?: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  birthday?: Date;

  @IsOptional()
  @IsString()
  timeComming?: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  timestamp?: Date;

  @IsOptional()
  @IsString()
  interval?: any;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @IsOptional()
  @IsString()
  point?: string;

  @IsOptional()
  @IsString()
  line?: string;

  @IsOptional()
  @IsString()
  lseg?: string;

  @IsOptional()
  @IsString()
  box?: string;

  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @IsString()
  polygon?: string;

  @IsOptional()
  @IsString()
  circle?: string;

  @IsOptional()
  @IsIP()
  inet?: string;

  @IsOptional()
  @IsString()
  ip?: string;

  @IsOptional()
  @IsMACAddress()
  macaddress?: string;

  @IsOptional()
  @IsString()
  macaddress8?: string;

  @IsOptional()
  @IsString()
  bit?: string;

  @IsOptional()
  @IsString()
  varbit?: string;

  @IsOptional()
  @IsString()
  fullTextSearch?: string;

  @IsOptional()
  @IsObject()
  activeData?: Record<string, unknown>;

  @IsOptional()
  @IsObject()
  activeDataB?: Record<string, unknown>;

  @IsOptional()
  @IsObject()
  activeDataSimple?: Record<string, unknown>;

  @IsOptional()
  @IsString()
  activeDataC?: Record<string, unknown>;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  articles?: string[];

  @IsArray()
  @IsInt({ each: true })
  fingers?: number[];

  @IsUrl(
    { protocols: ['http', 'https'], require_protocol: true },
    { message: 'Invalid URL format' },
  )
  url?: string;

  @IsString()
  @IsOptional()
  workDateRange: string

  @IsString()
  @IsOptional()
  intRange: string
}
