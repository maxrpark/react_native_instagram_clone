import {useState} from 'react';

const useForm = <T extends Object>(formData: T) => {
  const [formValues, setFormValues] = useState(formData);

  const handleInputChange = (value: string, field: string) => {
    setFormValues({...formValues, [field]: value});
  };

  return {
    formValues,
    handleInputChange,
  };
};

export default useForm;
