# Assets Directory

This directory contains all the static assets used in the ALX Listing App project.

## Structure

- `images/`: Property images and other visual assets
- `icons/`: SVG icons and small graphics
- `placeholder-image.svg`: Default placeholder for property images
- `star-icon.svg`: Star rating icon

## Usage

Assets can be accessed using Next.js built-in image optimization:

```jsx
import Image from 'next/image';

<Image 
  src="/assets/placeholder-image.svg" 
  alt="Property" 
  width={300} 
  height={200} 
/>
```

For SVG icons, you can import them directly or use them as background images in CSS.
