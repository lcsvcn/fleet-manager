export const  StatusCodeLoginMessages = {
  200: { "message": "Successful login!", "color": "text-green-500" },
  404: { "message": "Email or password field is incorrect", "color": "text-red-500" },
  400: { "message":"Email or password field is missing", "color": "text-red-500" },
  500: { "message":"Server is not responding", "color": "text-red-500" },
};

export const  StatusCodeRegisterMessages = {
  200: { "message": "Successful register!", "color": "text-green-500" },
  404: { "message": "Email field is incorrect", "color": "text-red-500" },
  400: { "message":"Email or password or first name or last name field is missing", "color": "text-red-500" },
  500: { "message":"Server is not responding", "color": "text-red-500" },
};

export const  StatusCodeRecoveryMessages = {
  200: { "message": "Recovery e-mail sent sucessfully!", "color": "text-green-500" },
  404: { "message":"Invalid email", "color": "text-red-500" },
  400: { "message":"Email field is missing", "color": "text-red-500" },
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
