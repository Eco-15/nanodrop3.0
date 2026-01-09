# NanoDrop 3.0 - Video Expansion Component

An immersive scroll-based video expansion component built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Scroll-based video expansion**: Video smoothly expands as you scroll
- **Multiple video sources**: Support for local videos and YouTube embeds
- **Mobile-friendly**: Touch-optimized interactions for mobile devices
- **Customizable**: Easy to customize backgrounds, titles, and styling
- **Smooth animations**: Powered by Framer Motion for silky-smooth transitions

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **shadcn/ui** - Component architecture

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Component Usage

### Basic Video Example

```tsx
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

export default function Page() {
  return (
    <ScrollExpandMedia
      mediaType='video'
      mediaSrc='your-video-url.mp4'
      posterSrc='your-poster-image.jpg'
      bgImageSrc='background-image.jpg'
      title='Your Title Here'
      date='Subtitle or Date'
      scrollToExpand='Scroll to Expand'
      textBlend={true}
    >
      {/* Your content here */}
      <div>
        <h2>Content that appears after expansion</h2>
      </div>
    </ScrollExpandMedia>
  );
}
```

### YouTube Video Example

```tsx
<ScrollExpandMedia
  mediaType='video'
  mediaSrc='https://www.youtube.com/watch?v=VIDEO_ID'
  bgImageSrc='background-image.jpg'
  title='Your Title'
  scrollToExpand='Scroll to Expand'
>
  {/* Your content */}
</ScrollExpandMedia>
```

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mediaType` | `'video' \| 'image'` | `'video'` | Type of media to display |
| `mediaSrc` | `string` | **required** | URL to video or image |
| `posterSrc` | `string` | `undefined` | Poster image for video |
| `bgImageSrc` | `string` | **required** | Background image URL |
| `title` | `string` | `undefined` | Main title text |
| `date` | `string` | `undefined` | Subtitle or date text |
| `scrollToExpand` | `string` | `undefined` | Instruction text |
| `textBlend` | `boolean` | `false` | Enable mix-blend-difference for text |
| `children` | `ReactNode` | `undefined` | Content shown after expansion |

## Project Structure

```
nanodrop3.0/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Demo page
├── components/
│   └── ui/
│       └── scroll-expansion-hero.tsx  # Main component
├── lib/
│   └── utils.ts             # Utility functions
├── components.json          # shadcn/ui config
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Important: components/ui Directory

The `/components/ui` directory is essential for this project because:

1. **shadcn/ui Convention**: shadcn/ui expects UI components to be in this location
2. **Import Aliases**: Configured in `components.json` to use `@/components/ui` path
3. **Organization**: Keeps UI components separate from feature components
4. **Consistency**: Maintains a consistent structure across shadcn/ui-based projects

If you need to change the components path, update the `components.json` file.

## Customization

### Changing Video Source

Simply update the `mediaSrc` prop with your video URL. The component supports:
- Direct video URLs (.mp4, .webm, etc.)
- YouTube video links (will auto-embed)

### Styling

The component uses Tailwind CSS classes. You can customize:
- Colors: Modify text colors in the component or via Tailwind config
- Sizes: Adjust `mediaWidth` and `mediaHeight` calculations in the component
- Animations: Modify Framer Motion animation values

### Background Images

Update `bgImageSrc` prop with your desired background. For remote images, ensure the domain is added to `next.config.ts`:

```ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-domain.com',
    },
  ],
}
```

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
