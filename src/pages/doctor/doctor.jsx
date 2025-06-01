import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HospitalInterface = () => {

    const [data, setData] = useState([
  {
    id_bac_si: 11,
    ho_ten: 'Nguyễn Văn Anh',
    id_khoa: 9,
    so_dien_thoai: '0282892822',
    email: 'nguyenvana@gmail.com',
    chuc_danh: 'Bác sĩ Nội khoa',
    mo_ta: 'Chuyên điều trị các bệnh lý tiêu hóa',
    hinh_anh_bs: 'https://aihealth.vn/app/uploads/2022/08/nguyen-ho-vinh-phuoc.png',
    bang_cap:'Tiến sĩ'
  },
  {
    id_bac_si: 12,
    ho_ten: 'Trần Thị Bính',
    id_khoa: 8,
    so_dien_thoai: '0908718571',
    email: 'tranthib@gmail.com',
    chuc_danh: 'Bác sĩ Da liễu',
    mo_ta: 'Kinh nghiệm hơn 10 năm trong điều trị mụn',
    hinh_anh_bs: 'https://images2.thanhnien.vn/thumb_w/686/528068263637045248/2024/3/7/41498385661961282804899348165590311304931596n-17098051418122006775403-0-286-2048-1822-crop-1709805739243640175866.jpg',
    bang_cap:'Thạc sĩ'
  },
  {
    id_bac_si: 13,
    ho_ten: 'Lê Văn Chiêu',
    id_khoa: 4,
    so_dien_thoai: '0907846469',
    email: 'levanc@gmail.com',
    chuc_danh: 'Bác sĩ Nhi khoa',
    mo_ta: 'Chuyên gia chăm sóc sức khỏe trẻ em',
    hinh_anh_bs: 'https://images2.thanhnien.vn/528068263637045248/2024/12/15/bsha--sh3960-1734281160125669894196.jpeg',
    bang_cap:'Thạc sĩ'
  },
  {
    id_bac_si: 14,
    ho_ten: 'Phạm Thị Dinh',
    id_khoa: 6,
    so_dien_thoai: '0909542875',
    email: 'phamthid@gmail.com',
    chuc_danh: 'Bác sĩ Tim mạch',
    mo_ta: 'Tư vấn điều trị bệnh tim mạch mãn tính',
    hinh_anh_bs: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uasAaXMsAGKz9lJKTosmybJlY3HCAOze7yTMJwxV1t-2OQnlHG2qYcejBs0n2cDwCYo&usqp=CAU',
    bang_cap:'Thạc sĩ'
  },
  {
    id_bac_si: 15,
    ho_ten: 'Nguyễn Văn Yên',
    id_khoa: 3,
    so_dien_thoai: '0906036269',
    email: 'nguyenvany@gmail.com',
    chuc_danh: 'Bác sĩ Tai Mũi Họng',
    mo_ta: 'Điều trị viêm xoang, viêm mũi dị ứng',
    hinh_anh_bs: 'https://htmediagroup.vn/wp-content/uploads/2022/01/Anh-bac-si-1-min.jpg',
    bang_cap:'Tiến sĩ'
  },
  {
    id_bac_si: 16,
    ho_ten: 'Trần Văn Phú',
    id_khoa: 2,
    so_dien_thoai: '0907503290',
    email: 'tranvanphu@gmail.com',
    chuc_danh: 'Bác sĩ Chẩn đoán hình ảnh',
    mo_ta: 'Phân tích kết quả X-quang, MRI, CT',
    hinh_anh_bs: 'https://bizweb.dktcdn.net/100/175/849/files/chup-anh-profile-cho-bac-si-tai-ha-noi-studio-yeu-media-dep-11.jpg?v=1636203347837',
    bang_cap:'Thạc sĩ'
  },
  {
    id_bac_si: 17,
    ho_ten: 'Lê Thị Giang',
    id_khoa: 6,
    so_dien_thoai: '0904865469',
    email: 'lethig@gmail.com',
    chuc_danh: 'Bác sĩ Sản khoa',
    mo_ta: 'Chăm sóc sức khỏe sinh sản cho phụ nữ',
    hinh_anh_bs: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkE7_odjqVL8zfLm4m3BaAy9golSWsMuuLavXui2sREU9LCGij21OqIH84I_ndRHKyBg&usqp=CAU',
    bang_cap:'Thạc sĩ'
  },
  {
    id_bac_si: 18,
    ho_ten: 'Phạm Văn Hải',
    id_khoa: 10,
    so_dien_thoai: '0902209996',
    email: 'phamvanh@gmail.com',
    chuc_danh: 'Bác sĩ Ngoại tổng quát',
    mo_ta: 'Thực hiện phẫu thuật nội soi và mở',
    hinh_anh_bs: 'https://htmediagroup.vn/wp-content/uploads/2022/12/Anh-bac-si-12-min.jpg',
    bang_cap:'Tiến sĩ'
  },
  {
    id_bac_si: 19,
    ho_ten: 'Nguyễn Thị Lan Phương',
    id_khoa: 8,
    so_dien_thoai: '0901603635',
    email: 'nguyenthilp@gmail.com',
    chuc_danh: 'Bác sĩ Da liễu',
    mo_ta: 'Chuyên điều trị da liễu thẩm mỹ',
    hinh_anh_bs: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMm5hhNBN44lSzUtU8eCU4hkTL4TCyR99m1J3x3KWFMBflG3O-sMl6P-c74yRfEE7tMmg&usqp=CAU',
    bang_cap:'Thạc sĩ'
  },
  {
    id_bac_si: 20,
    ho_ten: 'Trần Văn Tịnh',
    id_khoa: 8,
    so_dien_thoai: '0909096971',
    email: 'tranvant@gmail.com',
    chuc_danh: 'Bác sĩ Nội tiết',
    mo_ta: 'Chuyên sâu về điều trị tiểu đường',
    hinh_anh_bs: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRA9vmEEgCVA7HrHW1_iNqIE_ZHLjM1qSEdhyxKCt4ZK2K7IetzN7sAnxOPh-czig7kyE&usqp=CAU',
    bang_cap:'Tiến sĩ'
  },
  {
    id_bac_si: 23,
    ho_ten: 'Nguyễn Văn Lương',
    id_khoa: 6,
    so_dien_thoai: '0343493518',
    email: 'nguyenvanluong@gmail.com',
    chuc_danh: 'Bác sĩ Tim mạch',
    mo_ta: 'Chuyên điều trị cao huyết áp',
    hinh_anh_bs: 'data:image/jpeg;base64,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',
    bang_cap:'Thạc sĩ'
  },
  {
    id_bac_si: 26,
    ho_ten: 'Ngô Quý Ánh',
    id_khoa: 7,
    so_dien_thoai: '0923817282',
    email: 'quykhanh@gmail.com',
    chuc_danh: 'Bác sĩ Tâm lý',
    mo_ta: 'Tư vấn và điều trị các vấn đề tâm lý',
    hinh_anh_bs: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKKjnQe8-LHvveozWZ5BbCLZXQlxgI0IaMRg&s',
     bang_cap:'Thạc sĩ'
  },
  {
    id_bac_si: 27,
    ho_ten: 'Nguyễn Thúy An',
    id_khoa: 2,
    so_dien_thoai: '0901234567',
    email: 'nguyenthuyan@gmail.com',
    chuc_danh: 'Bác sĩ Xét nghiệm',
    mo_ta: 'Chuyên phụ trách kiểm nghiệm lâm sàng',
    hinh_anh_bs: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjAS3qh7glFQprwuHVe3xCqQwMQoqcH9xXQw&s',
    bang_cap:'Thạc sĩ'
  },
  {
    id_bac_si: 28,
    ho_ten: 'Trần Thị Bích',
    id_khoa: 3,
    so_dien_thoai: '0912345678',
    email: 'tranthibich@gmail.com',
    chuc_danh: 'Bác sĩ Mắt',
    mo_ta: 'Điều trị các bệnh lý về mắt',
    hinh_anh_bs: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvdsn-gCad7KBsuSUXW5Btm2BT9ZV3YbHxw&s',
    bang_cap:'Tiến sĩ'
  },
  {
    id_bac_si: 29,
    ho_ten: 'Lê Văn Cường',
    id_khoa: 4,
    so_dien_thoai: '0923456789',
    email: 'levancuong@gmail.com',
    chuc_danh: 'Bác sĩ Răng Hàm Mặt',
    mo_ta: 'Chuyên về nha khoa tổng quát',
    hinh_anh_bs: 'https://jaystudio.asia/wp-content/uploads/2020/10/IMG_4895.webp',
    bang_cap:'Thạc sĩ'
  },
  {
    id_bac_si: 30,
    ho_ten: 'Phạm Thị Dung',
    id_khoa: 6,
    so_dien_thoai: '0934567890',
    email: 'phamthidung@gmail.com',
    chuc_danh: 'Bác sĩ Phụ khoa',
    mo_ta: 'Khám và điều trị các bệnh phụ khoa',
    hinh_anh_bs: 'https://tueanh.vn/uploads/plugin/news/367/1727240112-47870822-pho-giao-s-ti-n-s-bac-s-le-th-ong-ph-ng.jpg',
    bang_cap:'Thạc sĩ'
  },
  {
    id_bac_si: 31,
    ho_ten: 'Hoàng Văn Đức',
    id_khoa: 7,
    so_dien_thoai: '0945678901',
    email: 'hoangvanduc@gmail.com',
    chuc_danh: 'Bác sĩ Chấn thương chỉnh hình',
    mo_ta: 'Điều trị gãy xương, tổn thương cơ xương khớp',
    hinh_anh_bs: 'https://jaystudio.asia/wp-content/uploads/2020/10/IMG_4713.webp',
    bang_cap:'Thạc sĩ'
  },
  {
    id_bac_si: 32,
    ho_ten: 'Đỗ Thị Hạnh',
    id_khoa: 8,
    so_dien_thoai: '0956789012',
    email: 'dothihanh@gmail.com',
    chuc_danh: 'Bác sĩ Da liễu',
    mo_ta: 'Chuyên về chăm sóc da và trị nám',
    hinh_anh_bs: 'https://jaystudio.asia/wp-content/uploads/2020/10/IMG_4882.webp',
    bang_cap:'Tiến sĩ'
  },

    ]);

    //tạo usestate chứa list search
    const [searchParams, setSearchParams] = useState({
        searchTerm: "",
        id_khoa: "",
        gioi_tinh: "",
        id_bang_cap: "",
    });

    //load dữ liệu bác sĩ
    const loadData = async () => {
        setData(data);
    };

    const handleSearch = async () => {
        const { searchTerm, id_khoa, gioi_tinh, id_bang_cap } = searchParams;
        const query = new URLSearchParams({
            searchTerm,
            id_khoa,
            gioi_tinh,
            id_bang_cap,
        }).toString();

        try {
            const response = await axios.get(`http://localhost:5000/api/searchdoctors?${query}`);
            setData(response.data);
        } catch (error) {
            console.error("Error searching data", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams((prev) => ({ ...prev, [name]: value }));
    };


    useEffect(() => {
        loadData();
    }, []);

    // Gọi API khi searchParams thay đổi, sử dụng debounce
    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            handleSearch();
        }, 500); // Chờ 500ms trước khi thực hiện tìm kiếm

        return () => clearTimeout(debounceTimeout); // Xóa timeout nếu searchParams thay đổi trước khi timeout hoàn tất
    }, [searchParams]);

    return (
        <div  className="container-bs">
            <div className="header-bs">
                <p>
                    Phòng khám Đa khoa phố nối còn là nơi hội tụ của hơn 15 tiến sĩ, chuyên gia đầu ngành trong mọi lĩnh vực, 
                    phần lớn các chuyên gia đều đã và đang làm việc tại các bệnh viện lớn như Bệnh viện Bạch Mai, 
                    Bệnh viện 108, Bệnh viện 103, Bệnh viện Việt Đức, Bệnh viện Phụ sản Trung ương, 
                    Bệnh viện Nhi Trung ương, Bệnh viện Tai – Mũi – Họng Trung ương… và luôn hành nghề theo tiêu chí:
                </p>
                <blockquote>“Khám với chuyên gia – Tận tâm như người nhà”</blockquote>
            </div>

            <div className="search-section">
                <input
                    type="text"
                    name="searchTerm"
                    onChange={handleInputChange}
                    placeholder="Tìm theo tên bác sĩ"
                    className="search-input"
                />
                <select
                    name="id_khoa"
                    className="specialty-select"
                    onChange={handleInputChange}
                >
                    <option value="">Chuyên khoa</option>
                    <option value="">Hiển thị tất cả chuyên khoa</option>
                </select>
                <select
                    name="gioi_tinh"
                    className="gender-select"
                    onChange={handleInputChange}
                >
                    <option value="">Giới tính</option>
                    <option value="">Hiển thị tất cả giới tính</option>
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>
                </select>
                <select
                    name="id_bang_cap"
                    className="education-select"
                    onChange={handleInputChange}
                >
                    <option value="">Trình độ</option>
                    <option value="">Hiển thị tất cả trình độ</option>
                </select>
            </div>

            <div className="doctors-section">
                {data.map((item) => (
                    <div key={item.id_bac_si} className="doctor-card">
                        <img src={item.hinh_anh_bs} alt="" className="doctor-image" />
                        <p>Bác sĩ</p>
                        <h3>
                            {item.bang_cap} - {item.ho_ten}
                        </h3>
                        <p>{item.chuc_danh} – {item.mo_ta}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HospitalInterface;
