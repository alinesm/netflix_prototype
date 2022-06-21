import React, { MouseEvent } from 'react';

export type Props = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
};
