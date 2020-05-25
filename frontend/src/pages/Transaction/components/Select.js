import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@rocketseat/unform';

const Select = ({ name, options, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <ReactSelect
      defaultValue={
        defaultValue && options.find((option) => option.value === defaultValue)
      }
      ref={selectRef}
      options={options}
      {...rest}
    />
  );
};
export default Select;
