export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed?: boolean;
}

export interface TodoResponse {
  user: Todos;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

export interface GeoLocation {
  let: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface QuestionSet {
  questionId: number;
  questionTitle: string;
  responseSet: string[];
  isShow : boolean
}

export interface ResponseSet {
  responseSet: string[];
}

export interface ReviewResponseSet{
  questionId: number;
  questionTitle: string;
  responseSet: string[];
  
}