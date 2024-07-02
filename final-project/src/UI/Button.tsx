import { type ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';

type ButtonType = ComponentPropsWithoutRef<'button'> & {
  textOnly?: boolean;
  to?: never;
};

type LinkType = ComponentPropsWithoutRef<typeof Link> & {
  textOnly?: boolean;
  to?: string;
};

function isLinkProps(props: ButtonType | LinkType): props is LinkType {
  return 'to' in props;
}

export default function Button(props: ButtonType | LinkType) {
  if (isLinkProps(props)) {
    return (
      <Link
        className={props.textOnly ? 'button button--text-only' : 'button'}
        {...props}
      ></Link>
    );
  } else {
    return (
      <button
        {...props}
        className={
          props.textOnly
            ? `button button--text-only ${props.className}`
            : `button ${props.className}`
        }
      ></button>
    );
  }
}
