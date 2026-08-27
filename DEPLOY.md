# Deploy Guide — SMART_TECH (GitHub Ready)

โฟลเดอร์นี้คือ clean copy พร้อม push ขึ้น GitHub ได้เลย
ตัด `node_modules`, `.wrangler`, `.sites-runtime`, log ออกแล้ว

## 1) Push ขึ้น GitHub

```bash
# สร้าง repo เปล่าบน github.com ก่อน (หรือใช้ gh CLI)
gh repo create SMART_TECH --public --source=. --remote=origin --push

# หรือแบบ manual:
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

## 2) Run Local (เหมือนเดิม)

```bash
npm install
npm run dev     # http://localhost:5173
```

## 3) Build / Deploy

โปรเจกต์นี้ใช้ `vinext` + Cloudflare (`vite` + `wrangler`)

```bash
npm run build        # build + validate artifact (ใช้บน Linux / CI)
npm run start        # run production (ต้อง build ก่อน)
```

- Cloudflare Workers/Pages: ต่อ GitHub repo แล้วตั้ง Build command = `npm run build`
- Vercel/Netlify: ใช้ `npm run build` เช่นกัน (ต้องเช็ค adapter ถ้าจะ deploy นอก Cloudflare)
- OpenAI Sites: push แล้ว Sites builder จะรัน `npm run build` อัตโนมัติ (ดู README.md:62)

## 4) Config ที่ต้องแก้ก่อน deploy จริง

- `data/profile.ts` — อีเมล, LinkedIn, GitHub, resume
- `data/content.ts` — เนื้อหา projects / knowledge
- `.openai/hosting.json` — ถ้าใช้ D1/R2 ให้ใส่ binding จริง

## 5) โครงสร้าง

```
app/          -> Next App Router (/, /work, /lab, /knowledge, ...)
components/   -> UI
data/         -> profile + content (แก้ที่นี่)
db/           -> Drizzle + D1
public/       -> static assets
worker/       -> Cloudflare Worker entry
```

Node >= 22.13.0
