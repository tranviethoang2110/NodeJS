import { injectable } from "tsyringe";
import { sanphamService } from "../services/sanphamServices";

import { Request,Response } from "express";
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({ 
  cloud_name: 'damjvwxli', 
  api_key: '879787616758897', 
  api_secret: 'rUQl8wz7lsmmhNQhrpsXK5lkkmA' 
});
@injectable()
export class sanphamController{
    constructor(private sanphamService:sanphamService){
        
    }

    async getSanPhamAll(req: Request, res: Response): Promise<void> {
        try {
          const data = await this.sanphamService.getSanPhamAll();
          if (data && data.length > 0) {
            res.json(data);
          } else {
            res.json({ message: 'Không lấy được danh sách' });
          }
        } catch (error: any) {
          res.json({ message: error.message });
        }
    }

    async GetSanPhamMoiNhapVe(req: Request, res: Response): Promise<void> {
      try {
        const data = await this.sanphamService.GetSanPhamMoiNhapVe();
        if (data && data.length > 0) {
          res.json(data);
        } else {
          res.json({ message: 'Không lấy được danh sách' });
        }
      } catch (error: any) {
        res.json({ message: error.message });
      }
  }
    async GetSanPhamById(req: Request, res: Response): Promise<void> {
      try {
        const id = req.params.id;
        const sanpham = await this.sanphamService.GetSanPhamById(id);
        if (sanpham) {
          res.json(sanpham);
        } else {
          res.json({ message: 'Bản ghi không tồn tại' });
        }
      } catch (error: any) {
        res.json({ message: error.message });
      }
    }

    async SearchSanPhamByLoai(req: Request, res: Response): Promise<void> {
      try {
        const object = req.body as { pageIndex: number, pageSize: number, ma_loai: string };
        const data: any = await this.sanphamService.SearchSanPhamByLoai(object.pageIndex, object.pageSize, object.ma_loai);
        if (data) {
          res.json({
            totalItems: Math.ceil(data && data.length > 0 ? data[0].RecordCount : 0),
            page: object.pageIndex,
            pageSize: object.pageSize,
            data: data,
            pageCount: Math.ceil((data && data.length > 0 ? data[0].RecordCount : 0) / (object.pageSize ? object.pageSize : 1))
          });
        } else {
          res.json({ message: 'Không tồn tại kết quả tìm kiếm.', success: true });
        }
      } catch (error: any) {
        res.json({ message: error.message, success: false });
      }
    }

    // async InsertSanPham(req: Request, res: Response): Promise<void> {
    //   try {
    //     const sanpham = req.body as { 
    //       TenSanPham: string;
    //       HinhURL: string;
    //       GiaSanPham: number;
    //       NgayNhap: string;
    //       SoLuong: number;
    //       SoLuotXem: number;
    //       MoTa: string;
    //       BiXoa: number;
    //       MaLoaiSanPham: number;
    //       MaHangSanXuat: number;
    //       BaoHanh: number;
    //       SoLuongDaBan: number;};
    //     const results = await this.sanphamService.InsertSanPham(sanpham);
    //     res.json({ message: 'Thêm thành công', results: true });
    //   } catch (error: any) {
    //     res.json({ message: error.message, results: false });
    //   }
    // }

    async InsertSanPham(req: Request, res: Response): Promise<void> {
      try {
        const sanpham = req.body as { 
          TenSanPham: string;
          HinhURL: string;
          GiaSanPham: number;
          NgayNhap: string;
          SoLuong: number;
          SoLuotXem: number;
          MoTa: string;
          BiXoa: number;
          MaLoaiSanPham: number;
          MaHangSanXuat: number;
          BaoHanh: number;
          SoLuongDaBan: number;
        };

        if (Array.isArray(req.files)) {
          const result = await cloudinary.uploader.upload(req.files[0].path);
          sanpham.HinhURL = result.secure_url;
        }
        const result = await this.sanphamService.InsertSanPham(sanpham);
        res.json({ message: 'Đã thêm sản phẩm thành công.' });
      } catch (error: any) {
        res.json({ message: error.message, results: false });
      }
    }
    
    async UpdateSanPham(req: Request, res: Response): Promise<void> {
      try {
        
        const sanpham = req.body as { 
          MaSanPham: number;  // Mã sản phẩm cần cập nhật
          TenSanPham: string;
          HinhURL?: string;   
          GiaSanPham?: number;
          NgayNhap?: string;
          SoLuong?: number;
          SoLuotXem?: number;
          MoTa?: string;
          BiXoa?: number;
          MaLoaiSanPham?: number;
          MaHangSanXuat?: number;
          BaoHanh?: number;
          SoLuongDaBan?: number;
        };
    
        // Cập nhật HinhURL nếu có tệp tin được gửi
        if (Array.isArray(req.files)) {
          // sanpham.HinhURL = req.files[0].path;
          const result = await cloudinary.uploader.upload(req.files[0].path);
          sanpham.HinhURL = result.secure_url;
        }


    
        // Gọi phương thức cập nhật sản phẩm trong service
        const result = await this.sanphamService.UpdateSanPham(sanpham);
    
        // Trả về kết quả thành công
        res.json({ message: 'Cập nhật sản phẩm thành công.', results: true });
      } catch (error: any) {
        // Xử lý lỗi và trả về thông báo lỗi
        res.json({ message: error.message, results: false });
      }
    }
    async DeleteSanPham(req:Request,res:Response):Promise<any>{
      try {
          const id=req.params.id ;
          const results= await this.sanphamService.DeleteSanPham(id);
          res.json({message:"Đã xóa thành công",results:true});
      } catch (error:any) {
          res.status(500).json({message:error.message,results:false});
      }
    }

    async SearchSanPham(req: Request, res: Response): Promise<void> {
      try {
        const object = req.body as { pageIndex: number, pageSize: number, search_content: string };
        const data: any = await this.sanphamService.SearchSanPham(object.pageIndex, object.pageSize, object.search_content);
        if (data) {
          res.json({
            totalItems: Math.ceil(data && data.length > 0 ? data[0].RecordCount : 0),
            page: object.pageIndex,
            pageSize: object.pageSize,
            data: data,
            pageCount: Math.ceil((data && data.length > 0 ? data[0].RecordCount : 0) / (object.pageSize ? object.pageSize : 1))
          });
        } else {
          res.json({ message: 'Không tồn tại kết quả tìm kiếm.', success: true });
        }
      } catch (error: any) {
        res.json({ message: error.message, success: false });
      }
    }
}