export const  StatusCodeLoginMessages = {
  200: { "message": "Successful login, loading dashboard...", "color": "text-green-success" },
  404: { "message": "Email or password field is incorrect", "color": "text-red-error" },
  401: { "message": "password field is incorrect", "color": "text-red-error" },
  400: { "message": "Required field is missing", "color": "text-red-error" },
  500: { "message":"Server is not responding", "color": "text-red-error" },
};

export const StatusCodeRegisterMessages = {
  200: { "message": "Successful register!", "color": "text-green-success" },
  404: { "message": "Email field is incorrect", "color": "text-red-error" },
  400: { "message": "Required field is missing", "color": "text-red-error" },
  409: { "message":"Email is already registered", "color": "text-red-error" },
  500: { "message":"Server is not responding", "color": "text-red-error" },
};

export const  StatusCodeRecoveryMessages = {
  200: { "message": "Recovery e-mail sent sucessfully!", "color": "text-green-success" },
  404: { "message":"Invalid email", "color": "text-red-error" },
  400: { "message":"Email field is missing", "color": "text-red-error" },
};

export const  LoginFormTypes = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  RECOVERY: "RECOVERY",
};

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];

export const baseUrl = "https://fleet-manager-backend.onrender.com/api/v1";

// Use below for testing
// export const baseUrl = "http://localhost:3100/api/v1";