import { UserRole } from '../user.entity';

export class CreateUserDto {
  firstName: string;
  lastName: string;
  isActive?: boolean;
  
  // Numeric types
  fingerAmount?: number;        // integer
  age?: number;                 // smallint, defaults to 0 in entity
  accountNumber?: string;       // bigint (string in JS)
  
  // Decimal types
  debt?: number;                // decimal(10,2)
  debt2?: number;               // numeric(10,4)
  debt3?: number;               // real
  
  // Geographic coordinates
  longitude?: number;           // double precision
  latitude?: number;            // double precision
  
  // Money type
  walletBalance?: number;       // money (fixed 2 decimal places)
  
  // String types
  shortDescription?: string;    // varchar(10)
  comment?: string;             // char(10)
  longDescription?: string;     // text

  document?: string;

  // Date & Time types
  birthday?: Date;              // date (YYYY-MM-DD)
  timeComming?: string;         // time (HH:MM:SS)
  timestamp?: Date;             // timestamp (YYYY-MM-DD HH:MM:SS)
  interval?: any;               // interval (e.g., "1 year")

  // Boolean & Enum
  completed?: boolean;
  role?: UserRole;

  // Geometric types
  point?: string;               // "(x,y)"
  line?: string;                // "{A,B,C}" or "[(x1,y1),(x2,y2)]"
  lseg?: string;                // "[(x1,y1),(x2,y2)]"
  box?: string;                 // "((x1,y1),(x2,y2))"
  path?: string;                // "((x1,y1),...)"
  polygon?: string;             // "((x1,y1),...)"
  circle?: string;              // "<(x,y),r>"

  // Network types
  inet?: string;                // "192.168.0.1"
  ip?: string;                  // "192.168.0.0/24" (CIDR)
  macaddress?: string;          // "08:00:2b:01:02:03"
  macaddress8?: string;         // "08:00:2b:01:02:03:04:05"

  // Bit string types
  bit?: string;                 // "10101010" (exact length 8)
  varbit?: string;              // "101" 
  fullTextSearch?: string;      // "'cat':3 'fat':2"

  // JSON types
  activeData?: object;          // { "key": "value" }
  activeDataB?: object;         // { "key": "value" }
  activeDataSimple?: object;    // { "key": "value" }
}
