import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

export enum UserRole {
    ADMIN = "admin",
    EDITOR = "editor",
    GHOST = "ghost",
}

@Entity()
export class User extends BaseEntity {
  // VARCHAR - Text data, example: "John"
  @Column()
  firstName: string;

  // VARCHAR - Text data, example: "Doe"
  @Column()
  lastName: string;

  // BOOLEAN - True/false values, example: true or false
  @Column({ default: true })
  isActive: boolean;

  // INTEGER - Range: -2,147,483,648 to +2,147,483,647
  // Example: 10 (number of fingers), 1000000 (product quantity)
  @Column('integer', { nullable: true })
  fingerAmount: number;

  // SMALLINT - Range: -32,768 to +32,767
  // Example: 25 (age in years), perfect for small numbers to save space
  @Column('smallint', { default: 0 })
  age: number;

  // BIGINT - Range: -9,223,372,036,854,775,808 to +9,223,372,036,854,775,807
  // Example: "9876543210123456" (large account numbers, stored as string in JS to avoid precision loss)
  @Column('bigint', { nullable: true })
  accountNumber: string;

  // DECIMAL/NUMERIC - Exact precision for financial calculations
  // Up to 131,072 digits before decimal; up to 16,383 digits after decimal
  // Example: 1234.56 (money, currency amounts where precision is critical)
  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  debt: number;

  // NUMERIC - Same as DECIMAL, exact precision
  // Example: 99999.9999 (scientific measurements, financial data)
  @Column('numeric', { precision: 10, scale: 4, nullable: true })
  debt2: number;

  // REAL - Floating point, 6 decimal digits precision (4 bytes)
  // Example: 3.14159 (approximations, less precise calculations)
  @Column('real', { nullable: true })
  debt3: number;

  // DOUBLE PRECISION - Floating point, 15 decimal digits precision (8 bytes)
  // Example: 3.141592653589793 (scientific calculations, coordinates)
  @Column('double precision', { nullable: true })
  longitude: number;

  // DOUBLE PRECISION - Geographic coordinate
  // Example: 40.712776 (latitude of New York City), Range: -90 to +90
  @Column('double precision', { nullable: true })
  latitude: number;

  // SMALLINT AUTO-INCREMENT - Range: 1 to 32,767
  // Example: 1, 2, 3... (auto-generated sequential ID for small datasets)
  @PrimaryGeneratedColumn('increment', { type: 'smallint' })
  serialNumber: number;

  // INTEGER AUTO-INCREMENT - Range: 1 to 2,147,483,647
  // Example: 1, 2, 3... (standard auto-incrementing ID for most use cases)
  @PrimaryGeneratedColumn('increment', { type: 'integer' })
  serialNumber2: number;

  // BIGINT AUTO-INCREMENT - Range: 1 to 9,223,372,036,854,775,807
  // Example: 1, 2, 3... (auto-incrementing ID for very large datasets)
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  serialNumber3: number;

  // MONEY - Fixed 2 decimal places, single currency
  // Range: -92,233,720,368,547,758.08 to +92,233,720,368,547,758.07
  // Example: 1234.56 (stored as $1,234.56)
  // Use for: Simple single-currency systems, avoid for multi-currency
  @Column('money', { nullable: true })
  walletBalance: number;

  // VARCHAR(10) - Variable length string, max 10 characters
  // Storage: actual text length + 1 byte (up to 126 chars) or + 4 bytes (127+ chars)
  // Example: "Hello" uses 6 bytes, "Hi" uses 3 bytes
  // Use for: Short text with known max length (usernames, codes, titles)
  @Column("varchar", { length: 10, nullable: true })
  shortDescription: string;

  // CHAR(10) - Fixed length string, always 10 characters
  // Storage: always 10 bytes (padded with spaces if shorter)
  // Example: "Hi" is stored as "Hi        " (8 spaces added)
  // Use for: Fixed-length codes (country codes, status codes, ISBN)
  @Column("char", { length: 10, nullable: true })
  comment: string;

  // TEXT - Unlimited length string
  // Storage: actual text length + overhead (can store up to 1GB)
  // Example: Long articles, blog posts, large descriptions
  // Use for: Large text content where length is unpredictable
  @Column("text", { nullable: true })
  longDescription: string;

  @Column("bytea", { nullable: true })
  document: Buffer;

  // DATE - Stores year, month, day (no time)
  // Format: YYYY-MM-DD
  // Example: '1990-01-01' (Birthdays, holidays)
  @Column("date", { nullable: true })
  birthday: Date;

  // TIME - Stores time of day (no date)
  // Format: HH:MM:SS
  // Example: '14:30:00' (Opening hours, alarm time)
  // Note: TypeORM usually returns this as constant string, not Date object
  @Column("time", { nullable: true })
  timeComming: string;

