# 💻 Local Usage Guide

## ✅ Sử dụng hoàn toàn offline - không cần GitHub!

Project này có thể chạy hoàn toàn trên máy local của bạn để tự động cập nhật followers list trong file README.md.

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```
*Lệnh này sẽ fix tất cả TypeScript errors*

### 2. Setup GitHub Token
```bash
# Tạo file .env
cp .env.example .env

# Thêm GitHub token vào .env
GITHUB_TOKEN=your_github_token_here
```

**Lấy GitHub Token:**
1. Vào: https://github.com/settings/tokens
2. Tạo token mới với scope: `read:user`
3. Copy token và paste vào file `.env`

### 3. Chạy thử
```bash
# Test setup
npm run test-setup

# Cập nhật followers (sẽ sửa README.md)
npm run update-followers
```

## 📋 Các lệnh có thể dùng

```bash
# Cập nhật followers list
npm run update-followers

# Chạy development mode
npm run dev

# Build project
npm run build

# Test setup
npm run test-setup

# Validate toàn bộ
npm run validate

# Clean build files
npm run clean
```

## 🔄 Workflow Local

1. **Chạy lệnh cập nhật:**
   ```bash
   npm run update-followers
   ```

2. **Kiểm tra kết quả:**
   - Mở file `README.md`
   - Phần followers sẽ được cập nhật tự động
   - Có thể thấy log trong terminal

3. **Sử dụng README.md:**
   - Copy nội dung để paste vào GitHub profile
   - Hoặc sử dụng làm template cho projects khác
   - Hoặc chỉ để theo dõi followers locally

## 🎯 Use Cases Local

### 1. **Theo dõi Followers**
- Chạy định kỳ để xem ai follow/unfollow
- Tạo backup danh sách followers
- Phân tích growth pattern

### 2. **Tạo Content**
- Generate HTML table cho website cá nhân
- Tạo followers showcase cho portfolio
- Export data để sử dụng ở nơi khác

### 3. **Development & Testing**
- Test GitHub API integration
- Customize HTML output format
- Develop thêm features mới

## ⚙️ Customization

### Thay đổi format HTML:
Edit file: `src/helpers/genFollowersHtml.ts`

### Thay đổi số followers per row:
```typescript
// Trong genFollowersHtml.ts, dòng:
if (index % 7 === 0) {
// Thay 7 thành số khác (ví dụ: 5, 10)
```

### Thêm thông tin khác:
Edit file: `src/helpers/getFollowers.ts` để lấy thêm data từ API

## 🔧 Troubleshooting

### Lỗi "Cannot find module"
```bash
npm install
```

### Lỗi GitHub API
- Kiểm tra token trong `.env`
- Kiểm tra internet connection
- Kiểm tra rate limit (60 requests/hour without token, 5000 with token)

### File README.md không update
- Kiểm tra có comments `<!-- FOLLOWER-LIST:START -->` và `<!-- FOLLOWER-LIST:END -->`
- Kiểm tra permissions ghi file

## 💡 Pro Tips

1. **Chạy định kỳ:**
   ```bash
   # Tạo script để chạy hàng ngày
   echo "npm run update-followers" > update.sh
   chmod +x update.sh
   ```

2. **Backup followers:**
   ```bash
   # Trước khi update, backup file cũ
   cp README.md README.backup.md
   npm run update-followers
   ```

3. **Multiple profiles:**
   - Copy project này cho nhiều GitHub accounts
   - Thay đổi token trong `.env` cho từng account

**Hoàn toàn không cần GitHub để sử dụng! 🎉**