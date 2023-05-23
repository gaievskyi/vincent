import { ExpoConfig, ConfigContext } from "expo/config"

/* Metadata */
export const APP_NAME = "vincent"
export const APP_SLUG = APP_NAME
export const APP_VERSION = "1.0.0"
export const APP_THEME: "light" | "dark" | "automatic" = "automatic"
/* Icons */
const ICON_PATH = "./assets/icon.png"
const ANDROID_FOREGROUND_PATH = "./assets/adaptive-icon.png"
const FAVICON_PATH = "./assets/favicon.png"
const SPLASH_PATH = "./assets/splash.png"

const config = ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: APP_NAME,
  slug: APP_SLUG,
  version: APP_VERSION,
  orientation: "portrait",
  icon: ICON_PATH,
  userInterfaceStyle: APP_THEME,
  splash: {
    image: SPLASH_PATH,
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
    bundleIdentifier: "com.gaievskyi.vincent",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: ANDROID_FOREGROUND_PATH,
      backgroundColor: "#ffffff",
    },
    package: "com.gaievskyi.vincent",
  },
  web: {
    favicon: FAVICON_PATH,
  },
  extra: {
    eas: {
      projectId: "78d34434-7896-42a1-838f-afc12346b7a6",
    },
  },
  owner: "gaievskyi",
})

export default config
