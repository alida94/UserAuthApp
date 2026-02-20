# 🟢 User Authentication App

A React Native mobile app with **Login and Signup functionality**, using **React Context API** for authentication state management. The app demonstrates authentication flows, state management, form handling, navigation, and basic UI styling.

---

## 📌 Features

- **Login Screen**  
  - Input fields: Email, Password  
  - Validates email format and password length  
  - Error messages for incorrect credentials  
  - Navigate to Signup screen

- **Signup Screen**  
  - Input fields: Name, Email, Password  
  - Validates required fields, email format, and minimum password length  
  - Error messages for invalid or missing data  
  - Navigate back to Login screen

- **Home Screen**  
  - Displays the logged-in user's Name and Email  
  - Logout button to return to Login screen

- **Authentication Management**  
  - Uses **React Context API** to manage global authentication state  
  - Optional persistence with AsyncStorage to keep users logged in after app restart

- **Navigation**  
  - Built with **React Navigation**  
  - Seamless navigation between Login, Signup, and Home screens

- **UI & UX**  
  - Clean, intuitive layout  
  - Styled input fields, buttons, and error messages  

---

## 🛠 Installation & Setup (Android Only)

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd UserAuthApp
```

2. **Install dependencies**
```sh
npm install || yarn
```

3. **Recommended Node version**
This project is tested with Node 22 LTS. Using other versions may cause package or build errors.
```bash
nvm install 22
nvm use 22
```

4. **Run the app**
```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```
Note: Tested using Android 15 device. iOS setup is not included yet.

---

## 📂 Project Structure

UserAuthApp/
│
├─ android/                     # Android native code
├─ src/                         # Source code of the app
│   ├─ context/                 # AuthContext for authentication state
│   │   └─ AuthContext.js
│   ├─ image/                   # Logo image
│   │   └─ logo.png
│   ├─ screens/                 # App screens
│   │   ├─ home.js
│   │   ├─ login.js
│   │   └─ signup.js
|   ├─ App.js
|   └─ index.js
├─ index.js                     # Entry point
├─ package.json
└─ README.md

---

## ⚙ Authentication Flow

- Signup → Creates a new user, saves in context (and AsyncStorage if enabled)
- Login → Validates credentials, updates context
- Home → Displays user info, allows logout
- Logout → Clears user state and AsyncStorage

---

## 💡 Notes

- Uses React Context API for state management
- Form validation implemented for user-friendly error messages
- AsyncStorage optional for authentication persistence
- Navigation handled by React Navigation (native-stack)
- Tested with Android 15 and Node 22 LTS
- iOS setup not implemented yet

---

## 🔗 Dependencies

- react-native
- @react-navigation/native
- @react-navigation/native-stack
- @react-native-async-storage/async-storage
