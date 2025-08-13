import React from 'react';

export default function Button({ children, className = '', as = 'button', ...rest }: any) {
  const Cmp: any = as;
  return (
    <Cmp
      className={`inline-flex items-center justify-center px-4 py-2 rounded-2xl shadow-sm border bg-brand-ink text-white hover:opacity-90 transition ${className}`}
      {...rest}
    >
      {children}
    </Cmp>
  );
}