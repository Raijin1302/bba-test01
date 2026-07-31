📚 TỔNG HỢP KIẾN THỨC GIT & JAVASCRIPT

# KEY TAKEAWAYS - LESSON 01: GIỚI THIỆU PLAYWRIGHT & THIẾT LẬP MÔI TRƯỜNG

## 1. CẤU HÌNH GIT MẶC ĐỊNH (TRƯỚC KHI LÀM VIỆC)

Trước khi làm việc với Git, bạn cần thiết lập một số cấu hình mặc định trong Git Bash / Terminal:

# 1. Config username (Tên người dùng)

git config --global user.name "<tên bạn>"

# 2. Config email (Địa chỉ email github/gitlab)

git config --global user.email "<email của bạn>"

# 3. Config branch default (Nhánh mặc định là main)

git config --global init.defaultBranch main

## 2. PLAYWRIGHT LÀ GÌ?

- Khái niệm: Là một framework kiểm thử tự động (Automation Test Framework) mạnh mẽ dành cho web.
- Lịch sử & Phát triển: Tiền thân là Puppeteer, được Microsoft tài trợ và phát triển lên.
- Trang chủ: https://playwright.dev/

## 3. ƯU ĐIỂM NỔI BẬT CỦA PLAYWRIGHT

3.1. Cross-platform (Đa nền tảng)

- Code một lần, chạy trên tất cả các hệ điều hành phổ biến: Windows, Linux, macOS.

  3.2. Cross-browser (Đa trình duyệt)

- Hỗ trợ đầy đủ các trình duyệt phổ biến: Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari (Webkit).
- Hỗ trợ kiểm thử tương thích lên tới 143 phiên bản trình duyệt.

  3.3. Device Descriptors (Giả lập đa thiết bị)

- Tích hợp sẵn bộ mô tả thiết bị (DeviceDescriptor) giúp dễ dàng giả lập kiểm thử trên nhiều dòng điện thoại, máy tính bảng khác nhau (ví dụ: Galaxy S24, Galaxy S9+, Galaxy Note 3, iPhone, iPad, BlackBerry PlayBook... ở cả chế độ dọc và ngang - landscape).

## 4. CÁCH CÀI ĐẶT PLAYWRIGHT (NPM)

Bước 1: Chạy lệnh khởi tạo project

Mở Terminal / Git Bash tại thư mục project và chạy lệnh:

npm init playwright@latest

Bước 2: Trả lời các tùy chọn cấu hình (Interactive Prompts)

Trong quá trình cài đặt, chọn các cấu hình tiêu chuẩn như sau:

✔ Do you want to use TypeScript or JavaScript? · TypeScript
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (Y/n) · true
✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

## 5. TẠO SSH KEY VÀ THÊM LÊN GITHUB (KẾT NỐI GIT & GITHUB)

Để đẩy code (git push) và kéo code (git pull) từ GitHub về máy tính một cách bảo mật mà không cần nhập mật khẩu mỗi lần, chúng ta sử dụng SSH Key.

Tạo SSH Key mới trên máy tính

Mở Git Bash (Windows) hoặc Terminal (macOS/Linux) và chạy lệnh sau (thay email của bạn vào):

ssh-keygen -t ed25519 -C "<email_cua_ban@example.com>"
