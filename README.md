# Walls - Mobile Wallpaper App

A React Native application for discovering, saving, and managing mobile wallpapers built with Expo Router.

## Features

- 📱 Browse curated wallpapers in the Explore tab
- ❤️ Like and save favorite wallpapers
- 📚 Personal wallpaper library management
- 🔍 Discover suggested wallpapers
- 👤 User account management
- 🌓 Support for both light and dark themes

## Tech Stack

- [Expo](https://expo.dev/) - React Native development platform
- [Expo Router](https://docs.expo.dev/routing/introduction/) - File-based routing
- [React Navigation](https://reactnavigation.org/) - Navigation library
- [@gorhom/bottom-sheet](https://gorhom.github.io/react-native-bottom-sheet/) - Bottom sheet component
- [Reanimated](https://docs.swmansion.com/react-native-reanimated/) - Animations
- [Expo Haptics](https://docs.expo.dev/versions/latest/sdk/haptics/) - Haptic feedback

## Getting Started

### Prerequisites

- Node.js >= 14
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/walls.git
cd walls
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

## Project Structure

```
walls/
├── app/                   # Main application code
│   ├── (auth)/           # Authentication routes
│   ├── (tabs)/           # Tab navigation screens
│   └── _layout.tsx       # Root layout
├── components/           # Reusable components
├── constants/           # App constants and theme
├── hooks/              # Custom hooks
├── services/          # API and other services
└── types/            # TypeScript definitions
```

## Development

### Running on iOS Simulator

```bash
npm run ios
# or
yarn ios
```

### Running on Android Emulator

```bash
npm run android
# or
yarn android
```

### Testing

```bash
npm test
# or
yarn test
```

## Environment Variables

Create a `.env` file in the root directory:

```
API_URL=your_api_url
API_KEY=your_api_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow the ESLint configuration
- Write unit tests for new features
- Update documentation as needed
- Follow the conventional commits specification

## Troubleshooting

- If you encounter build issues, try clearing the cache:
  ```bash
  expo start -c
  ```
- For iOS build problems:
  ```bash
  cd ios && pod install && cd ..
  ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Expo Team](https://expo.dev/) for the amazing development platform
- [React Native Community](https://reactnative.dev/community/overview) for their support
- All contributors who have helped this project grow
