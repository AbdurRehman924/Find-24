export type newUser = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  gender: string;
  dob: string;
  country: string;
};

// export type User = Omit<newUser, "password"> & {
//   location?: {
//     address: string;
//     city: string;
//     state: string;
//   };
//   image?: string;
//   about?: string;
// };
export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: null;
  active: boolean;
  phone: string;
  acceptTerms: boolean;
  newsLetter: boolean;
  street: string;
  city: string;
  zipCode: string;
  gender: string;
  status: string;
  role: string;
  isProvider: boolean;
  profileCompleted: boolean;
  approvedBy: string;
  country: string;
  accessRights: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  remarks: string;
  dob: string;
  image?: string;
  about?: string;
};
