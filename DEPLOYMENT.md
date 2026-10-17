# 🌐 www.nbcom.tech Hosting Rehberi

## ✅ Seçenek 1: Vercel (ÖNERİLEN)

### Adımlar:
1. **Vercel hesabı aç**: https://vercel.com/signup
2. **GitHub'a yükle** (opsiyonel ama önerilen):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [GITHUB_REPO_URL]
   git push -u origin main
   ```

3. **Vercel'e deploy et**:
   - Vercel dashboard → "Add New Project"
   - GitHub repo'yu seç (veya dosyaları sürükle-bırak)
   - Framework: Create React App (otomatik algılar)
   - Deploy butonuna tıkla

4. **Custom domain ekle**:
   - Project Settings → Domains
   - "nbcom.tech" ekle
   - DNS ayarlarını güncelle:
     ```
     A Record: @ → 76.76.21.21
     CNAME: www → cname.vercel-dns.com
     ```

###장점:
- ✅ Ücretsiz
- ✅ Otomatik HTTPS
- ✅ Global CDN
- ✅ Her commit'te otomatik deploy

---

## Seçenek 2: Netlify

### Adımlar:
1. **Build oluştur**:
   ```bash
   npm run build
   ```

2. **Netlify'a yükle**: https://app.netlify.com/drop
   - `build` klasörünü sürükle-bırak

3. **Custom domain**:
   - Site Settings → Domain Management
   - "nbcom.tech" ekle
   - DNS ayarlarını güncelle

---

## Seçenek 3: GitHub Pages

### Adımlar:
1. **package.json'a ekle**:
   ```json
   "homepage": "https://www.nbcom.tech"
   ```

2. **Deploy**:
   ```bash
   npm install --save-dev gh-pages
   npm run build
   npx gh-pages -d build
   ```

3. **Custom domain**:
   - GitHub repo → Settings → Pages
   - Custom domain: nbcom.tech

---

## Seçenek 4: Kendi Sunucun (VPS)

### Gereksinimler:
- VPS (DigitalOcean, AWS, Hetzner vb.)
- Node.js yüklü
- Nginx

### Adımlar:

1. **Build oluştur**:
   ```bash
   npm run build
   ```

2. **Sunucuya yükle**:
   ```bash
   scp -r build/* user@nbcom.tech:/var/www/html/
   ```

3. **Nginx config** (`/etc/nginx/sites-available/nbcom.tech`):
   ```nginx
   server {
       listen 80;
       server_name nbcom.tech www.nbcom.tech;
       root /var/www/html;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **SSL ekle**:
   ```bash
   sudo certbot --nginx -d nbcom.tech -d www.nbcom.tech
   ```

---

## 🎯 Hızlı Başlangıç (Vercel CLI)

```bash
# Vercel CLI yükle
npm i -g vercel

# Deploy et
cd c:\Users\M4-2021\Desktop\bilisim\gelisim
vercel

# Domain ekle
vercel domains add nbcom.tech
```

---

## 📋 DNS Ayarları (Domain Sağlayıcınızda)

### Vercel için:
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

### Netlify için:
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     [your-site].netlify.app
```

---

## ✅ Önerilen Yöntem

**Vercel** kullanmanızı öneriyorum çünkü:
- Tamamen ücretsiz
- En kolay kurulum
- Otomatik HTTPS
- Mükemmel React desteği
- Her değişiklikte otomatik deploy

### Tek Komut Deploy:
```bash
npm i -g vercel
vercel --prod
```

Sonra Vercel dashboard'dan domain ekle → Bitti! 🎉
