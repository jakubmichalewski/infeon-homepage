export const emailRegex = /^[^@\s]+@[^@\s]+\.[^@.\s]+$/;
export const phoneNumberRegex = /^(\+?\d{1,3})? ?\d{1,4}( ?\d{2,4}){1,4}$/;

export const validateRequired = (
  message: string = 'Required field',
  condition?: boolean
) => {
  return {
    required: {
      value: condition ?? true,
      message: message
    }
  };
};

export const validateEmail = (
  message = 'Email address must be in the correct format, ex.: name@example.com'
) => {
  return {
    pattern: {
      value: emailRegex,
      message
    }
  };
};

export const validatePhoneNumber = (message = 'Invalid phone number') => {
  return {
    pattern: {
      value: phoneNumberRegex,
      message
    }
  };
};
