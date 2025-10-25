# DayGoals

A React Native mobile application for managing daily goals and tasks. Built with React Native and Expo, this app helps users track their daily objectives in a clean and intuitive interface.

## Demo

### App Preview

![DayGoals App Demo](./assets/goals.jpg)

### Features Demonstration

Download the full demo video:

- [Download Demo Video (v1.0.0)](https://github.com/abdelfatahmoustafa/DayGoals_ReactNative/releases/download/v1.0.0/demo.mov)

The demo shows the main features of the DayGoals app:

- Adding new goals
- Removing completed goals
- User interface navigation
- Modal interaction
- Clean and responsive design

## Features

- ✅ Add new daily goals
- 🗑️ Remove completed goals
- 📱 Cross-platform support (iOS and Android)
- 🎨 Clean and modern UI
- 🔒 Safe area support for different devices
- 💪 Written in TypeScript for better type safety

## Technologies Used

- React Native (v0.81.5)
- Expo (v54.0.20)
- TypeScript
- React Native Safe Area Context
- Expo Vector Icons

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

## Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd DayGoals
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

## Running the App

- For iOS:

```bash
npm run ios
# or
yarn ios
```

- For Android:

```bash
npm run android
# or
yarn android
```

- For web:

```bash
npm run web
# or
yarn web
```

## Project Structure

```
DayGoals/
├── App.tsx           # Main application component
├── components/       # Reusable components
│   ├── GoalInput.tsx # Goal input component
│   └── GoalItem.tsx  # Goal item component
├── assets/          # Static assets
└── package.json     # Project dependencies and scripts
```

## Components

### App.tsx

The main application component that manages the state of goals and renders the main UI.

### GoalInput.tsx

A modal component for adding new goals with input validation.

### GoalItem.tsx

A component for displaying individual goals with delete functionality.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - [Your Email]
Project Link: [GitHub Repository URL]
