# Basit CRUD API Uygulaması

Bu proje, Node.js, Express.js, MongoDB ve JWT (JSON Web Token) kullanarak oluşturulmuş basit bir CRUD (Create, Read, Update, Delete) API uygulamasıdır. Bu uygulama, temel bir kullanıcı yönetimi işlevselliği sunar: yeni kullanıcı oluşturma, postları listeleme, post detay bilgilerini alma, oluşturma, güncelleme ve silme. Database olarak Mongodb entegrasyonu yapıldı.

Backend tarafına küçük bir merhaba demiş olduk.

```
"dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.1",
    "mongoose": "^7.4.1",
    "nodemon": "^3.0.1"}
```

Projeye dev sürecini kolaylaştımak için nodemon dahil edildi ve scripte eklendi.

```` "start": "nodemon index.js",`

```

index.js teki bu kod sayesinde sunucunun çalıştığı porta gidince bir mesajla karşılaşabileceğiz.
```

app.get("/", (require, response) => {
response.json({ message: "server is working its ok" });
});

```
npm start ile proje başlatılır. Server ınız run, mongoDB niz connected olsun.

```

# HTTP durum kodlarından bazı temel ve yaygın olarak kullanılanları ve açıklamaları:

| Durum Kodu | Açıklama                                                                                              |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| 200        | Başarılı - İstek başarılı bir şekilde işlendi ve sonuçlar başarıyla döndü.                            |
| 201        | Başarılı - Yeni bir kaynak başarıyla oluşturuldu.                                                     |
| 204        | Başarılı - İstek başarılı bir şekilde işlendi, ancak içerik döndürülmeyecek (no content).             |
| 400        | Hatalı İstek - İstek yanlış veya eksik bilgiler içeriyor.                                             |
| 401        | Yetkisiz Erişim - İstek yetkilendirme gerektiren bir işlemi yapmak için yetki yok veya geçerli değil. |
| 403        | Yasaklanmış - İstek erişime izin verilmeyen bir kaynağı veya işlemi talep ediyor.                     |
| 404        | Bulunamadı - İstek yapılan kaynak veya endpoint bulunamadı.                                           |
| 405        | Geçersiz Yöntem - İstek yapılan endpoint, kullanılan HTTP yöntemi için geçerli değil.                 |
| 500        | Sunucu Hatası - İstek işlenirken sunucuda bir hata oluştu.                                            |

Tabloda listelenen bu durum kodları, HTTP protokolünün istemci-sunucu iletişiminde kullanılan temel kodlardır. Bu kodlar, genellikle sunucu yanıtlarında yer alır ve istemciye yapılan isteğin sonucunu açıklar.
