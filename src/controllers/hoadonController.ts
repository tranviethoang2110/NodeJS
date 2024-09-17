import { injectable } from "tsyringe";
import { Request, Response } from 'express';
import { hoadonServices } from "../services/hoadonServices";

@injectable()
export class hoadonController{
    constructor(private hoadonServices:hoadonServices){

    }
    async InsertHoaDon(req: Request, res: Response): Promise<void> {
        try {
            // Lấy dữ liệu từ body của request
            const hoadon: any = {
                NgayLap: req.body.NgayLap,
                TongThanhTien: req.body.TongThanhTien,
                MaTaiKhoan: req.body.MaTaiKhoan,
                MaTinhTrang: req.body.MaTinhTrang,
                TenKhachHang: req.body.TenKhachHang,
                list_json_chitiet_hoadon: req.body.list_json_chitiet_hoadon,
            };
    
            // Gọi phương thức dịch vụ để thực hiện thao tác
            const result = await this.hoadonServices.InsertHoaDon(hoadon);
    
            
            res.status(200).json({ message: 'Hóa đơn đã được chèn thành công.' });
        } catch (error:any) {
            
            res.status(500).json({ message: 'Đã xảy ra lỗi khi chèn hóa đơn.', error: error.message });
        }
    }
    async InsertDonDatHang(req: Request, res: Response): Promise<void> {
      try {
          // Lấy dữ liệu từ body của request
          const hoadon: any = {
              NgayLap: req.body.NgayLap,
              TongThanhTien: req.body.TongThanhTien,
              MaTaiKhoan: req.body.MaTaiKhoan,
              MaTinhTrang: req.body.MaTinhTrang,
              TenKhachHang: req.body.TenKhachHang,
              
          };
  
          // Gọi phương thức dịch vụ để thực hiện thao tác
          const result = await this.hoadonServices.InsertDonDatHang(hoadon);
  
          
          res.status(200).json({ message: 'Hóa đơn đã được chèn thành công.' });
      } catch (error:any) {
          
          res.status(500).json({ message: 'Đã xảy ra lỗi khi chèn hóa đơn.', error: error.message });
      }
  }
    async UpdateHoaDon(req: Request, res: Response): Promise<void> {
        try {
            // Tạo đối tượng hóa đơn từ yêu cầu
            const hoadon = {
                MaDonDatHang: req.body.MaDonDatHang, 
                NgayLap: req.body.NgayLap,
                TongThanhTien: req.body.TongThanhTien,
                MaTaiKhoan: req.body.MaTaiKhoan,
                MaTinhTrang: req.body.MaTinhTrang,
                TenKhachHang: req.body.TenKhachHang,
                list_json_chitiet_hoadon: req.body.list_json_chitiet_hoadon,
            };

            // Gọi phương thức UpdateHoaDon từ service
            await this.hoadonServices.UpdateHoaDon(hoadon);

            
            res.json({ message: 'Hóa đơn đã được cập nhật thành công' });
        } catch (error: any) {
            
            res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật hóa đơn', error: error.message });
        }
    }

    async DeleteHoaDon(req:Request,res:Response):Promise<any>{
        try {
            const id=req.params.id ;
            const results= await this.hoadonServices.DeleteHoaDon(id);
            res.json({message:"Đã xóa thành công",results:true});
        } catch (error:any) {
            res.status(500).json({message:error.message,results:false});
        }
    }

    async GetDonDatHangById(req: Request, res: Response): Promise<void> {
        try {
          const id = req.params.id;
          const donhang = await this.hoadonServices.GetDonDatHangById(id);
          if (donhang) {
            res.json(donhang);
          } else {
            res.json({ message: 'Bản ghi không tồn tại' });
          }
        } catch (error: any) {
          res.json({ message: error.message });
        }
      }

      async getHoaDonAll(req: Request, res: Response): Promise<void> {
        try {
          const data = await this.hoadonServices.getHoaDonAll();
          if (data && data.length > 0) {
            res.json(data);
          } else {
            res.json({ message: 'Không lấy được danh sách' });
          }
        } catch (error: any) {
          res.json({ message: error.message });
        }
      }  

      async LayDonDatHangGanDay(req: Request, res: Response): Promise<void> {
        try {
          const data = await this.hoadonServices.LayDonDatHangGanDay();
          if (data && data.length > 0) {
            res.json(data);
          } else {
            res.json({ message: 'Không lấy được danh sách' });
          }
        } catch (error: any) {
          res.json({ message: error.message });
        }
      }  

      async sGetDetailDHD(req: Request, res: Response): Promise<void> {
        try {
          const id = req.params.id;
          const donhang = await this.hoadonServices.GetDetailDHD(id);
          if (donhang) {
            res.json(donhang);
          } else {
            res.json({ message: 'Bản ghi không tồn tại' });
          }
        } catch (error: any) {
          res.json({ message: error.message });
        }
      }
}