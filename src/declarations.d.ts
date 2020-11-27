import { AriaAttributes, DOMAttributes } from "react";

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    rel?: string;
    id?: string;
    coin?: string;
    currency?: string;
    theme?: string;
    transparent?: string;
    'show-symbol-logo'?: string;
  }
};
