// Define interface for entire company data structure
export interface CompanyData {
  [departmentName: string]: DepartmentData;
}
// Define interface for department data
export interface DepartmentData {
  male?: number;
  female?: number;
  ageRange?: string;
  hair: HairCount;
  addressUser: { [firstNamelastName: string]: Address };
}
// Define interface for hair count information
export interface HairCount {
  [hairColor: HairColor]: number; // Key is hair color (string), value is hair count (number)
}

export type HairColor = string;

// Define types for primitive values
export type Gender = "male" | "female";

// Define interface for address information
export interface Address {
  zipCode: string;
}

// Define interface for user information within a department
export interface User {
  name: string;
  address: Address;
}
