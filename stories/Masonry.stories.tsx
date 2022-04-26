import { Masonry } from '../src';
import { CardWithPicture } from './components/CardWithPicture';

export default {
  title: 'Masonry',
  component: Masonry,
  parameters: {
    docs: {
      page: null,
    },
  },
  argTypes: {
    columns: {
      defaultValue: 6,
      control: { type: 'range', min: 1, max: 12 },
    },
  },
};

export function Basic({ columns }: { columns: number }) {
  return (
    <Masonry columns={columns}>
      <CardWithPicture />
    </Masonry>
  );
}
