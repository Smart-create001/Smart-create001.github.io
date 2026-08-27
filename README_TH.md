# SMART_TECH — Full Version 0.01

เวอร์ชันนี้ยกระดับจากต้นแบบหน้าเดียวเป็นเว็บไซต์หลายหน้า พร้อมโครงสร้างสำหรับใช้งานจริงและขยายต่อได้

## วิธีเปิดใช้งาน

ต้องใช้ Node.js เวอร์ชัน 22.13 ขึ้นไป

```bash
npm install
npm run dev
```

จากนั้นเปิด URL ที่แสดงใน Terminal

ทดสอบ Production Build:

```bash
npm run build
```

## หน้าที่มีในเวอร์ชัน 0.01

- หน้าแรกพร้อม Living Engineering Canvas
- `/work` รวมโครงการและตัวกรอง
- `/work/[slug]` Case Study แยกของแต่ละโครงการ
- `/lab` สถานะงานปัจจุบัน กระบวนการเรียนรู้ Failure Evidence และ Experiment Register
- `/knowledge` คลังบันทึกพร้อมตัวกรอง
- `/knowledge/[slug]` หน้าบันทึกฉบับเต็ม
- `/about` เรื่องราว จุดเริ่มต้น ความสามารถ และทิศทางอนาคต
- `/contact` ระบบเรียบเรียงข้อความติดต่อโดยไม่ส่งข้อมูลออกจากเว็บ
- `/resume` เรซูเม่สำหรับกด Print หรือ Save as PDF

## จุดที่ต้องใส่ข้อมูลจริง

เปิดไฟล์ `data/profile.ts` แล้วกรอก:

- `email`
- `linkedIn`
- `github`
- `resumeFile` ถ้ามีไฟล์เรซูเม่จริง

ถ้ายังไม่กรอก ระบบจะแสดงว่า “ADD REAL LINK” อย่างตรงไปตรงมา และจะไม่สร้างข้อมูลปลอม

## การเปลี่ยนภาพ Placeholder

พื้นที่ภาพโครงการถูกเตรียมให้รองรับภาพจริงภายหลัง เช่น:

- ภาพการประกอบงาน
- ภาพวงจร/PCB
- ภาพหุ่นยนต์
- ภาพการทดสอบ
- ภาพ CAD
- ภาพ Computer Vision Output

ในเวอร์ชันนี้ Placeholder ทุกจุดมีป้ายกำกับชัดเจน เพื่อไม่ให้ภาพ Concept ถูกเข้าใจผิดว่าเป็นงานที่สร้างเสร็จแล้ว

SMART_TECH

BUILD → LEARN → ITERATE → AGRI-ROBOTICS
