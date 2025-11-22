import type { Express } from "express";
import { storage } from "./storage";
import { getCalendarEvents } from "./google-calendar";

export function registerRoutes(app: Express) {
  // Test endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Google Calendar events endpoint
  app.get("/api/events", async (req, res) => {
    try {
      const events = await getCalendarEvents();
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ 
        error: "Failed to fetch calendar events",
        message: error instanceof Error ? error.message : String(error)
      });
    }
  });
}
