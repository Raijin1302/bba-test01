# KEY TAKEAWAYS - TỔNG HỢP KIẾN THỨC JS OBJECT, ARRAY & FUNCTION

# 1. OBJECT LÀ GÌ? TẠI SAO CẦN OBJECT?

Object (Đối tượng) là kiểu dữ liệu dùng để lưu trữ một tập hợp các cặp key – value (khoá – giá trị).

## Vấn đề khi không có Object

Giả sử bạn cần lưu thông tin 1 sinh viên:

let hoTen = "Nguyễn Văn A";
let tuoi = 20;
let lop = "WEB01";

- 3 biến rời rạc, khó quản lý. Nếu có 100 sinh viên thì sao?

## Giải pháp: dùng Object

let sinhVien = {
hoTen: "Nguyễn Văn A",
tuoi: 20,
}

# 2. CÁCH KHAI BÁO OBJECT

## Cách 1: Object Literal (phổ biến nhất)

let xe = {
hang: "Toyota",
mau: "Trắng",
namSanXuat: 2023
};

## Cách 2: Dùng new Object()

let xe = new Object();
xe.hang = "Toyota";
xe.mau = "Trắng";
xe.namSanXuat = 2023;

- Thực tế: Cách 1 (Object Literal) được dùng gần như 100% vì ngắn gọn hơn.

## Quy tắc đặt tên key

- Key thường là string, không cần đặt trong dấu ngoặc kép nếu là tên hợp lệ (không có dấu cách, ký tự đặc biệt).
- Nếu key có dấu cách hoặc ký tự đặc biệt -> bắt buộc đặt trong ngoặc kép.

let person = {
"full name": "Nguyen Van A", // key có dấu cách -> cần ngoặc kép
age: 25 // key bình thường -> không cần
};

# 3. CÁCH TRUY XUẤT OBJECT

## Cách 1: Dot notation (Dấu chấm) – phổ biến

let sinhVien = { hoTen: "Lan", tuoi: 22 };

console.log(sinhVien.hoTen); // "Lan"
console.log(sinhVien.tuoi); // 22

## Cách 2: Bracket notation (Dấu ngoặc vuông)

console.log(sinhVien["hoTen"]); // "Lan"

## Khi nào BẮT BUỘC dùng bracket notation?

// 1. Key có dấu cách hoặc ký tự đặc biệt
let obj = { "full name": "Lan" };
console.log(obj["full name"]); // Hợp lệ
// console.log(obj.full name); // Lỗi cú pháp

// 2. Key là biến
let keyName = "hoTen";
console.log(sinhVien[keyName]); // "Lan"
// console.log(sinhVien.keyName); // undefined - tìm key tên "keyName"

# 4. GÁN GIÁ TRỊ CHO OBJECT

let sinhVien = { hoTen: "Lan", tuoi: 22 };

## Sửa giá trị

sinhVien.tuoi = 23;
console.log(sinhVien.tuoi); // 23

## Thêm key mới (key chưa tồn tại -> tự tạo mới)

sinhVien.email = "lan@gmail.com";
console.log(sinhVien);

# 5. THÊM, SỬA, XOÁ THUỘC TÍNH

## Thêm

let product = { ten: "Áo thun" };
product.gia = 150000; // thêm bằng dot
product["mauSac"] = "Đen"; // thêm bằng bracket

## Sửa

product.gia = 180000; // cập nhật giá

## Xoá

delete product.mauSac;
console.log(product); // { ten: "Áo thun", gia: 180000 }

- Cảnh báo: delete chỉ xoá thuộc tính khỏi Object. Nó không xoá biến.

# 6. OBJECT LỒNG NHAU (NESTED OBJECT)

Giá trị (value) của một key có thể là bất kỳ kiểu dữ liệu nào, kể cả một Object khác.

let sinhVien = {
hoTen: "Minh",
tuoi: 21,
diaChi: {
soNha: "12",
duong: "Lê Lợi",
thanhPho: "Hồ Chí Minh"
}
};

# 7. ARRAY (MẢNG) LÀ GÌ?

- Array là một kiểu dữ liệu dùng để lưu trữ một danh sách các giá trị (có thể là số, chuỗi, object, hoặc mảng khác).
- Các phần tử trong mảng được sắp xếp theo thứ tự và có chỉ số (index) bắt đầu từ 0.

## Cách khai báo Array:

// Khai báo một mảng các số
let numbers = [10, 20, 30, 40, 50];

// Khai báo một mảng các chuỗi
let fruits = ["Apple", "Banana", "Orange"];

// Mảng chứa các kiểu dữ liệu khác nhau
let mixedArray = [1, "Hello", true, { name: "John" }];

## Truy cập và sửa đổi phần tử trong Array:

let colors = ["Red", "Green", "Blue"];

// Truy cập phần tử (index bắt đầu từ 0)
console.log(colors[0]); // "Red"
console.log(colors[2]); // "Blue"

// Sửa đổi phần tử
colors[1] = "Yellow";
console.log(colors); // ["Red", "Yellow", "Blue"]

## Các phương thức (methods) phổ biến của Array:

let animals = ["Dog", "Cat"];

// Thêm phần tử vào cuối mảng
animals.push("Bird");

// Xóa phần tử ở cuối mảng
animals.pop();

// Lấy độ dài của mảng
console.log(animals.length); // 2

# 8. FUNCTION (HÀM) LÀ GÌ?

- Function là một khối code được nhóm lại với nhau để thực hiện một nhiệm vụ cụ thể.
- Giúp tái sử dụng code, làm code gọn gàng và dễ quản lý hơn.
- Function có thể nhận đầu vào (tham số - parameters) và trả về kết quả (return).

# Cách khai báo và gọi Function:

// 1. Function Declaration (Khai báo hàm thông thường)
function sayHello(name) {
return "Xin chào " + name + "!";
}

// Gọi hàm
let greeting = sayHello("Hải");
console.log(greeting); // "Xin chào Hải!"

// 2. Function Expression (Gán hàm cho một biến)
const calculateSum = function(a, b) {
return a + b;
};

console.log(calculateSum(5, 10)); // 15

// 3. Arrow Function (Hàm mũi tên - ES6, phổ biến hiện nay)
const multiply = (x, y) => {
return x \* y;
};

// Nếu chỉ có 1 dòng return, có thể viết ngắn gọn:
const divide = (x, y) => x / y;

console.log(multiply(4, 5)); // 20
console.log(divide(10, 2)); // 5

## TÓM TẮT SỰ KHÁC BIỆT CƠ BẢN GIỮA OBJECT VÀ ARRAY:

- Dùng Object ({}) khi bạn cần lưu trữ dữ liệu dưới dạng cặp Khoá - Giá trị.
- Dùng Array ([]) khi bạn cần lưu trữ một danh sách các phần tử theo thứ tự.
