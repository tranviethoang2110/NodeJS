import { injectable } from "tsyringe";
import { taikhoanServices } from "../services/taikhoanServices";
import { Request,Response } from "express";
import { generateToken } from "../config/jwt";
@injectable()
export class taikhoanController{
    constructor(private taikhoanServices:taikhoanServices){

    }
    async GetTaiKhoanAll(req:Request,res:Response):Promise<any>{
        try {
            const data= await this.taikhoanServices.GetTaiKhoanAll();
            if (data && data.length >0) {
                res.json(data);
            }else {
                res.json({ message: 'Không lấy được danh sách' });
              }
        } catch (error:any) {
            res.json({message:error.message})
        }
    }

    async createTaiKhoan(req:Request,res:Response):Promise<void>{
        try {
            const taikhoan = req.body as {
                TenDangNhap: string;
                MatKhau: string;
                HoTen: string;
                DiaChi: string;
                DienThoai: string;
                Email: string;
                NgaySinh: string;
                Xoa: string;
                Quyen: string;
            };

            const results= await this.taikhoanServices.createTaiKhoan(taikhoan);
            res.json({message:"Đã thêm thành công", results:true});

        } catch (error:any) {
            res.status(500).json({message:error.message,results:false});
        }
    }

    async LoginUser(req: Request, res: Response): Promise<void> {
        try {
          const {  TenDangNhap,MatKhau } = req.body;
          const user = await this.taikhoanServices.LoginUser(TenDangNhap, MatKhau);
          if (user) {
            const token = generateToken(user);
            user.token = token;
            res.json({ message: "Đăng nhập thành công", user });
          } else {
            res.status(401).json({ message: "Sai mật tài khoản hoặc mật khẩu" });
          }
        } catch (error: any) {
          res.json({ message: error.message });
        }
      }
}