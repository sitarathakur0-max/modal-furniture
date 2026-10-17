import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface InquiryRecord {
  id: string;
  name: string;
  phone: string;
  email?: string;
  categoryOrProduct: string;
  items?: Array<{ code: string; title: string }>;
  message: string;
  createdAt: string;
  status: 'Received' | 'Reviewed' | 'Contacted';
}

const inquiries: InquiryRecord[] = [];

async function createServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // API: Contact Form Submission
  app.post('/api/contact', (req: Request, res: Response) => {
    const { name, phone, email, categoryOrProduct, message } = req.body;

    if (!name || !name.trim() || !phone || !phone.trim() || !message || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your full name, phone number, and inquiry message.'
      });
    }

    const id = `MF-${Date.now().toString().slice(-6)}`;
    const record: InquiryRecord = {
      id,
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : undefined,
      categoryOrProduct: categoryOrProduct || 'General Inquiry',
      message: message.trim(),
      createdAt: new Date().toISOString(),
      status: 'Received'
    };

    inquiries.push(record);

    return res.status(201).json({
      success: true,
      inquiryId: id,
      message: 'Your inquiry has been received. Our team at Modal Furniture will review your request and get in touch at the provided contact number.',
      timestamp: record.createdAt
    });
  });

  // API: Product & Quote Inquiries (single or bag)
  app.post('/api/inquiries', (req: Request, res: Response) => {
    const { name, phone, email, items, message, categoryOrProduct } = req.body;

    if (!name || !name.trim() || !phone || !phone.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your name and phone number to request details.'
      });
    }

    const id = `MOD-${Date.now().toString().slice(-6)}`;
    const record: InquiryRecord = {
      id,
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : undefined,
      categoryOrProduct: categoryOrProduct || (items && items.length > 0 ? items.map((i: any) => i.title).join(', ') : 'Catalogue Inquiry'),
      items: Array.isArray(items) ? items : undefined,
      message: message ? message.trim() : 'Pricing & availability inquiry for selected catalogue concept(s).',
      createdAt: new Date().toISOString(),
      status: 'Received'
    };

    inquiries.push(record);

    return res.status(201).json({
      success: true,
      inquiryId: id,
      message: 'Quote inquiry successfully logged. A Modal Furniture specialist will contact you with verified details.',
      itemsCount: items ? items.length : 1
    });
  });

  // Health check
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'active',
      store: 'Modal Furniture — Ichhra, Lahore',
      totalInquiriesLogged: inquiries.length
    });
  });

  // Dynamic Sitemap
  app.get('/sitemap.xml', (_req: Request, res: Response) => {
    const baseUrl = process.env.APP_URL || 'https://modalfurniture.pk';
    const pages = [
      '',
      '/shop',
      '/living-room',
      '/bedroom',
      '/dining',
      '/storage',
      '/buying-guide',
      '/about',
      '/faqs',
      '/contact',
      '/privacy-policy',
      '/terms'
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });

  // Robots.txt
  app.get('/robots.txt', (_req: Request, res: Response) => {
    const baseUrl = process.env.APP_URL || 'https://modalfurniture.pk';
    const robots = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`;
    res.header('Content-Type', 'text/plain');
    res.send(robots);
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (_req: Request, res: Response) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
      });
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Modal Furniture application running at http://0.0.0.0:${PORT}`);
  });
}

createServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
