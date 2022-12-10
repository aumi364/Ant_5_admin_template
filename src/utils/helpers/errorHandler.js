import toast from 'react-hot-toast';

export const errorHandler = data => {
  console.log(data);
  if (data?.code === 'non_field_error') {
    toast.error(data?.details.message);
  } else if (data?.code === 'field_error') {
    console.log(data?.details);
    const errorKeys = Object.keys(data?.details);
    errorKeys.forEach(errorKey => {
      data?.details?.[errorKey]?.forEach(error => {
        return toast.error(`${[errorKey]} -${error}`);
      });
    });
  } else {
    toast.error('Something went wrong');
  }
};
