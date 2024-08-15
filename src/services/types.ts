export type RegisterType = {
  email: string;
  password: string;
  name: string;
  device_type: string;
  avatar: string;
  locality_id: string;
  phone: string;
  password_confirmation: string;
};

export type LoginType = {
  email: string;
  password: string;
};
