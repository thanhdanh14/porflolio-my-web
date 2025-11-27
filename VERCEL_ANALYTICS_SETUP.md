# Hướng dẫn Setup Vercel Analytics (MIỄN PHÍ)

## Bước 1: Cài đặt package
Chạy lệnh sau trong terminal:
```bash
npm install @vercel/analytics
```

## Bước 2: Enable Analytics trên Vercel Dashboard
1. Truy cập: https://vercel.com/dashboard
2. Chọn project của bạn
3. Vào tab **Analytics**
4. Chọn **"Web Analytics on Hobby - Included in your plan"** (MIỄN PHÍ)
5. Click **Enable**

## Bước 3: Deploy lại
```bash
git add .
git commit -m "Add Vercel Analytics"
git push
```

Vercel sẽ tự động deploy và Analytics sẽ hoạt động ngay!

## Xem thống kê
- Truy cập: https://vercel.com/dashboard
- Chọn project → Tab **Analytics**
- Bạn sẽ thấy:
  - 📊 Page views
  - 👥 Unique visitors  
  - 🌍 Top countries
  - 📱 Devices (Desktop/Mobile)
  - 📄 Top pages
  - 🔗 Referrers

## Hobby Plan (MIỄN PHÍ) bao gồm:
✅ 50,000 events/tháng (quá đủ cho portfolio)
✅ 30 ngày lịch sử dữ liệu
✅ Privacy-friendly, tuân thủ GDPR
✅ Không cần cookie consent
✅ Realtime tracking

## Lưu ý
- Hoàn toàn miễn phí cho Hobby plan
- Data cập nhật realtime
- Không cần config phức tạp
- Tích hợp sẵn với Vercel
