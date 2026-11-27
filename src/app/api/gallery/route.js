import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { GALLERY_EVENTS } from "@/data/galleryEvents";
import { ensureSeededDataFile, getDataFilePath } from "@/lib/storage";

const DATA_FILENAME = "events.json";
const DATA_FILE = getDataFilePath(DATA_FILENAME);

const NO_CACHE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
};

async function getStoredEvents() {
  try {
    await ensureSeededDataFile(DATA_FILENAME, JSON.stringify(GALLERY_EVENTS, null, 2));
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch (err) {
    console.warn("Could not read/seed events.json, falling back to static array", err);
  }
  return GALLERY_EVENTS;
}

async function saveEvents(events) {
  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(events, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to write events.json", err);
    return false;
  }
}

export async function GET() {
  const events = await getStoredEvents();
  return NextResponse.json(
    { success: true, count: events.length, data: events },
    { headers: NO_CACHE_HEADERS }
  );
}

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.title || !body.title.trim()) {
      return NextResponse.json(
        { success: false, error: "Event title is required" },
        { status: 400, headers: NO_CACHE_HEADERS }
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
      location: body.location?.trim() || "Karimnagar, Telangana",
      metric: body.metric?.trim() || "Field Impact Verified",
      summary: body.summary?.trim() || "",
      gridStyle: body.gridStyle || "split-duo",
      images:
        Array.isArray(body.images) && body.images.length > 0
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
    const saved = await saveEvents(updated);
    if (!saved) {
      return NextResponse.json(
        { success: false, error: "Failed to persist event to server disk" },
        { status: 500, headers: NO_CACHE_HEADERS }
      );
    }

    return NextResponse.json(
      { success: true, message: "Event created successfully", data: newEvent },
      { status: 201, headers: NO_CACHE_HEADERS }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to create event" },
      { status: 500, headers: NO_CACHE_HEADERS }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    if (!body.id) {
      return NextResponse.json(
        { success: false, error: "Event ID is required for update" },
        { status: 400, headers: NO_CACHE_HEADERS }
      );
    }

    const events = await getStoredEvents();
    const targetId = String(body.id).trim().toLowerCase();
    const index = events.findIndex(
      (ev) => String(ev.id).trim().toLowerCase() === targetId
    );

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Event not found" },
        { status: 404, headers: NO_CACHE_HEADERS }
      );
    }

    const updatedEvent = {
      ...events[index],
      ...body,
      id: events[index].id, // preserve ID
    };

    events[index] = updatedEvent;
    const saved = await saveEvents(events);
    if (!saved) {
      return NextResponse.json(
        { success: false, error: "Failed to persist update to server disk" },
        { status: 500, headers: NO_CACHE_HEADERS }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Event updated successfully",
        data: updatedEvent,
      },
      { headers: NO_CACHE_HEADERS }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to update event" },
      { status: 500, headers: NO_CACHE_HEADERS }
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
        { status: 400, headers: NO_CACHE_HEADERS }
      );
    }

    const events = await getStoredEvents();
    const targetId = String(id).trim().toLowerCase();
    const filtered = events.filter(
      (ev) => String(ev.id).trim().toLowerCase() !== targetId
    );

    if (filtered.length === events.length) {
      return NextResponse.json(
        { success: false, error: "Event not found" },
        { status: 404, headers: NO_CACHE_HEADERS }
      );
    }

    const saved = await saveEvents(filtered);
    if (!saved) {
      return NextResponse.json(
        { success: false, error: "Failed to persist deletion on server disk" },
        { status: 500, headers: NO_CACHE_HEADERS }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Event deleted successfully",
        deletedId: id,
        remainingCount: filtered.length,
      },
      { headers: NO_CACHE_HEADERS }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to delete event" },
      { status: 500, headers: NO_CACHE_HEADERS }
    );
  }
}
