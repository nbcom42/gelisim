# 🎓 Öğrenci Gelişim Değerlendirme Sistemi

Modern, kullanıcı dostu bir web uygulaması ile öğrencilerin bireysel gelişimini ölçün ve takip edin.

## ✨ Özellikler

- **Modern Arayüz**: Tailwind CSS ile tasarlanmış, temiz ve profesyonel görünüm
- **Responsive Tasarım**: Desktop ve tablet cihazlarda mükemmel çalışır
- **Gerçek Zamanlı İlerleme**: Öğrenci bazlı değerlendirme takibi
- **26 Değerlendirme Kriteri**: Kapsamlı gelişim analizi
- **Kategorize Sorular**: Akademik, sosyal, duygusal ve davranışsal kategoriler
- **Görsel Geri Bildirim**: Renkli radio butonlar ve ilerleme çubukları
- **Otomatik Kayıt**: Öğrenci değiştirirken otomatik yükleme
- **Form Validasyonu**: Tüm sorular cevaplanmadan kayıt yapılamaz

## 🚀 Kurulum

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Uygulamayı başlatın:
```bash
npm start
```

3. Tarayıcınızda açın:
```
http://localhost:3000
```

## 📁 Proje Yapısı

```
gelisim/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── StudentSidebar.jsx    # Sol panel - öğrenci listesi
│   │   ├── EvaluationForm.jsx    # Ana form - değerlendirme
│   │   └── Toast.jsx             # Bildirim bileşeni
│   ├── data/
│   │   └── mockData.js           # Örnek veri (öğrenciler, sorular)
│   ├── App.js                    # Ana uygulama
│   ├── index.js                  # Giriş noktası
│   └── index.css                 # Global stiller
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Kötü**: Kırmızı (#ef4444)
- **Orta**: Turuncu (#f59e0b)
- **İyi**: Açık Yeşil (#84cc16)
- **Çok İyi**: Koyu Yeşil (#22c55e)
- **Primary**: Mavi (#3b82f6)

### Bileşenler
- Custom radio butonlar
- Smooth transitions
- Hover efektleri
- Loading states
- Progress bars

## 📊 Değerlendirme Kategorileri

1. **Katılım** - Derse katılım ve dikkat
2. **Sorumluluk** - Ödev ve görev tamamlama
3. **Davranış** - Kurallara uyum ve saygı
4. **Sosyal** - İletişim ve empati
5. **Akademik** - Öğrenme ve başarı
6. **Yaratıcılık** - Özgün düşünce
7. **İşbirliği** - Grup çalışması
8. **İletişim** - Sözlü ve yazılı anlatım
9. **Organizasyon** - Düzen ve planlama
10. **Motivasyon** - İstek ve çaba
11. **Gelişim** - Öğrenme isteği
12. **Liderlik** - İnisiyatif alma
13. **Duygusal** - Duygusal zeka
14. **Teknoloji** - Dijital beceriler

## 🔧 Teknolojiler

- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **JavaScript (ES6+)** - Programming language
- **React Hooks** - State management

## 💡 Kullanım

1. **Öğrenci Seçimi**: Sol panelden bir öğrenci seçin
2. **Değerlendirme**: Her soru için uygun seçeneği işaretleyin
3. **İlerleme Takibi**: Üst kısımda genel başarı yüzdesini görün
4. **Kaydetme**: Tüm soruları cevapladıktan sonra "Kaydet" butonuna tıklayın
5. **Temizleme**: "Temizle" butonu ile formu sıfırlayın

## 🎯 Gelecek Geliştirmeler

- [ ] Dark mode desteği
- [ ] PDF rapor oluşturma
- [ ] Grafik ve istatistikler
- [ ] Çoklu dönem karşılaştırması
- [ ] Backend API entegrasyonu
- [ ] Kullanıcı yetkilendirme
- [ ] Toplu değerlendirme
- [ ] Excel export

## 📝 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

---

**Geliştirici Notu**: Bu uygulama öğretmenlerin öğrenci değerlendirmelerini hızlı ve etkili bir şekilde yapabilmesi için tasarlanmıştır. Modern web teknolojileri kullanılarak geliştirilmiş, kullanıcı deneyimi odaklı bir çözümdür.
