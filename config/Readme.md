# restful_api_sql ในโฟลเดอร์ config

## ไฟล์ db.config.js

ไฟล์ `db.config.js` เป็นไฟล์ที่ใช้กำหนดค่าเพื่อเชื่อมต่อกับฐานข้อมูล โดยโค้ดในไฟล์นี้จะโหลดค่าตั้งต้นจากไฟล์ `.env` ที่อยู่ในโฟลเดอร์ระดับบนสุดของโปรเจค

### รายละเอียดของโค้ด:

```javascript
require('dotenv').config()

module.exports = {
  HOST: process.env.HOST || "localhost",
  USER: process.env.USER || "root",
  PASSWORD: process.env.PASSWORD || "",
  DB: process.env.DB || "restaurants",
};
```

#### คำอธิบาย:

- `require('dotenv').config()`:
  - คำสั่งนี้ใช้โหลดไลบรารี dotenv และเรียกเมธอด config() เพื่อโหลดค่าตั้งต้นจากไฟล์ .env เข้าไปใน `process.env` ของ Node.js

- `module.exports`:
  - คำสั่งนี้ใช้ export object ที่มี properties สำหรับการตั้งค่าการเชื่อมต่อฐานข้อมูล

- Properties ของ object ที่ถูก export:
  - `HOST: process.env.HOST || "localhost"`: กำหนด hostname ของเซิร์ฟเวอร์ฐานข้อมูลจาก environment variable HOST หรือใช้ค่า "localhost" ถ้า HOST ไม่ได้ถูกกำหนด
  - `USER: process.env.USER || "root"`: กำหนด username สำหรับการเชื่อมต่อฐานข้อมูลจาก environment variable USER หรือใช้ค่า "root" ถ้า USER ไม่ได้ถูกกำหนด
  - `PASSWORD: process.env.PASSWORD || ""`: กำหนด password สำหรับการเชื่อมต่อฐานข้อมูลจาก environment variable PASSWORD หรือใช้ค่าว่าง "" ถ้า PASSWORD ไม่ได้ถูกกำหนด
  - `DB: process.env.DB || "restaurants"`: กำหนดชื่อฐานข้อมูลจาก environment variable DB หรือใช้ค่า "restaurants" ถ้า DB ไม่ได้ถูกกำหนด

#### สรุป:
- ไฟล์ `db.config.js` เป็นไฟล์ที่ใช้กำหนดค่าการเชื่อมต่อฐานข้อมูล โดยทำให้การจัดการค่าตั้งต้นเป็นไปอย่างมีระเบียบและง่ายต่อการปรับเปลี่ยน
- การใช้ dotenv ทำให้โปรเจคมีความยืดหยุ่นมากขึ้น โดยทำให้สามารถกำหนดค่าตั้งต้นผ่านไฟล์ .env ได้ ซึ่งทำให้การจัดการค่าตั้งต้นเป็นไปอย่างมีระเบียบและปลอดภัยมากขึ้น
