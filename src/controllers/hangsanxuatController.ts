import { injectable } from "tsyringe";
import { HangSanXuatServices } from "../services/hangsanxuatServices";
import { Request, Response } from "express";

@injectable()
export class hangsanxuatController{
    constructor(private hangsanxuatServices:HangSanXuatServices){}

    async getHangSanXuatAll(req: Request, res: Response): Promise<void> {
        try {
          const data = await this.hangsanxuatServices.getHangSanXuatAll();
          if (data && data.length > 0) {
            res.json(data);
          } else {
            res.json({ message: 'Không lấy được danh sách' });
          }
        } catch (error: any) {
          res.json({ message: error.message });
        }
    }  

    async createHangSanXuat(req:Request,res:Response):Promise<void>{
        try {
            const hangsanpham= req.body as {TenHangSanXuat: string,BiXoa: string};

            const results= await this.hangsanxuatServices.createHangSanXuat(hangsanpham);
            res.json({message:"Đã thêm thành công", results:true});

        } catch (error:any) {
            res.status(500).json({message:error.message,results:false});
        }
    }

    async updateHangSanXuat(req:Request,res:Response):Promise<any>{
       try {
         const hangsanxuat=req.body as {TenHangSanXuat: any,BiXoa: any};
         const results= await this.hangsanxuatServices.updateHangSanXuat(hangsanxuat);
         res.json({message:"Đã sửa thành công",results:true});
       } catch (error:any) {
        res.status(500).json({message:error.message,results:false});
       }

    }

    async deleteHangSanXuat(req:Request,res:Response):Promise<any>{
        try {
            const id=req.params.id ;
            const results= await this.hangsanxuatServices.deleteHangSanXuat(id);
            res.json({message:"Đã xóa thành công",results:true});
        } catch (error:any) {
            res.status(500).json({message:error.message,results:false});
        }
    }
}