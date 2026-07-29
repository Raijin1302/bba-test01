📚 TỔNG HỢP KIẾN THỨC GIT & JAVASCRIPT

# Git

## Một số câu lệnh

- Xem trạng thái file
  - cú pháp: git status
  - File màu xanh: vùng staging
  - File màu đỏ: vùng working directory
- Kiểm tra danh sách commit
  - cú pháp: git log

## Commit convention

- Trong lớp học, dùng convention sau: <type>: <short_description>
- Trong đó:
  - type: loại commit
    - chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
    - feat: thêm tính năng mới, test case mới
    - fix: sửa lỗi 1 test trước đó
  - short_description: mô tả ngắn gọn
    - Giới hạn: 50 kí tự
    - Ngôn ngữ: tiếng Anh hoặc tiếng Việt không dấu
- Ví dụ
  - chore: remove unused file
  - feat: add code for exercises 2
  - fix: fix automation for case 1

---

# JavaScript

## Data Type

- Làm sao để biết một biến có kiểu dữ liệu gì?
  - Đọc code xem khai báo thế nào!
  - Sử dụng hàm typeof
  - cú pháp: typeof <variable>
  - Output: number || string || boolean

## Toán tử so sánh

- Toán tử so sánh dùng để so sánh 2 toán hạng (Ví dụ: a=5, b=10)
- Chia làm ba nhóm:
  - So sánh bằng: == và ===
  - So sánh không bằng: != và !==
  - So sánh lớn hơn, nhỏ hơn: >, <, <=, >=
- So sánh hai bằng == (Loose Equality)
  - So sánh giá trị sau khi chuyển đổi kiểu (type coercion)
  - 5 == "5" (true - do chuyển string thành number)
  - 5 == "6" (false - do chuyển string thành number)
  - true == 1 (true - do true chuyển thành 1)
  - false == 0 (true - do false chuyển thành 0)
- So sánh ba bằng === (Strict Equality)
  - Luôn NÊN DÙNG
  - So sánh giá trị và kiểu dữ liệu - KHÔNG chuyển đổi kiểu
  - 5 === "5" (false - khác kiểu)
  - true === 1 (false - khác kiểu)
  - false === 0 (false - khác kiểu)
  - 5 === 5 (true - cùng kiểu, cùng giá trị)
- So sánh không bằng != và !==
  - != (Loose - có chuyển đổi kiểu)
    - 5 != "5" (false)
    - true != 1 (false)
    - false != 0 (false)
  - !== (Strict - không chuyển đổi kiểu)
    - 5 !== "5" (true)
    - true !== 1 (true)
    - false !== 0 (true)
    - 5 !== 5 (false)

## Toán tử logic

- Toán tử logic dùng để kết hợp nhiều điều kiện và trả về boolean
  - && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng
  - || (OR): trả về đúng nếu một trong 2 vế của mệnh đề đúng

## Toán tử một ngôi

Toán tử một ngôi là toán tử chỉ cần một toán hạng để thực hiện.
Hai loại:

- Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau
- Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau

let x = 5;
x++;
++x;
x--;
--x;

let a = 10;
b = ++a; // tăng a lên 11 rồi trả về => b có giá trị là 11

let c = 10;
d = c++; // trả về giá trị 10 cho d rồi mới tăng
// => d có giá trị là 10

## Toán tử toán học

Toán tử toán học tương tự như các phép tính cộng trừ nhân chia đã được học:
+, -, \*, /

Ví dụ:

const firstNumber = 5;
const secondNumber = 10;
const result = firstNumber + secondNumber; // result = 15

Lưu ý: khi chia cho 0, sẽ ra kết quả infinity (vô cực)
