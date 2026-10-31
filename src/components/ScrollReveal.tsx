import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

// Content is visible immediately, including when JavaScript or motion is disabled.
export default function ScrollReveal({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}
