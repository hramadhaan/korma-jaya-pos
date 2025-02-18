type User = {
  id: number;
  name: string;
  phone: string;
  password?: string;
  role: "ADMIN" | "USER";
  verificationEmail: boolean;
  createdAt: string;
  updatedAt: string;
};
