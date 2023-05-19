import AsyncStorage from "@react-native-async-storage/async-storage"
import { ErrorHandler } from "./error-handler"

interface IStorage {
  get(key: string): Promise<string | null>
  set(key: string, value: string): Promise<void>
  remove(key: string): Promise<void>
  clear(): Promise<void>
}

class Storage implements IStorage {
  /**
   * Retrieve data from storage for a given key.
   * @param key The key to retrieve data.
   * @returns The stored value or null.
   */
  public async get(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key)
    } catch (error) {
      ErrorHandler.handle(error)
    } finally {
      return null
    }
  }

  /**
   * Store data for a given key.
   * @param key The key to store data.
   * @param value The value to store.
   */
  public async set(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      ErrorHandler.handle(error)
    }
  }

  /**
   * Remove data for a given key.
   * @param key The key to remove data.
   */
  public async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key)
    } catch (error) {
      ErrorHandler.handle(error)
    }
  }

  /**
   * Clear all data. Only for debug.
   */
  public async clear(): Promise<void> {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      ErrorHandler.handle(error)
    }
  }
}

export const storage = new Storage()

export async function log(): Promise<void> {
  try {
    const keys = await AsyncStorage.getAllKeys()
    if (!keys) {
      console.error("No keys found")
      return
    }
    const stores = await AsyncStorage.multiGet(keys)
    if (!stores) {
      console.error("No stores found")
      return
    }
    stores.forEach(([key, value]) => {
      if (key !== null && value !== null) {
        console.log({ [key]: value })
      }
    })
  } catch (error) {
    ErrorHandler.handle(error)
  }
}

//? Uncomment to print AsyncStorage entries.
// log()
