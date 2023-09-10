module.exports = {
  HOST: "aws.connect.psdb.cloud",
  USER: "kxt3o30zv7tk1x882cmk", //root เป็นusername ในการต่อ database
  PASSWORD: "pscale_pw_4MU8khhbyvfe7yxx6xntX6WgMsy4LB3oNz2Co5pQwDW", //ถ้าใช้ XAMPP ก็ไม่ต้องมี PASSWORD เช่น PASSWORD: "" //ถ้าใช้ แอปเซิร์ฟ(AppServ) ก็จะมี PASSWORD เช่น PASSWORD: "12345678"
  DB: "se_database", //เป็นการตั้ง DATABASE ให้มีชื่อว่า restaurants
};

//config คือเป็นการตั้งค่าต่างๆ
//ถ้าอนาคตเราจะไปต่อ database ตัวอื่น เราก็มาแก้ไฟล์นี้ให้เป็น host ที่เราต้องการเชื่อมต่อจริงๆ เช่น แก้ HOST: , USER: , PASSWORD: , DATABASE:
