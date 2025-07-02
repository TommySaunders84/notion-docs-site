/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'styled-jsx/css' {
  export default function css(strings: TemplateStringsArray, ...values: any[]): string;
}

declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: any;
  export default content;
}

export {};
