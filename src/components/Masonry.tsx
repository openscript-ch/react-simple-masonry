import { css } from '@emotion/react';
import { Children, HTMLProps, PropsWithChildren } from 'react';

const containerStyle = css`
  display: flex;
  width: auto;
`;

type MasonryProps = PropsWithChildren<{
  columns: number;
}> &
  HTMLProps<HTMLDivElement>;

export function Masonry({ children, columns, css: externalStyles }: MasonryProps) {
  const items = Children.toArray(children);
  return (
    <div css={[containerStyle, externalStyles]}>
      {children}
      {columns}
    </div>
  );
}
