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
}
