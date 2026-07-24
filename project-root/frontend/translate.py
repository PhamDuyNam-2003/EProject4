import io

file_path = 'lib/features/booking/screens/booking_screen.dart'
with io.open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    "'Select Guests & Rooms'": "'Chọn Khách & Phòng'",
    "'Rooms'": "'Số phòng'",
    "'Adults'": "'Người lớn'",
    "'Children'": "'Trẻ em'",
    "'Select Room Type'": "'Chọn Loại Phòng'",
    "'\$${rt.basePrice}/night - Max ${rt.maxAdults} adults'": "'\$${rt.basePrice}/đêm - Tối đa ${rt.maxAdults} người lớn'",
    "'Done'": "'Hoàn tất'",
    "'Price Summary'": "'Tóm tắt chi phí'",
    "'Taxes & Fees'": "'Thuế & Phí'",
    "'\$rooms ${tr(\\'Rooms\\')} x \$nights nights'": "'\$rooms Phòng x \$nights đêm'",
    "tr('Total Amount')": "'Tổng cộng'",
    "'\$rooms Room (${selectedRoomType?.name ?? \"Standard\"}), ${adults + children} Guest'": "'\$rooms Phòng (${selectedRoomType?.name ?? \"Tiêu chuẩn\"}), ${adults + children} Khách'"
}

for old, new in replacements.items():
    content = content.replace(old, new)

with io.open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Translated successfully')
