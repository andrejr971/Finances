import React, { useRef, useEffect } from 'react';
import Select from 'react-select';
import { useField } from '@rocketseat/unform';

export default function SelectInput({ name, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Select
      ref={selectRef}
      value={defaultValue}
      {...rest}
      classNamePrefix="react-select"
    />
  );
}
