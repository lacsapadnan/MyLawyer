import {useState} from 'react';

export const useForm = initialValue => {
  const [values, setValue] = useState(initialValue);
  return [
    values,
    (formType, formvalue) => {
      if (formType === 'reset') {
        return setValue(initialValue);
      }
      return setValue({...values, [formType]: formvalue});
    },
  ];
};
