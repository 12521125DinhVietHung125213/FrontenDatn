import { Fragment, useEffect, useState } from "react";
import Productt from "../../until/layoutauto";
import useProductFilter from "../../until/fillter";
import { Link, useSearchParams } from "react-router-dom";
import AddProduct from "../../until/cart";
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export default function Product() {
    Productt();
    useProductFilter();
    AddProduct();
    
    const [data, setData] = useState([
          {
    "id_dich_vu": 1,
    "ten_dich_vu": "Khám tổng quát cho nam",
    "gia": 600000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://careplusvn.com/Uploads/t/go/goi-tong-quat-tieu-chuan-nam_0008574_730.png",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 2
  },
  {
    "id_dich_vu": 2,
    "ten_dich_vu": "Khám sức khỏe tiền hôn nhân cho nam",
    "gia": 700000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://benhvien22-12.com/wp-content/uploads/2023/03/tien-hon-nhan-fb.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 3
  },
  {
    "id_dich_vu": 3,
    "ten_dich_vu": "Gói khám sức khỏe dinh dưỡng nam giới",
    "gia": 800000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://production-cdn.pharmacity.io/digital/original/plain/blog/540a8641541e08cb3a36f7e3dbdadadd1741547296.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUYXZVMJM5QUYWSVO%2F20250502%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250502T051942Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Signature=e7d750415ae80edde33f281bc978d0d6d7168068707dbf2f390948290b896411",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 4
  },
  {
    "id_dich_vu": 4,
    "ten_dich_vu": "Gói khám tổng quát sức khỏe cho nữ",
    "gia": 900000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://sadec.phuongchau.com/wp-content/uploads/2022/09/goi-kham-suc-khoe-toan-dien-premium-nu.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 5
  },
  {
    "id_dich_vu": 5,
    "ten_dich_vu": "Gói khám xét nhiệm bạch cầu",
    "gia": 1000000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://benhvienthanglong.vn/wp-content/uploads/2021/03/20200815_cac-chi-so-xet-nghiem-mau-binh-thuong-01.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 6
  },
  {
    "id_dich_vu": 6,
    "ten_dich_vu": "Khám sức khỏe tổng quát cho trẻ em",
    "gia": 1100000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://sadec.phuongchau.com/wp-content/uploads/2022/10/goi-kham-tong-quat-nhi-1-tuoi-den-5-tuoi.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 7
  },
  {
    "id_dich_vu": 7,
    "ten_dich_vu": "Gói khám tiền sản cho bà mẹ",
    "gia": 1200000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://bizweb.dktcdn.net/100/448/457/articles/goi-kham-1.jpg?v=1654869536107",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 8
  },
  {
    "id_dich_vu": 8,
    "ten_dich_vu": "Gói kiểm tra huyết áp định kỳ",
    "gia": 1300000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://medlatec.vn/media/11251/content/20210420_huyet-ap-ket-1.jpeg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 9
  },
  {
    "id_dich_vu": 9,
    "ten_dich_vu": "Khám sức khỏe tổng quát người cao tuổi",
    "gia": 1400000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "data:image/jpeg;base64,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",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 10
  },
  {
    "id_dich_vu": 10,
    "ten_dich_vu": "Gói kiểm tra sức khỏe răng miệng",
    "gia": 1500000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://nhakhoasaigontamduc.com/wp-content/uploads/2023/11/GIANG-HI-2-1024x576.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 1
  },
  {
    "id_dich_vu": 11,
    "ten_dich_vu": "Khám mắt định kỳ",
    "gia": 1600000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://jieh.vn/upload/images/news/Th%C3%B4ng%20tin%20nh%C3%A3n%20khoa/Do%20day%20giac%20mac%20phu%20hop.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 2
  },
  {
    "id_dich_vu": 12,
    "ten_dich_vu": "Khám và tư vấn dinh dưỡng người lớn",
    "gia": 1700000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://careplusvn.com/Uploads/t/di/dinh-duong-nam_0008677_730.png",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 3
  },
  {
    "id_dich_vu": 13,
    "ten_dich_vu": "Gói kiểm tra tim mạch",
    "gia": 1800000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://giaan115.com/uploads/files/2023/12/12/G-i-kh-m-TIM-M-CH-CHUY-N-S-U-01.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 4
  },
  {
    "id_dich_vu": 14,
    "ten_dich_vu": "Gói kiểm tra chức năng gan",
    "gia": 1900000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "data:image/jpeg;base64,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",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 5
  },
  {
    "id_dich_vu": 15,
    "ten_dich_vu": "Khám sức khỏe cho nhân viên công ty",
    "gia": 2000000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://bizweb.dktcdn.net/thumb/1024x1024/100/089/365/files/210101-email-mkt-ksk-doanh-nghiep-banner1.jpg?v=1616398365921",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 6
  },
  {
    "id_dich_vu": 16,
    "ten_dich_vu": "Gói khám định kì cho trẻ em",
    "gia": 2100000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://phuongchau.com/Data/Sites/3/News/5345/z5458609337324_f125819f22da692a92a9499d224d6a88.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 7
  },
  {
    "id_dich_vu": 17,
    "ten_dich_vu": "Gói khám sàng lọc các diện bệnh",
    "gia": 2200000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://login.medlatec.vn//ImagePath/images/20230414/20230414_kham-sang-loc-ung-thu-la-kham-nhung-gi-1.png",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 8
  },
  {
    "id_dich_vu": 18,
    "ten_dich_vu": "Gói khám mũi họng",
    "gia": 2300000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://cdn.benhvienthucuc.vn/wp-content/uploads/2024/03/uu-dai-kham-tmh-t3-24-300x600-1.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 9
  },
  {
    "id_dich_vu": 19,
    "ten_dich_vu": "Gói khám điều trị xoang",
    "gia": 2400000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://benhvienbacha.vn/wp-content/uploads/2022/08/nhung-phuong-phap-dieu-tri-benh-viem-xoang-mui-an-toan-hieu-qua-1-scaled.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 10
  },
  {
    "id_dich_vu": 20,
    "ten_dich_vu": "Gói khám và điều trị viêm phổi",
    "gia": 2500000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://dolifehospital.vn/wp-content/uploads/2023/09/z4683650134564_53113aa8f8439f7d1efdbaf62b5422b4.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 1
  },
  {
    "id_dich_vu": 21,
    "ten_dich_vu": "Dịch vụ chụp x-quang phổi",
    "gia": 2600000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://dakhoaanhdung.vn/Content/UserFiles/News/Detail/anh3.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 2
  },
  {
    "id_dich_vu": 22,
    "ten_dich_vu": "Gói tẩy trắng răng",
    "gia": 2700000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://nhakhoahaiau.com/wp-content/uploads/2023/12/13-2-1.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 3
  },
  {
    "id_dich_vu": 23,
    "ten_dich_vu": "Khám tai mũi họng tổng quát",
    "gia": 2800000,
    "mo_ta": "Gói khám tổng quát cho nam giới được thiết kế nhằm đánh giá toàn diện tình trạng sức khỏe hiện tại.",
    "hinh_anh_dv": "https://tamanhhospital.vn/wp-content/uploads/2021/06/kham-tai-mui-hong.jpg",
    "loi_ich_kham": "Phát hiện sớm dấu hiệu bất thường, các nguy cơ bệnh lý phổ biến.",
    "huong_dan_kham": "Nên khám định kỳ mỗi năm một lần, nhịn ăn trước 8 tiếng.",
    "thong_bao": "Ngày hội sức khỏe",
    "uu_dai": "Hot",
    "anh_hover": "/images/quantam.jpg",
    "id_khoa": 4
  }
    ]);
    const [totalservice, setTotalProduct] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: Infinity });
    const [searchTerm, setSearchTerm] = useState({name:""}); // Thêm state cho nhóm sản phẩm

    // Di chuyển loadData ra ngoài useEffect
    const loadData = async () => {
        try {
            const page = searchParams.get('page') || 1;
            const response = await axios.get(`http://localhost:5000/api/getallgdv?page=${page}`);
            setTotalProduct(response.data[0].totalservice);
            setData(response.data);
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu", error);
        }
    };

    const itemsPageSize = 10;

    const handlePageClick = (event) => {
        setSearchParams(params => {
            params.set('page', event.selected + 1);
            console.log(event.selected + 1);
            return params;
        });
    };

    const pageCount = Math.ceil(totalservice / itemsPageSize);

    useEffect(() => {
        if (searchParams.has('page')) {
            loadData(); // Tải dữ liệu khi component được mount
        } else {
            setSearchParams(params => {
                params.set('page', 1);
                return params;
            });
        }
    }, [searchParams, setSearchParams]);

    // Hàm tìm kiếm theo tên
    const handleSearchname = async (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm); // Cập nhật state khi tìm kiếm theo tên
        if (!searchTerm) {
            loadData();
        } else {
            try {
                const response = await axios.get(`http://localhost:5000/api/searchgdv/${searchTerm}`);
                setData(response.data);
            } catch (error) {
                console.error("Lỗi khi tìm kiếm dữ liệu", error);
            }
        }
    };

    // Hàm tìm kiếm theo nhóm sản phẩm
    const handleSearchtype = async (searchTerm) => {
        setSearchTerm(searchTerm); // Cập nhật state khi chọn nhóm sản phẩm
        handleSearchByPrice(priceRange.minPrice, priceRange.maxPrice, searchTerm);
    };

    const handlePriceFilterChange = (minPrice, maxPrice) => {
        setPriceRange({ minPrice, maxPrice });
        handleSearchByPrice(minPrice, maxPrice);
    };

    // Hàm tìm kiếm theo giá và nhóm sản phẩm
    const handleSearchByPrice = async (minPrice, maxPrice, name) => {
        const Name = name !== undefined ? name : searchTerm; 

        try {
            const params = {};

            if (!isNaN(minPrice) && minPrice !== "" && minPrice !== null) {
                params.minPrice = Number(minPrice);
            }

            if (!isNaN(maxPrice) && maxPrice !== "" && maxPrice !== null) {
                params.maxPrice = Number(maxPrice);
            }

            if (Name && Name.trim() !== "") {
                params.name = Name.trim();
            }

            // Nếu không có điều kiện nào, load tất cả
            if (Object.keys(params).length === 0) {
                loadData();
                return;
            }

            const response = await axios.get(`http://localhost:5000/api/searchgdvprice`, { params });
            setData(response.data);
        } catch (error) {
            console.error("Lỗi khi tìm kiếm theo giá/nhóm sản phẩm", error);
        }
    };

    useEffect(() => {
        handleSearchByPrice(priceRange.minPrice, priceRange.maxPrice);
    }, [priceRange]);

    useEffect(() => {
        handleSearchByPrice(searchTerm.name);
    }, [searchTerm]);


    const formatCurrency = (number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    };
    return (
        <Fragment>
            <div style={{width:"1500px" , paddingBottom: '30px' }}  className="all-product-container" >
                <div className="filter">
                    <h2>Dịch vụ khám</h2>
                    <div className="filter-search">
                        <input  onChange={handleSearchname} placeholder="Tìm kiếm dịch vụ..." type="text" />
                        {/* <button
                        >
                            <img src="../Images/icon-search.svg" alt="" />
                        </button> */}
                    </div>
                    <div className="filter-size filter-item">
                        <div className="filter-item__inner">
                            <span>Mức giá</span>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <ul className="filter-item__option">
                            <li>abc</li>
                            <li onClick={() => handlePriceFilterChange(0,99999999999)}>Hiển thị tất cả</li>
                            <li onClick={() => handlePriceFilterChange(100000, 200000)}>100.000đ - 200.000đ</li>
                            <li onClick={() => handlePriceFilterChange(200000, 500000)}>200.000đ - 500.000đ</li>
                            <li onClick={() => handlePriceFilterChange(500000, 1000000)}>500.000đ - 1.000.000đ</li>
                            <li onClick={() => handlePriceFilterChange(1000000,99999999999 )}>Trên 1.000.000đ</li>
                        </ul>
                    </div>

                    <div className="filter-type filter-item">
                        <div className="filter-item__inner">
                            <span>Nhóm sản phẩm</span>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <ul className="filter-item__option">
                            {[
                                { value: "", label: "Tất cả dịch vụ" },
                                { value: "", label: "Tất cả dịch vụ" },
                                { value: "nam", label: "Gói dịch vụ cho nam" },
                                { value: "nữ", label: "Gói dịch vụ cho nữ" },
                                { value: "dinh dưỡng", label: "Gói tư vấn dinh dưỡng" },
                                { value: "trẻ em", label: "Gói khám cho trẻ em" },
                                { value: "cao tuổi", label: "Gói khám cho người cao tuổi" },
                                { value: "tim", label: "Gói khám tim mạch" },
                                { value: "xét nhiệm", label: "Gói khám xét nhiệm" },
                            ].map((item) => (
                                <li key={item.value} onClick={() => handleSearchtype(item.value)}>
                                    {item.label}
                                </li>
                            ))}
                        </ul>

                   
                    </div>
                    <div className="filter-sort filter-item">
                        <div className="filter-item__inner">
                            <span>Sắp xếp</span>
                            <i className="fa-solid fa-angle-down"></i>
                        </div>
                        <ul className="filter-item__option">
                            <li>Mới nhất</li>
                            <li>Bán chạy</li>
                            <li>Giá thấp đến cao</li>
                            <li>Giá cao đến thấp</li>
                            <li>% Giảm nhiều nhất</li>
                        </ul>
                    </div>
                </div>
                <div className="container1">
                    <div className="product-type">
                        <div className="row">
                            {/* Sản phẩm mẫu */}
                            

                            {/* Render sản phẩm từ dữ liệu */}
                            {data.map((item) => (
                                <div key={item.id_dich_vu} className="col p-2-4">
                                    <div id={`${item.id_dich_vu}`} className="product">
                                        <div className="product-img-wrap" style={{ marginBottom: '8px' }}>
                                            <Link
                                            to={`/detail/${item.id_dich_vu}`}
                                            className="product-img product-img--small"
                                            onClick={() => localStorage.setItem('sanpham', JSON.stringify(item))}
                                            >
                                            <img className="product-img-1" src={item.hinh_anh_dv} alt="" />
                                            <img className="product-img-2" src={item.anh_hover} alt="" />
                                            </Link>

                                            <div className="product-size">
                                                <p>Thêm nhanh vào giỏ hàng +</p>
                                                <div className="btn btn--size">Thêm dịch vụ khám</div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div style={{ display: 'none' }} className="product-content__option">
                                                <div className="product-content__option-item-wrap active">
                                                    <span className="product-id-khoa" data-id-khoa={item.id_khoa}></span>
                                                </div>
                                            </div>
                                            <a className="product-name">{item.ten_dich_vu}</a>
                                            <div className="product-price-wrap">
                                                <div className="product-price">{formatCurrency(item.gia)}</div>
                                            </div>
                                            <div className="product-discount">
                                                {item.thong_bao}
                                            </div>
                                            <div className="sale-tag product-tag">{item.uu_dai}</div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                <ReactPaginate
                breakLabel="..."
                nextLabel="Trang tiếp >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< Trước"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
                
            </div>

           
        </Fragment>
    );
}
