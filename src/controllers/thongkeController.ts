import { injectable } from "tsyringe";
import { thongkeServices } from "../services/thongkeServices";
import { Request,Response } from "express";
@injectable()

export class ThongKeController{
    constructor(private thongkeService:thongkeServices){

    }
    async ThongKeSanPhamBanChay(req: Request, res: Response): Promise<void> {
        try {
            
            const sanpham = await this.thongkeService.ThongKeSanPhamBanChay();
            
            if (sanpham && sanpham.length > 0) {
                res.json(sanpham);
            } else {
                res.json({ message: 'Không có sản phẩm nào được tìm thấy' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }
    async ThongKeHoaDonDaThanhToan(req: Request, res: Response): Promise<void> {
        try {
            
            const sanpham = await this.thongkeService.ThongKeHoaDonDaThanhToan();
            
            if (sanpham && sanpham.length > 0) {
                res.json(sanpham);
            } else {
                res.json({ message: 'Không có hóa đơn nào được tìm thấy' });
            }
        } catch (error: any) {
            res.json({ message: error.message });
        }
    }

}