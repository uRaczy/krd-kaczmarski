export interface ResponseDebt {
  Id: number;
  Number: string;
  Name: string;
  Value: number;
  NIP: string;
  Date: string;
  DocumentType: string;
  Price: number;
  Address: string;
}

export interface ParsedDebt {
  id: number;
  name: string;
  nip: string;
  value: number;
  date: Date;
}
