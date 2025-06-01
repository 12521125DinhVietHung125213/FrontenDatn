import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Vnpay.css';

export default function VnpayReturn() {
  const [searchParams] = useSearchParams();
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }

    const orderData = JSON.parse(localStorage.getItem("pending_order"));
    if (!orderData) return;

    // 👇 Delay 3 giây để hiển thị hiệu ứng
    setTimeout(() => {
      axios.post("http://localhost:5000/api/vnpay_verify_and_add_order", {
        ...params,
        orderData
      })
      .then(res => {
        if (res.data.success) {
          localStorage.removeItem("pending_order");
          localStorage.setItem("cart", JSON.stringify([]));
          localStorage.setItem("coupons", JSON.stringify([]));
          localStorage.setItem("voucher_sale", JSON.stringify({ coupon_name: "novoucher", value: 0 }));
          toast.success("Dịch vụ đã được đặt!", {
            autoClose: 4500,
            position: "right",
            theme: "light",
            toastStyle: {
                background: "#e6fff2",
                color: "#1f7a4c",
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                borderLeft: "6px solid #2ecc71",
                zIndex: 10000
            }
            });

        } else {
          toast.error("Giao dịch thất bại: " + res.data.message);
        }

        // ✅ Sau khi xử lý xong, cho phép rời khỏi trang
        setLoadingDone(true);
        setTimeout(() => {
          window.location.href = "/cart";
        }, 1500);
      })
      .catch(() => {
        toast.error("Lỗi khi xác minh giao dịch");
        setLoadingDone(true);
        setTimeout(() => {
          window.location.href = "/cart";
        }, 1500);
      });
    }, 3000); // ⏱ Delay 3 giây trước khi xử lý
  }, []);

  return (
    <div className="vnpay-overlay">
      <div className="vnpay-loader">
        <div className="spinner"></div>
        <p className="loading-text">Đang xác minh giao dịch...</p>
      </div>
    </div>
  );
}
