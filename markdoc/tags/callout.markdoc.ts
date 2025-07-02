import {Callout} from '../../components';

export const callout = {
  render: Callout,
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    title: {
      type: String,
    },
    type: {
      type: String,
      default: 'info',
      matches: ['info', 'success', 'warning', 'error'],
    },
  },
};