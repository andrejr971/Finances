import React, { useRef, useEffect } from 'react';
import CurrencyInput from 'react-currency-masked-input';

import { useField } from '@rocketseat/unform';

export default function InputMask({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <CurrencyInput ref={inputRef} {...rest} />;
}
