import { injectable } from "tsyringe";
import { DanhMucService } from "../services/danhmucServices";
import { Request, Response } from 'express';

@injectable()
export class DanhMucController{
    constructor(private danhmucService:DanhMucService){

    }
    async getLoaiSanPhamAll(req: Request, res: Response): Promise<void> {
        try {
          const data = await this.danhmucService.getLoaiSanPhamAll();
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
        const loaisanpham = await this.danhmucService.GetLoaiSanPhamById(id);
        if (loaisanpham) {
          res.json(loaisanpham);
        } else {
          res.json({ message: 'Bản ghi không tồn tại' });
        }
      } catch (error: any) {
        res.json({ message: error.message });
      }
    }
    async createLoaiSanPham(req: Request, res: Response): Promise<void> {
        try {
          // Lấy dữ liệu từ req.body
          const loaisanpham = req.body as { ten_danh_muc: string, ghi_chu: string };
    
          
    
          // Gọi phương thức dịch vụ để thêm danh mục
          const results = await this.danhmucService.createLoaiSanPham(loaisanpham);
          res.json({ message: 'Đã thêm thành công', results: true });
        } catch (error: any) {
          res.status(500).json({ message: error.message, results: false });
        }
      }

      async updateLoaiSanPham(req: Request, res: Response): Promise<void> {
        try {
          const loaisanpham = req.body as { MaLoaiSanPham: any, TenLoaiSanPham: any };
          const results = await this.danhmucService.updateLoaiSanPham(loaisanpham);
          res.json({ message: 'Đã cập nhật thành công', results: true });
        } catch (error: any) {
          res.json({ message: error.message, results: false });
        }
      }

      async DeleteLoaiSanPham(req: Request, res: Response): Promise<void> {
        try {
          const id = req.params.id;
          const results = await this.danhmucService.DeleteLoaiSanPham(id);
          res.json({ message: 'Đã xóa thành công.', success: true });
        } catch (error: any) {
          res.json({ message: error.message, success: false });
        }
      }

      async SearchLoaiSanPham(req: Request, res: Response): Promise<void> {
        try {
          const object = req.body as { pageIndex: number, pageSize: number, search_content: string };
          const data: any = await this.danhmucService.SearchLoaiSanPham(object.pageIndex, object.pageSize, object.search_content);
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