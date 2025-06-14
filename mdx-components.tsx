import type { MDXComponents } from 'mdx/types';

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    h1: (props) => (
      <h1
        {...props}
        className='mt-8 mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100'
      />
    ),
    h2: (props) => (
      <h2
        {...props}
        className='mt-8 mb-3 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100'
      />
    ),
    h3: (props) => (
      <h3
        {...props}
        className='mt-6 mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100'
      />
    ),
    p: (props) => <p {...props} className='mb-4 leading-7 text-gray-700 dark:text-gray-300' />,
    ul: (props) => (
      <ul {...props} className='mb-4 ml-8 list-disc text-gray-700 dark:text-gray-300' />
    ),
    ol: (props) => (
      <ol {...props} className='mb-4 ml-8 list-decimal text-gray-700 dark:text-gray-300' />
    ),
    li: (props) => <li {...props} className='mb-1 leading-7' />,
    blockquote: (props) => (
      <blockquote
        {...props}
        className='mb-4 border-l-4 border-gray-200 pl-4 text-gray-700 italic dark:border-gray-700 dark:text-gray-300'
      />
    ),
    code: (props) => (
      <code
        {...props}
        className='rounded bg-gray-100 px-1 py-0.5 font-mono text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200'
      />
    ),
    pre: (props) => (
      <pre
        {...props}
        className='mb-4 overflow-x-auto rounded-lg bg-gray-100 p-4 font-mono text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200'
      />
    ),
    ...components
  };
};
