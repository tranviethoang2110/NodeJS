import { injectable } from "tsyringe";
import { taikhoanRespository } from "../repositories/taikhoanRespository";

@injectable()
export class taikhoanServices{
    constructor(private taikhoanRepository:taikhoanRespository){

    }
    async GetTaiKhoanAll():Promise<any>{
        return this.taikhoanRepository.GetTaiKhoanAll();
    }
    async createTaiKhoan(taikhoan:any):Promise<any>{
        return this.taikhoanRepository.createTaiKhoan(taikhoan);
    }

    async LoginUser(TenDangNhap: string, MatKhau: string): Promise<any> {     
        let user = await this.taikhoanRepository.LoginUser(TenDangNhap, MatKhau);
        if (user) { 
          return {
            MaTaiKhoan: user.MaTaiKhoan,
            HoTen: user.HoTen,
            TenDangNhap: user.TenDangNhap 
          };
        }
        return null;
    }
}