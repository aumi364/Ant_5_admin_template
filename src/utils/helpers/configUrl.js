const convertToQueryString = query => {
  const [queryArr] = Object.entries(query);

  return `${queryArr[0]}=${queryArr[1]}`;
};
const createQueryParams = (endpoint, query) => {
  const queryKeys = Object.keys(query);

  let url = endpoint;
  let firstQuery = false;
  queryKeys?.forEach((queryKey, index) => {
    if (
      query[queryKey] !== null &&
      query[queryKey] !== undefined &&
      query[queryKey] !== 'null' &&
      query[queryKey] !== 'undefined'
    ) {
      if (!firstQuery) {
        url = url + '?' + convertToQueryString({ [queryKey]: query[queryKey] });
        firstQuery = true;
      } else {
        url = url + '&' + convertToQueryString({ [queryKey]: query[queryKey] });
      }
    }
  });

  return url;
};

const configUrl = ({ endpoint, query }) => {
  if (!query || Object.keys(query).length === 0) {
    return endpoint;
  }
  return createQueryParams(endpoint, query);
};

export default configUrl;
