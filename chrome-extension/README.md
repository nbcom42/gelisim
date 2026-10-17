# 🎲 Otomatik Değerlendirme Doldurma - Chrome Uzantısı

Öğrenci değerlendirme formundaki tüm radio butonları rastgele işaretleyen Chrome uzantısı.

## 📦 Kurulum

### 1. İkonları Oluştur

İkonlar olmadan uzantı yüklenemez. İki seçenek:

**Seçenek A - Otomatik (Önerilen):**
1. `icons/generate-icons.html` dosyasını tarayıcıda açın
2. Otomatik olarak 3 ikon indirilecek (icon16.png, icon48.png, icon128.png)
3. İndirilen ikonları `icons/` klasörüne taşıyın

**Seçenek B - Manuel:**
- Herhangi bir 128x128 PNG görsel oluşturun
- `icon16.png`, `icon48.png`, `icon128.png` olarak kaydedin
- `icons/` klasörüne yerleştirin

### 2. Chrome'a Yükle

1. Chrome'da `chrome://extensions/` adresine gidin
2. Sağ üstten "Geliştirici modu"nu açın
3. "Paketlenmemiş öğe yükle" butonuna tıklayın
4. `chrome-extension` klasörünü seçin
5. Uzantı yüklendi! ✓

## 🚀 Kullanım

1. Öğrenci değerlendirme sayfasını açın (`http://localhost:3000`)
2. Chrome araç çubuğundaki uzantı ikonuna tıklayın
3. "Rastgele Doldur" butonuna tıklayın
4. Tüm sorular otomatik olarak rastgele işaretlenir!

## ⚙️ Nasıl Çalışır?

- Sayfadaki tüm radio butonları bulur
- Her soru grubu için rastgele bir seçenek işaretler
- Kaç soru doldurulduğunu gösterir

## 📁 Dosya Yapısı

```
chrome-extension/
├── manifest.json          # Uzantı yapılandırması
├── popup.html            # Uzantı arayüzü
├── popup.js              # Rastgele doldurma mantığı
└── icons/
    ├── generate-icons.html  # İkon oluşturucu
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## 🎯 Özellikler

- ✅ Tek tıkla tüm formu doldurur
- ✅ Tamamen rastgele seçim
- ✅ Başarı/hata bildirimi
- ✅ Minimal ve hızlı
- ✅ Manifest V3 uyumlu

## 🔧 Geliştirme

Kodu değiştirdikten sonra:
1. `chrome://extensions/` sayfasında
2. Uzantının altındaki "Yenile" ikonuna tıklayın

---

**Not**: Bu uzantı sadece localhost:3000'deki değerlendirme formu için tasarlanmıştır. Diğer sitelerde de çalışır ancak tüm radio butonları rastgele işaretler.
