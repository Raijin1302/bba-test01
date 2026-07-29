# KEY TAKEAWAYS - TỔNG HỢP KIẾN THỨC GIT & JAVASCRIPT

# PHẦN 1: QUY TẮC & QUY TRÌNH LÀM BÀI TẬP (SIÊU QUAN TRỌNG)

1. QUY TRÌNH CHUẨN BỊ NHÁNH TRƯỚC KHI LÀM BÀI

Luôn tuân thủ 3 bước lệnh theo thứ tự sau để tránh xung đột code (conflict) và đảm bảo làm việc trên phiên bản mới nhất:

## Bước 1: Chuyển về nhánh chính (main)

git checkout main

## Bước 2: Kéo code mới nhất từ kho chứa trên GitHub về máy

git pull origin main

## Bước 3: Tạo nhánh mới tương ứng với bài học và tên bạn để bắt đầu làm việc

git checkout -b lesson-05-<tenban>

## Ví dụ: git checkout -b lesson-05-hoan

2. QUY TẮC LƯU TRỮ VÀ ĐẶT TÊN THƯ MỤC

- Vị trí làm bài: Mỗi bài học phải tạo 1 folder mới nằm bên trong thư mục cá nhân theo đường dẫn chuẩn:
  tests/student-submissions/<thư-mục-của-bạn>/lesson-05/
- Toàn bộ các file tạo ra trong buổi học (như key-takeaways.md, 01-lythuyet-git.txt, 02-thuc-hanh-git.txt...) bắt buộc phải được đặt trong thư mục lesson-05 này để Mentor tiện chấm bài.

PHẦN 2: LÝ THUYẾT VỀ PHÂN NHÁNH (BRANCH) & ĐỒNG BỘ CODE

1. QUẢN LÝ NHÁNH VỚI GIT BRANCH

- Lý thuyết: Nhánh (branch) giống như việc bạn tạo ra một bản sao song song của dự án. Nó giúp bạn tự do thử nghiệm, viết code tính năng mới hoặc làm bài tập mà không làm ảnh hưởng hay hư hỏng code của nhánh chính (main/master).
- Các câu lệnh phổ biến:
  - git branch: Xem danh sách tất cả các nhánh đang có trên máy (nhánh đang đứng sẽ có dấu \* màu xanh ở trước).
  - git branch <ten_nhanh>: Tạo một nhánh mới nhưng chưa chuyển sang nhánh đó.
  - git branch -d <ten_nhanh>: Xóa một nhánh đã làm xong (-d là viết tắt của delete).

## Xem danh sách nhánh

git branch

## Tạo nhánh mới tên là "ft-login"

git branch ft-login

2. CHUYỂN ĐỔI NHÁNH VỚI GIT CHECKOUT

- Lý thuyết: Dùng để di chuyển không gian làm việc của bạn sang một nhánh khác đã tồn tại trên máy. Khi bạn chạy lệnh này, toàn bộ file trong thư mục làm việc sẽ tự động thay đổi đúng theo trạng thái code của nhánh mà bạn vừa chuyển tới.

## Chuyển từ nhánh hiện tại sang nhánh "main"

git checkout main

## Chuyển sang nhánh bài tập đã tạo trước đó

git checkout lesson-05-hoan

3. TẠO VÀ CHUYỂN NHÁNH NHANH VỚI GIT CHECKOUT -B

- Lý thuyết: Đây là lệnh "2 trong 1" được sử dụng nhiều nhất trong thực tế. Nó kết hợp giữa việc tạo nhánh mới (git branch) và lập tức chuyển ngay sang nhánh đó (git checkout).
- Cú pháp: git checkout -b <tên_nhánh_mới> (Chữ -b viết tắt của branch).

## Thay vì phải gõ 2 lệnh:

## 1. git branch lesson-05-hoan

## 2. git checkout lesson-05-hoan

## CHỈ CẦN gõ 1 lệnh duy nhất:

git checkout -b lesson-05-hoan

4. CẬP NHẬT CODE MỚI NHẤT VỚI GIT PULL

- Lý thuyết: Kéo (tải) toàn bộ commit và thay đổi mới nhất từ kho lưu trữ từ xa (Remote - trên GitHub/GitLab) về gộp (merge) vào nhánh hiện tại trên máy cá nhân (Local).
- Quy tắc vàng: Luôn luôn chạy lệnh git pull origin main khi đang đứng ở nhánh main trước khi tạo nhánh mới, điều này đảm bảo nhánh bài tập của bạn được tách ra từ phiên bản code mới nhất, tránh bị lỗi xung đột (conflict) khi nộp bài.

## Kéo code mới nhất của nhánh main từ Remote (origin) về máy

git pull origin main

## Hoặc nếu đang đứng sẵn ở nhánh nào thì chỉ cần pull của nhánh đó:

git pull

# PHẦN 3: LÝ THUYẾT CÁC CÂU LỆNH GIT NÂNG CAO

1. THAY ĐỔI NỘI DUNG LỜI NHẮN COMMIT (--AMEND)

- Lý thuyết: Dùng để chỉnh sửa lại thông điệp (commit message) của commit gần nhất ngay trước đó. Ngoài ra, nếu bạn vừa quên add một file vào commit trước, bạn có thể git add <file_đó> rồi chạy lệnh --amend để gộp file mới vào commit cũ mà không tạo ra commit mới bị rác lịch sử.

git commit --amend -m "lời nhắn mới đã được sửa"

2. ĐƯA FILE TỪ STAGING AREA TRỞ LẠI WORKING DIRECTORY (RESTORE --STAGED)

- Lý thuyết: Dùng để hủy trạng thái chờ commit của một file (khi bạn đã lỡ gõ git add <file>). Lệnh này chỉ đưa file từ vùng Staging về lại vùng Working Directory chứ hoàn toàn không làm mất hay thay đổi nội dung code bạn đã chỉnh sửa bên trong file.

git restore --staged <file_name>

3. HỦY BỎ N COMMIT GẦN NHẤT (RESET HEAD~<SỐ_LƯỢNG>)

- Lý thuyết: Dùng để quay ngược thời gian, xóa bỏ N commit gần nhất tính từ thời điểm hiện tại (với <số_lượng> là số commit bạn muốn hủy, ví dụ HEAD~1, HEAD~2, HEAD~5...). Mặc định lệnh git reset chạy ở chế độ --mixed, do đó toàn bộ code thay đổi của các commit bị hủy đó không bị mất đi mà được gộp và trả ngược về lại vùng làm việc (Working Directory) để bạn có thể tiếp tục chỉnh sửa hoặc gom lại tạo thành commit mới.

## Lùi lại 1 commit gần nhất

git reset HEAD~1

## Lùi lại 3 commit gần nhất (thay số 3 bằng số bất kỳ bạn muốn)

git reset HEAD~3
