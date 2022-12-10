import React from 'react';
import { Select } from 'antd';
import { Flex } from '../styled';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';

const FormSelect = ({
  data,
  placeholder,
  icon,
  valueKey = 'id',
  nameKey = 'name',
  onChange,
  value,
  ...props
}) => {
  return (
    <Select
      type
      optionLabelProp="label"
      placeholder={
        <Flex justify={'flex-start'} gap={'.3rem'}>
          <Icon component={icon} />
          {placeholder}
        </Flex>
      }
      value={value}
      onChange={onChange}
      // suffixIcon={<Icon component={IconChevronDown} />}
      {...props}
    >
      {data?.map(d => (
        <Select.Option
          key={d?.[valueKey]}
          value={d?.[valueKey]}
          label={
            <Flex justify={'flex-start'} gap={'.3rem'}>
              <Icon component={icon} />
              {d?.[nameKey]}
            </Flex>
          }
        >
          {d?.[nameKey]}
        </Select.Option>
      ))}
    </Select>
  );
};

FormSelect.propTypes = {
  data: PropTypes.array,
  placeholder: PropTypes.string,
  icon: PropTypes.elementType,
  valueKey: PropTypes.string,
  nameKey: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default FormSelect;
