import AsyncStorage from "@react-native-async-storage/async-storage"
import { ErrorHandler } from "./error-handler"

interface ILogger {
  log(message: unknown): void
  error(message: unknown): void
  warn(message: unknown): void
  info(message: unknown): void
}

interface IStorageLogger {
  enable(): Promise<void>
}

class Logger implements ILogger {
  public log(message: unknown): void {
    console.log(message)
  }
  public error(message: unknown): void {
    console.error(message)
  }
  public warn(message: unknown): void {
    console.warn(message)
  }
  public info(message: unknown): void {
    console.info(message)
  }
}

class StorageLogger implements IStorageLogger {
  private instance: ILogger

  constructor() {
    this.instance = new Logger()
  }

  /**
   * Log all data from storage.
   */
  public async enable(): Promise<void> {
    try {
      const keys = await AsyncStorage.getAllKeys()
      if (!keys) {
        this.instance.log("No keys found")
        return
      }
      const stores = await AsyncStorage.multiGet(keys)
      if (!stores) {
        this.instance.log("No stores found")
        return
      }
      stores.forEach(([key, value]) => {
        if (key !== null && value !== null) {
          this.instance.log({ [key]: value })
        }
      })
    } catch (error) {
      ErrorHandler.on(error)
    }
  }
}

export const logger = new StorageLogger()

//? Uncomment to enable logger for AsyncStorage.
logger.enable()
