import { Masonry } from '../src';

export default {
  title: 'Masonry',
  component: Masonry,
  parameters: {
    docs: {
      page: null,
    },
  },
};

export function Basic() {
  return <Masonry />;
}
