export const required = (value) => (value ? undefined : 'this field is required ❗');

export const string = (value) =>
  /^[A-Za-z\s]+$/.test(value) ? undefined : 'Only letters';

export const number = (value) => (!Number(value) ? 'Only numbers' : undefined);

export const trim = (value) =>
  !/(^\s)|(\s$)/.test(value) ? undefined : 'Invalid format';

  export const minValue = (value) =>
  value < 1 ? 'Minimum age is 1' : undefined;

export const composeValidators =
  (...validators) =>
  (value) => validators.reduce(
      (error, validator) => error || validator(value),
      undefined);
      