  // TIMESTAMP - Stores date and time (without timezone)
  // Format: YYYY-MM-DD HH:MM:SS
  // Example: '2023-12-25 10:00:00' (Event start, log creation)
  @Column("timestamp", { nullable: true })
  releaseDate: Date;

  // INTERVAL - Stores a span of time
  // Format: P1Y2M3DT4H5M6S (ISO 8601) or postgres format like "1 year 2 mons"
  // Example: '1 year', '3 days 4 hours' (Subscription duration, estimated time)
  // Note: Returns an object like { years: 1, months: 2... } or string depending on config
  @Column("interval", { nullable: true })
  interval: any;

  // BOOLEAN - True/false values, example: true or false
  @Column({ default: true })
  completed: boolean;

  // ENUM - predefined list of values
  // Example: 'admin', 'editor', 'ghost'
  @Column({ type: "enum", enum: UserRole, default: UserRole.GHOST })
  role: UserRole;

  // POINT - Geometric Point
  // Format: (x,y)
  // Example: '(10,10)' meaning point at x=10, y=10
  @Column("point", { nullable: true })
  point: string;

  // LINE - Geometric Line (infinite)
  // Format: {A,B,C} (Ax + By + C = 0) or [(x1,y1),(x2,y2)]
  @Column("line", { nullable: true })
  line: string;

  // BOX - Rectangular Box
  // Format: ((x1,y1),(x2,y2)) - opposite corners
  // Example: '((10,10),(20,20))'
  @Column("box", { nullable: true })
  box: string;

  // LSEG - Line Segment (finite)
  // Format: [(x1,y1),(x2,y2)] - endpoints
  // Example: '[(10,10),(20,20)]'
  @Column("lseg", { nullable: true })
  lseg: string;

  // PATH - Geometric Path (list of connected points)
  // Format: ((x1,y1),(x2,y2),...) for closed, [(x1,y1),...] for open
  @Column("path", { nullable: true })
  path: string;

  // POLYGON - Closed Geometric Area
  // Format: ((x1,y1),(x2,y2),...)
  @Column("polygon", { nullable: true })
  polygon: string;

  // CIRCLE - Geometric Circle
  // Format: <(x,y),r> where (x,y) is center and r is radius
  // Example: '<(10,10),5>'
  @Column("circle", { nullable: true })
  circle: string;

  // INET - IPv4 or IPv6 host address, and optionally its subnet
  // Example: '192.168.0.1' or '192.168.0.1/24'
  @Column("inet", { nullable: true })
  inet: string;

  // CIDR - IPv4 or IPv6 network specification
  // Example: '192.168.0.0/24' or '2001:4f8:3:ba::/64'
  @Column("cidr", { nullable: true })
  ip: string;

  // MACADDR - MAC address (6 bytes)
  // Example: '08:00:2b:01:02:03'
  @Column("macaddr", { nullable: true })
  macaddress: string;

  // MACADDR8 - MAC address (8 bytes / EUI-64)
  // Example: '08:00:2b:01:02:03:04:05'
  @Column("macaddr8", { nullable: true })
  macaddress8: string;

  // BIT - Fixed-length bit string
  // Example: '10101010' (must be exact length)
  @Column({ type: "bit", nullable: true, length: 8 })
  bit: string;

  // VARBIT - Variable-length bit string
  // Example: '101' or '10101'
  @Column("varbit", { nullable: true })
  varbit: string;

  // TSVECTOR - Text search vector (sorted list of distinct lexemes)
  // Example: "'cat':3 'fat':2 'rat':4" (used for full-text search)
  // Note: Usually auto-generated from other text columns
  @Column({
    type: 'tsvector',
    nullable: true,
  })
  fullTextSearch: string;

  // JSON - Stores JSON data as text
  // Pros: Preserves original formatting (whitespace, key order)
  // Cons: Slower processing, no indexing support
  // Use for: Logs, auditing, where data structure shouldn't change
  @Column("json", { nullable: true })
  activeData: object;

  // JSONB - Binary JSON storage (Best for Postgres)
  // Pros: Faster processing, supports indexing (GIN/GIST), prevents duplicate keys
  // Cons: Slightly slower insertion (due to conversion), doesn't preserve whitespace/order
  // Use for: Configs, flexible schemas, NoSQL-like data storage
  @Column("jsonb", { nullable: true })
  activeDataB: object;

  // SIMPLE-JSON - TypeORM specific type (usually matches 'text' in DB)
  // Pros: Works across different databases (MySQL, SQLite, etc.)
  // Cons: No database-level JSON validation or query features
  // Use for: Cross-database compatibility
  @Column("simple-json", { nullable: true })
  activeDataSimple: object;

  @Column("jsonpath", { nullable: true })
  activeDataC: object;
}

