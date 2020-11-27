import { AriaAttributes, DOMAttributes } from "react";

declare module 'react' {
  interface HTMLAttributes<div> extends AriaAttributes, DOMAttributes<div> {
    rel?: string;
    id?: string;
    coin?: string;
    currency?: string;
    theme?: string;
    transparent?: string;
    show-symbol-logo?: string;
  }
};
