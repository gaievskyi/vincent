/** Abstract error handling to its own class. */
export class ErrorHandler {
  public static on(error: unknown): void {
    if (error instanceof Error) {
      console.error(error)
    }
  }
}
