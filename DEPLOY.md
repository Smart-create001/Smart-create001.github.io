# Deploy — กด Push แล้วเว็บขึ้นเลย

โฟลเดอร์นี้ทำไว้ให้ **push ขึ้น GitHub แล้ว deploy อัตโนมัติ** ไม่ต้องตั้ง build เอง

## สิ่งที่ผมทำให้แล้ว
- `wrangler.toml` — config Cloudflare Workers (assets = `dist/client`, worker = `dist/server/index.js`)
- `.github/workflows/ci.yml` — ทุก push จะ `npm ci` + `npm run build` + `npm test` ให้ (เช็คว่าไม่พัง)
- `.github/workflows/deploy.yml` — push ไป `main` แล้ว build + ถ้ามี Secrets จะ `wrangler deploy` ขึ้น Cloudflare ให้เลย
- `.gitignore` ตัด `node_modules`, `.wrangler`, `.sites-runtime`, `dist` ออกแล้ว — clean พร้อม push
- `README.md` มีปุ่ม Deploy 3 ทาง

## คุณต้องทำแค่ 2 ขั้น

### ขั้น 1 — สร้าง repo + push
```bash
cd SMART_TECH_Github
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```
> ถ้าใช้ `gh` CLI: `gh repo create SMART_TECH --public --source=. --remote=origin --push`

### ขั้น 2 — ต่อ Cloudflare (ครั้งเดียวจบ)
**เลือกทางใดทางหนึ่ง:**

**A) แบบไม่ต้องใส่ Token (ง่ายสุด — แนะนำ):**
1. ไป https://dash.cloudflare.com → Workers & Pages → Create Application → Pages → Connect to Git
2. เลือก repo `SMART_TECH`
3. ตั้งค่า:
   - Framework preset: `None` หรือ `Vite`
   - Build command: `npm run build`
   - Output directory: `dist/client` (หรือปล่อยว่าง — `wrangler.toml` จัดการให้)
4. กด Save and Deploy — ครั้งต่อไป `git push` จะ deploy อัตโนมัติ

**B) แบบ GitHub Actions deploy ตรง (ต้องใส่ Secrets ครั้งเดียว):**
1. Cloudflare Dashboard → My Profile → API Tokens → Create Token → Edit Cloudflare Workers
2. คัดลอก `Account ID` (หน้า Overview ขวา)
3. GitHub repo → Settings → Secrets and variables → Actions → New secret:
   - `CLOUDFLARE_API_TOKEN` = token ที่สร้าง
   - `CLOUDFLARE_ACCOUNT_ID` = account id
4. `git push` ครั้งต่อไป workflow `deploy.yml` จะ deploy ให้เอง

### ทางเลือก Vercel (ถ้าไม่ใช้ D1/R2)
- vercel.com → Add New Project → Import repo → Deploy

## ก่อน Deploy ควรแก้
- `data/profile.ts` — อีเมล, LinkedIn, GitHub
- `data/content.ts` — เนื้อหา projects/knowledge
- `.openai/hosting.json` — ถ้าใช้ D1/R2

## เช็ค Local ก่อน push
```bash
npm install
npm run dev   # http://localhost:5173
npm run build # ต้องผ่านก่อน push
```
Node >= 22.13.0
