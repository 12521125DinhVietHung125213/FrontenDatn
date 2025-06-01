import React, { Fragment, useEffect, useState } from 'react'
import Silde from '../../components/slider/silde';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUser } from '../../until/userContext';
import axios from 'axios';
import AddProduct from '../../until/cart';

export default function Home() {
    const {user} = useUser()
    const coupons = [
        {
          coupon_name: "KTQ150K",
          discount_amount: 150,
          remaining_count: 30,
          description: "Giảm giá dịch vụ khám tổng quát khi đăng ký từ 15-12",
          value:150000,
          expiry_date:"23-12-2024"
        },
        {
          coupon_name: "CHS150K",
          discount_amount: 150,
          remaining_count: 45,
          description: "Áp dụng cho gói khám chuyên sâu từ 2tr (không áp dụng với các combo)",
          value:150000,
          expiry_date:"25-12-2024"
        },
        {
          coupon_name: "NHK100K",
          discount_amount: 100,
          remaining_count: 60,
          description: "Giảm giá dịch vụ khám nha khoa cho hóa đơn từ 500K",
          value:100000,
          expiry_date:"29-12-2024"
        },
        {
          coupon_name: "XNG50K",
          discount_amount: 50,
          remaining_count: 25,
          description: "Giảm giá dịch vụ xét nghiệm khi đăng ký từ 300K",
          value:50000,
          expiry_date:"15-12-2024"
        },
      ];
      const handleSaveCoupon = (coupon) => {
        if(!user){
            toast.error(`Hãy đăng nhập để lưu mã giảm giá!`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else{
            const savedCoupons = JSON.parse(localStorage.getItem("coupons")) || [];
            savedCoupons.push({ ...coupon, id_user:user.id });
            localStorage.setItem("coupons", JSON.stringify(savedCoupons));
            toast.success(`Mã giảm giá "${coupon.coupon_name}" đã được lưu!`, {
                position: "top-right",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        
      };

      AddProduct();
      const [data,setData] = useState([
        
            {
                id_dich_vu: 14,
                ten_dich_vu: 'Gói kiểm tra chức năng gan',
                gia: 1800000,
                mo_ta: 'Gói kiểm tra chức năng gan giúp đánh giá tình trạng sức khỏe gan hoặc tổn thương gan do các nguyên nhân khác.',
                hinh_anh_dv: 'https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/kiem_tra_chuc_nang_gan_la_gi_khi_nao_can_kiem_tra_chuc_nang_gan_Cropped_afc1422e4f.jpg',
                anh_hover: 'https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/kiem_tra_chuc_nang_gan_la_gi_khi_nao_can_kiem_tra_chuc_nang_gan_Cropped_afc1422e4f.jpg',
                thong_bao: 'Khuyến mãi mùa hè!',
                uu_dai: 'Giảm 10%',
                total_quantity: 120,
            },
            {
                id_dich_vu: 1,
                ten_dich_vu: 'Khám tổng quát cho nam',
                gia: 800000,
                mo_ta: 'Gói khám tổng quát cho nam giới được thiết kế nhằm kiểm tra định kỳ hàng năm để chủ động bảo vệ sức khỏe.',
                hinh_anh_dv: '/images/kham-suc-khoe-sinh-san-cho-nam-va-nu.jpg',
                anh_hover: '/images/khamnam_hover.jpg',
                thong_bao: 'Miễn phí tư vấn!',
                uu_dai: 'Tặng phiếu xét nghiệm',
                total_quantity: 98,
            },
            {
                id_dich_vu: 2,
                ten_dich_vu: 'Khám sức khỏe tiền hôn nhân cho nam',
                gia: 2600000,
                mo_ta: 'Gói khám sức khỏe tiền hôn nhân dành cho nam giới giúp chuẩn bị cho cuộc sống hôn nhân khỏe mạnh và hạnh phúc.',
                hinh_anh_dv: '/images/khamtienhonnhan.jpg',
                anh_hover: '/images/khamtienhonnhan_hover.jpg',
                thong_bao: 'Gói hot nhất tháng!',
                uu_dai: 'Giảm 15%',
                total_quantity: 75,
            },
            {
                id_dich_vu: 5,
                ten_dich_vu: 'Gói khám xét nhiệm bạch cầu',
                gia: 250000,
                mo_ta: 'Gói khám xét nghiệm bạch cầu tập trung vào việc kiểm tra khả năng miễn dịch và phát hiện bệnh sớm.',
                hinh_anh_dv: '/images/xetnhiembachcau.jpg',
                anh_hover: '/images/xetnhiembachcau_hover.jpg',
                thong_bao: 'Ưu đãi đến 30/06',
                uu_dai: 'Giảm 5%',
                total_quantity: 200,
            },
            {
                id_dich_vu: 19,
                ten_dich_vu: 'Gói khám mũi họng',
                gia: 500000,
                mo_ta: 'Gói khám mũi họng giúp phát hiện và điều trị sớm các bệnh lý tai mũi họng thường gặp.',
                hinh_anh_dv: '/images/Screenshot 2024-12-15 094313.jpg',
                anh_hover: '/images/khammuihover.jpg',
                thong_bao: 'Hỗ trợ miễn phí soi tai mũi họng',
                uu_dai: 'Tặng voucher 100K',
                total_quantity: 160,
            },
 

      ]);
      console.log(data)
      
  
      const loadData = async() =>{
          setData(data);
      };
  
      useEffect(()=>{
          loadData();
      },[]);
  
      const formatCurrency = (number) => {
          return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
      };  


  return (
        <Fragment>
            <div className="main">
                <Silde/>
                <section id="section-discounts">
                <div className="container">
                    <div className="section-discounts-wrapper">
                    <div className="homepage-coupon-card">
                        {coupons.map((coupon, index) => (
                        <div key={index} className="coupon-card-item">
                        <div className="coupon-card-item-top">
                            <div className="description-amount">
                            <div className="coupon-card-limit">(Còn {coupon.remaining_count} lượt)</div>
                            <p>Giảm {coupon.discount_amount}K</p>
                            </div>
                            <div className="description-info">
                            <p>{coupon.description}</p>
                            <p style={{ display: "none" }}>{coupon.value}</p>
                            </div>
                        </div>
                        <div className="coupon-card-item-bottom">
                            <span className="coupon-card-coupon">{coupon.coupon_name}</span>
                            <span
                            className="btn btnluuma"
                            onClick={() => handleSaveCoupon(coupon)}
                            style={{ cursor: "pointer" }}
                            >
                            Lưu mã
                            </span>
                        </div>
                        </div>
                    ))}

                    </div>
                    </div>
                </div>
                </section>

                <section className="homepage-search">
                    <div className="container-medium">
                        <div className="homepage-search-wrapper">
                            <h2 className="homepage-search-heading"> Bạn tìm kiếm dịch vụ gì? </h2>
                            <div className="homepage-search-inner">
                                <form action="/spotlight" method="GET">
                                    <input type="text" name="keyword" placeholder="Hãy thử bắt đầu với sức khỏe" className="homepage-search-control"/>
                                    <button className="homepage-search-submit">
                                        <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="homepage-search-content">
                                <p className="home-search-description"> Dịch vụ được quan tâm</p>
                                <div className="homepage-search-buttons">
                                    <a href="#" className="homepage-search-button">Sống khỏe</a>
                                    <a href="#" className="homepage-search-button">Healthy</a>
                                    <a href="#" className="homepage-search-button">Cảm cúm</a>
                                    <a href="#" className="homepage-search-button">Thuốc ho</a>
                                    <a href="#" className="homepage-search-button">Khám tổng quát</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="homepage-collections">
                    <div className="container--full">
                        <div className="homepage-collections__wrapper">
                            <div className="homepage-collections__item">
                                <Link to="/about" className="collection-grid">
                                    <div className="collection-grid__thumbnail">
                                        <picture style={{width: '100%'}}>
                                            <img src="../Images/anhposter1.jpg" alt="bannner"/>
                                        </picture>
                                    </div>
                                </Link>
                            </div>
                            <div className="homepage-collections__item">
                                <Link to="/datlich" className="collection-grid">
                                    <div className="collection-grid__thumbnail">
                                        <picture style={{width: '100%'}}>
                                            <img src="../Images/anhposter2.jpg" alt="bannner"/>
                                        </picture>
                                    </div>
                                </Link>
                            </div>
                            <div className="homepage-collections__item">
                                <Link to="/bacsi" className="collection-grid">
                                    <div className="collection-grid__thumbnail">
                                        <picture style={{width: '100%'}}>
                                            <img src="../Images/anhposter3.jpg" alt="bannner"/>
                                        </picture>
                                    </div>
                                </Link>
                            </div>
                            <div className="homepage-collections__item">
                                <Link to="/dichvu" className="collection-grid">
                                    <div className="collection-grid__thumbnail">
                                        <picture style={{width: '100%'}}>
                                            <img src="../Images/anhposter4.jpg" alt="bannner"/>
                                        </picture>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                <div className="container1">
                <div className="homepage-product__heading"> Dịch vụ được quan tâm</div>
                    <div className="product-type">
                        <div className="row">
                            {/* Sản phẩm mẫu */}
                            

                            {/* Render sản phẩm từ dữ liệu */}
                            {data.map((item) => (
                                <div key={item.id_dich_vu} className="col p-2-4">
                                    <div id={`${item.id_dich_vu}`} className="product">
                                        <div className="product-img-wrap" style={{ marginBottom: '8px' }}>
                                            <Link to={`/detail/${item.id_dich_vu}`} className="product-img product-img--small">
                                                <img style={{width:"250px"}} className="product-img-1" src={item.hinh_anh_dv} alt="" />
                                                <img style={{width:"250px"}} className="product-img-2" src={item.anh_hover} alt="" />
                                            </Link>
                                            <div className="product-size">
                                                <p>Thêm nhanh vào giỏ hàng +</p>
                                                <div className="btn btn--size">Thêm dịch vụ</div>
                                            </div>
                                        </div>
                                        <div className='product-grid__reviews'>
                                            <div className='reviews-rating'>
                                                <div className='reviews-rating__vote'>5.0</div>
                                                <div className='reviews-rating__star'></div>
                                                <div className='reviews-rating__number'>({item.total_quantity})</div>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <div style={{ display: 'none' }} className="product-content__option ">
                                                <div className="product-content__option-item-wrap active">
                                                    <span></span>
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
                </section>
               
                <section className="homepage-basic">
                    <div className="homepage-basic__wrapper">
                        <div className="homepage-basic__content">
                            <h2>
                                Đồng hành cùng bé
                            </h2>
                            <p>
                                Nhận
                                <span style={{fontWeight: 'bold'}}>Nhiều ưu đãi </span>
                                - Tặng gói khám sức khỏe miễn phí
                            </p>
                            <Link to={'/datlich'} className="btn-primary"> Đặt lịch ngay</Link>
                        </div>
                        <div className="homepage-basic__image">
                            <a href="#">
                                <picture style={{width: '100%'}}>
                                    <img src="../Images/khambenh.jpg" alt="quansip"/>
                                </picture>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="homepage-brands">
                    <div className="container--full">
                        <div className="homepage-brands__wrapper">
                            <div className="homepage-banner__item homepage-banner__item--cm24">
                                <div className="homepage-brands__image">
                                    <img src="../Images/anhphanbrands.png" alt=""/>
                                </div>
                                <div className="homepage-brands__content">
                                    <h2> Sống khỏe</h2>
                                    <p>
                                        Cẩm nan sức khỏe
                                        <br className="mobile--hidden"/>
                                        <b style={{fontSize: '130%'}}>5 yếu tố sức khỏe </b>
                                    </p>
                                    <Link to={'/chonsize'} className="btn-brands"> Đọc ngay</Link>
                                </div>
                            </div>
                            <div className="homepage-banner__item homepage-banner__item--cm24">
                                <div className="homepage-brands__image">
                                    <img src="../Images/cm24.png" alt=""/>
                                </div>
                                <div className="homepage-brands__content">
                                    <h2> CM24</h2>
                                    <p>
                                        Thương hiệu chăm sóc (Quà tặng)
                                        <br className="mobile--hidden"/>
                                        <b style={{fontSize: '130%'}}>Comboo 3 sản phẩm khi tới khám </b>
                                    </p>
                                    <a href="#" className="btn-brands"> Nhận ngay</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="homepage-care-and-share">
                    <div className="container--full">
                        <div className="homepage-care-and-share__inner">
                            <a href="#">
                                <div className="homepage-care-and-share__image">
                                    <picture>
                                        <img src="../Images/care and share.png" alt=""/>
                                    </picture>
                                </div>
                                <div className="homepage-care-and-share__content">
                                    <picture>
                                        <img src="https://mcdn.coolmate.me/image/March2023/mceclip8.png" alt=""/>
                                    </picture>
                                    <h2>
                                        Góp phần mang lại <br/> cuộc sống tươi đẹp 
                                        <br className="mobile--hidden"/>
                                        hơn cho tụi nhỏ
                                    </h2>
                                    <div className="btn--primary"> Tìm hiểu thêm về Care&Share</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                </section>
                <section className="homepage-hashtag">
                    <div className="container--full">
                        <div className="homepage-hashtag__inner">
                            <p className="homepage-hashtag__left">
                            "Phòng khám Đa khoa Phố Nối – Chăm sóc sức khỏe toàn diện, tận tâm từ trái tim!"
                            
                                <br/>
                            "Khám bệnh uy tín, dịch vụ chuyên nghiệp – Đặt lịch ngay hôm nay!"
                            </p>
                            <p className="homepage-hashtag__title">#Healthy</p>
                            <p className="homepage-hashtag__right">
                                Giải pháp sức khỏe
                                <br/>
                                
                            </p>
                        </div>
                    </div>
                </section>
                <section className="homepage-service">
                    <div className="container--full">
                        <div className="homepage-service__grid">
                            <div className="homepage-service__item">
                                <div className="infomation-card">
                                    <a href="#" className="infomation-card">
                                        <div className="infomation-card__thumbnail">
                                            <img src="../Images/Screenshot 2024-10-01 013424.jpg" alt=""/>
                                        </div>
                                        <div className="infomation-card__buttons">
                                            <span className="infomation-card__title">Câu chuyện về chúng tôi </span>
                                            <span className="infomation-card__button">
                                                <i className="fa-solid fa-arrow-up fa-rotate-45"></i>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="homepage-service__item">
                                <div className="infomation-card">
                                    <a href="#" className="infomation-card">
                                        <div className="infomation-card__thumbnail">
                                            <img src="../Images/dichvuhailong100.png" alt=""/>
                                        </div>
                                        <div className="infomation-card__buttons">
                                            <span className="infomation-card__title">Dịch vụ hài lòng 100% </span>
                                            <span className="infomation-card__button">
                                                <i className="fa-solid fa-arrow-up fa-rotate-45"></i>
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="homepage-service__list">
                            <div className="homepage-service__card">
                                <p className="homepage-service__text">
                                    Tận tâm chăm sóc
                                    <br />
                                    Sức khỏe cho cộng đồng
                                </p>
                            </div>
                            <div className="homepage-service__card">
                                <p className="homepage-service__text">
                                    chia sẻ kinh nghiệm
                                    <br />
                                    mang lại sức khỏe
                                </p>
                            </div>
                            <div className="homepage-service__card">
                                <p className="homepage-service__text">
                                    đến tận nơi nhận hàng trả
                                    <br />
                                    hoàn tiền trong 24h
                                </p>
                            </div>
                            <div className="homepage-service__card">
                                <p className="homepage-service__text">
                                    Từ hào mang đến sức khỏe
                                    <br />
                                    Tại Việt Nam
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </section>
                <section className="homepage-irl">
                    <div className="container--full">
                        <h2 className="homepage-irl__title">Nhật kí Phòng Khám Đa Khoa Phố Nối</h2>
                        <p className="homepage-irl__description">Chia sẻ câu chuyện cùng chúng tôi</p>
                        <div className="homepage-irl__slide slick-slider"> 
                            <button className="slick-arrow slick-prev"> <i className="fa-solid fa-arrow-left fa-2xl"></i></button>
                            <div className="slick-list">
                                <img src="../Images/embekhambenh.jpg" alt=""/>
                                <img src="../Images/khammat.jpg" alt=""/>
                                <img src="../Images/homepage-irl3.png" alt=""/>
                                <img src="../Images/homepage-irl4.png" alt=""/>
                                <img src="../Images/homepage-irl5.png" alt=""/>
                            </div>
                            <button className="slick-arrow slick-next"> <i className="fa-solid fa-arrow-right fa-2xl"></i> </button>
                        </div>
                    </div>
                </section>
                
            </div>
        </Fragment>
  );
}
