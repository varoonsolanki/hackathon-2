import { Josefin_Sans, Lato,} from 'next/font/google';

// Configure the font with options (optional)
 export const josefin_Sans = Josefin_Sans({
  subsets: ['latin'],  // Specify the subset you want
  weight: ['400', '700'], // Add required font weights
});

export const lato = Lato({
    subsets: ['latin'],
    weight: ['400','700'],
})
