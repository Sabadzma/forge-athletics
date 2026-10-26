import type { ComponentConfig } from '@puckeditor/core';

type TextProps = {
  text: string;
};

export const Text: ComponentConfig<TextProps> = {
  label: 'Text',
  fields: {
    text: { type: 'textarea', label: 'Text' },
  },
  defaultProps: {
    text: 'Add your text here.',
  },
  render: ({ text }) => <p className="puck-text">{text}</p>,
};
