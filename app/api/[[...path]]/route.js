import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { v4 as uuidv4 } from 'uuid';

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME || 'mangalam_foods';

let client;
let clientPromise;

async function getDb() {
  if (!clientPromise) {
    client = new MongoClient(MONGO_URL);
    clientPromise = client.connect();
  }
  await clientPromise;
  return client.db(DB_NAME);
}

const json = (data, status = 200) =>
  NextResponse.json(data, {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });

export async function OPTIONS() {
  return json({});
}

export async function GET(request, { params }) {
  const resolved = (await params)?.path || [];
  const route = resolved.join('/');
  try {
    if (route === '' || route === 'health') {
      return json({ ok: true, service: 'Mangalam Foods API', time: new Date().toISOString() });
    }
    if (route === 'inquiries') {
      const db = await getDb();
      const inquiries = await db
        .collection('inquiries')
        .find({}, { projection: { _id: 0 } })
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray();
      return json({ inquiries, count: inquiries.length });
    }
    return json({ error: 'Not found', route }, 404);
  } catch (e) {
    return json({ error: e.message }, 500);
  }
}

export async function POST(request, { params }) {
  const resolved = (await params)?.path || [];
  const route = resolved.join('/');
  try {
    const body = await request.json().catch(() => ({}));
    if (route === 'inquiries' || route === 'contact') {
      const { name, email, phone, message, product } = body;
      if (!name || !email || !message) {
        return json({ error: 'Name, email and message are required' }, 400);
      }
      const db = await getDb();
      const doc = {
        id: uuidv4(),
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        phone: phone ? String(phone).trim() : '',
        product: product ? String(product).trim() : '',
        message: String(message).trim(),
        status: 'new',
        createdAt: new Date().toISOString(),
      };
      await db.collection('inquiries').insertOne(doc);
      return json({ success: true, id: doc.id, message: 'Thank you! We will get back to you shortly.' });
    }
    if (route === 'newsletter') {
      const { email } = body;
      if (!email) return json({ error: 'Email is required' }, 400);
      const db = await getDb();
      await db.collection('newsletter').updateOne(
        { email: String(email).toLowerCase() },
        { $setOnInsert: { id: uuidv4(), email: String(email).toLowerCase(), createdAt: new Date().toISOString() } },
        { upsert: true }
      );
      return json({ success: true, message: 'Subscribed successfully' });
    }
    if (route === 'event-register') {
      const { name, email, phone, company, city, visitors, visitDate, product, interests, comments } = body;
      if (!name || !email || !phone) {
        return json({ error: 'Name, email and phone are required' }, 400);
      }
      const db = await getDb();
      
      // Check for duplicate email
      const existing = await db.collection('event_registrations').findOne({ email: String(email).toLowerCase() });
      if (existing) {
        return json({ error: 'This email is already registered for the event.' }, 400);
      }
      
      const doc = {
        id: uuidv4(),
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        phone: String(phone).trim(),
        company: company ? String(company).trim() : '',
        city: city ? String(city).trim() : '',
        visitors: visitors ? String(visitors).trim() : '',
        visitDate: visitDate ? String(visitDate).trim() : '',
        product: product ? String(product).trim() : '',
        interests: Array.isArray(interests) ? interests : [],
        comments: comments ? String(comments).trim() : '',
        createdAt: new Date().toISOString(),
      };
      await db.collection('event_registrations').insertOne(doc);
      return json({ success: true, id: doc.id, message: 'Thank you for registering! We look forward to welcoming you at the Mangalam Foods stall.' });
    }
    return json({ error: 'Not found', route }, 404);
  } catch (e) {
    return json({ error: e.message }, 500);
  }
}
