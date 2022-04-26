import { loremIpsum } from 'lorem-ipsum';

export function CardWithPicture() {
  const randomPhoto = `image-${Math.floor(Math.random() * 10) + 1}.jpg`;
  return (
    <div>
      <img src={`./statics/${randomPhoto}`} alt="Place holder with individual height" />
      <h2>{loremIpsum({ count: Math.floor(Math.random() * 5) + 1, units: 'words' })}</h2>
      <p>{loremIpsum({ count: Math.floor(Math.random() * 5) + 1 })}</p>
    </div>
  );
}
