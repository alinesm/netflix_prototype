import React from 'react';
import { Errorstyled } from './form-error.styled';
import { Props } from './form-error.type';

export default function FormError({ message }: Props) {
  return (
    <Errorstyled>
      {message}
    </Errorstyled>
  );
}
