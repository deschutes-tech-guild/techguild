import { useEffect, useState } from 'react';

// Selecting random background image, credit to @MrKomputerKid for the code, I just "reactified" it.
export default function useSelectBackground(): string {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const images: string[] = [
      'bg1.webp',
      'bg2.webp',
      'bg3.webp',
      'bg4.webp',
      'bg5.webp',
      'bg6.webp',
    ];

    const randomIndex = Math.floor(Math.random() * images.length);

    const baseUrl = '/images/';

    const imageUrl = baseUrl + images[randomIndex];

    setBgImage(imageUrl);
  }, []);

  return bgImage;
}
