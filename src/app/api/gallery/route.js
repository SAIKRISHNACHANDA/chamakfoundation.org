import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { GALLERY_EVENTS } from "@/data/galleryEvents";

const DATA_FILE = path.join(process.cwd(), "src", "data", "events.json");

async function getStoredEvents() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    // If file doesn't exist, try initializing it
    try {
      await fs.writeFile(DATA_FILE, JSON.stringify(GALLERY_EVENTS, null, 2), "utf-8");
      return GALLERY_EVENTS;
    } catch (writeErr) {
      console.warn("Could not write events.json, falling back to static array", writeErr);
    }
  }
  return GALLERY_EVENTS;
}

async function saveEvents(events) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(events, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to write events.json", err);
    return false;
  }
}

export async function GET() {
  const events = await getStoredEvents();
  return NextResponse.json({ success: true, count: events.length, data: events });
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.title || !body.title.trim()) {
      return NextResponse.json(
        { success: false, error: "Event title is required" },
        { status: 400 }
      );
    }

    const events = await getStoredEvents();

    const newEvent = {
      id:
        body.id ||
        body.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") +
          "-" +
          Date.now().toString().slice(-4),
      date: body.date || new Date().toISOString().split("T")[0],
      dateFormatted:
        body.dateFormatted ||
        new Date(body.date || Date.now()).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      badge: body.badge || "Daily Field Update",
      category: body.category || "Daily Field Updates",
      title: body.title.trim(),
      location: body.location?.trim() || "Hyderabad, Telangana",
      metric: body.metric?.trim() || "Field Impact Verified",
      summary: body.summary?.trim() || "",
      gridStyle: body.gridStyle || "split-duo",
      images: Array.isArray(body.images) && body.images.length > 0
        ? body.images
        : [
            {
              src: "/assets/img/classroom-students.jpg",
              alt: body.title,
              caption: body.summary || body.title,
            },
          ],
    };

    const updated = [newEvent, ...events];
    await saveEvents(updated);

    return NextResponse.json(
      { success: true, message: "Event created successfully", data: newEvent },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to create event" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    if (!body.id) {
      return NextResponse.json(
        { success: false, error: "Event ID is required for update" },
        { status: 400 }
      );
    }

    const events = await getStoredEvents();
    const index = events.findIndex((ev) => ev.id === body.id);
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Event not found" },
        { status: 404 }
      );
    }

    const updatedEvent = {
      ...events[index],
      ...body,
      id: events[index].id, // preserve ID
    };

    events[index] = updatedEvent;
    await saveEvents(events);

    return NextResponse.json({
      success: true,
      message: "Event updated successfully",
      data: updatedEvent,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to update event" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    let id = searchParams.get("id");

    if (!id) {
      const body = await req.json().catch(() => ({}));
      id = body.id;
    }

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Event ID is required to delete" },
        { status: 400 }
      );
    }

    const events = await getStoredEvents();
    const filtered = events.filter((ev) => ev.id !== id);

    if (filtered.length === events.length) {
      return NextResponse.json(
        { success: false, error: "Event not found" },
        { status: 404 }
      );
    }

    await saveEvents(filtered);
    return NextResponse.json({
      success: true,
      message: "Event deleted successfully",
      deletedId: id,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to delete event" },
      { status: 500 }
    );
  }
}
