# Turtle Dey - The Movement

A brutalist, cartoon-style Solana token landing page featuring the OG character from the Solana swamps.

## Features

- 🐢 **Brutalist Design** - Bold, chunky borders and shadows
- 🎨 **Cartoon Aesthetic** - Playful fonts and vibrant colors
- 🎭 **Animated Elements** - Floating badges, marquee text, and AOS animations
- 📱 **Fully Responsive** - Works on all devices
- 🎯 **Interactive** - Copy contract address, smooth scrolling navigation

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling with custom brutalist design
- **AOS** - Scroll animations
- **Font Awesome** - Icons
- **Google Fonts** - Chewy & Patrick Hand

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Customization

### Colors

Edit `tailwind.config.js` to change colors:
- `turtle-green`: `#88D66C`
- `turtle-dark`: `#2C3E2E`
- `bg-cream`: `#FDFBF7`
- `accent-yellow`: `#FFD93D`
- `accent-orange`: `#FF6B6B`
- `accent-blue`: `#4D96FF`

### Contract Address

Update the contract address in `src/App.jsx`:
- Find the `copyToClipboard` function call
- Replace `'8sF9...xKj9s8d7f6g5h4j3k2l1...pump'` with your actual address

### Social Links

Update the social media links in the navigation and footer sections.

## Deployment

This project is configured for easy deployment on Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite settings
4. Deploy!

## License

MIT
