import { useLocation } from 'react-router';

export const stripTrailingSlash = str => {
  if (str.substr(-1) === '/') {
    return str.substr(0, str.length - 1);
  }
  return str;
};

export const excludeById = (events, id) =>
  events.filter(item => item.public_id !== id);

/**
 * Convert date to **DD MMM YYYY** - `06 Oct 2021`
 * @param {String} value
 * @param {Boolean} short
 * @returns
 */
export const getConvertedDate = (value, short = true) => {
  const newDate = new Date(value);
  const date = `0${newDate.getDate()}`.slice(-2);
  const month = newDate.toLocaleString('default', {
    month: short ? 'short' : 'long',
  });
  const year = newDate.getFullYear();
  return `${date} ${month} ${year}`;
};

/**
 * Sanake case to readable text
 * @param {String} value
 * @returns
 */
export const formatReadable = value => {
  const data = value.charAt(0).toUpperCase() + value.slice(1);
  return data.replace(/_/g, ' ');
};

/**
 * Rename specific keys of an object
 * @param {Object} obj
 * @param {Object} newKeys
 * @returns
 */
export const renameObjKeys = (obj, newKeys) => {
  if (obj && Object.keys(obj).length > 0) {
    const keyValues = Object.keys(obj).map(key => {
      const newKey = newKeys[key] || key;
      return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
  }

  return {};
};

/**
 * Categorise permissions list
 */
export const categorisePermissions = data => {
  if (data?.length > 0) {
    return data.reduce((acc, curr) => {
      const regex = /_(.*)/g;
      const matched = curr.match(regex);
      const key = matched[0]
        .replace('_', '')
        .replace('datamodel', '')
        .replace('model', '');
      const value = `${key}_${curr.replace(regex, '')}`;
      acc.push(value.toUpperCase());
      return acc;
    }, []);
  }
  return [];
};

/**
 * Find a string recursively in an object
 */
export const getErrorStr = errRes => {
  if (typeof errRes === 'string') {
    return errRes;
  }
  const key = Object.keys(errRes)[0];
  const value = errRes[key];
  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'object') {
    return getErrorStr(value);
  }

  if (Array.isArray(value)) {
    const firstValue = value[0];
    if (typeof firstValue === 'string') {
      return firstValue;
    }

    if (typeof firstValue === 'object') {
      return getErrorStr(firstValue);
    }
  }

  return 'Something went wrong!';
};

export const getErrorMessage = message => {
  if (typeof message === 'string') {
    return message;
  }

  if (typeof message === 'object') {
    return getErrorStr(message);
  }

  return 'Something went wrong!';
};

export function useQuery() {
  const { search } = useLocation();

  return new URLSearchParams(search);
}

export const createURLSearchParams = (params, newParams) => {
  const query = new URLSearchParams();
  if (params) {
    const oldQuery = new URLSearchParams(params);
    oldQuery.forEach((value, key) => {
      if (value) {
        query.append(key, value);
      } else {
        query.delete(key);
      }
    });
  }

  if (newParams) {
    Object.keys(newParams).forEach(key => {
      if (newParams[key]) {
        query.set(key, newParams[key]);
      } else {
        query.delete(key);
      }
    });
  }

  return query.toString();
};

export const getURLSearchParams = (params, items) => {
  const query = new URLSearchParams(params);
  return items.reduce((acc, curr) => {
    acc[curr] = query.get(curr);
    return acc;
  }, {});
};

export const createURL = (path, params) => {
  if (!params) return path;

  if (typeof params === 'object' || params instanceof URLSearchParams) {
    return `${path}?${params.toString()}`;
  }

  return `${path}?${params}`;
};
