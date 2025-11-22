// Storage interface for the application
// Since this is a frontend-only migration, we'll keep it minimal

export interface IStorage {
  // Add storage methods as needed
}

export class MemStorage implements IStorage {
  constructor() {
    // Initialize in-memory storage
  }
}

export const storage = new MemStorage();
