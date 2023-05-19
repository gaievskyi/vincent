/** Abstract error handling to its own class. */
export class ErrorHandler {
  public static handle(error: unknown): void {
    if (error instanceof Error) {
      console.error(error)
    }
  }
}
