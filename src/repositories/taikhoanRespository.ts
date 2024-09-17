import { injectable } from "tsyringe";
import { Database } from "../config/database";

@injectable()
export class taikhoanRespository{
    constructor(private db:Database){

    }
    async GetTaiKhoanAll():Promise<any>{
        try {
            const sql = 'CALL GetTaiKhoanAll()';
            const [results] = await this.db.query(sql, []);
            return results;       
          } catch (error:any) {
            throw new Error( error.message);
          }
    }

    async createTaiKhoan(taikhoan:any): Promise<any> {
        try {
          const sql = 'CALL createTaiKhoan(?, ?, ?, ?, ?, ?, ?, ?, ?)';
          await this.db.query(sql, [
            taikhoan.TenDangNhap,
            taikhoan.MatKhau,
            taikhoan.HoTen,
            taikhoan.DiaChi,
            taikhoan.DienThoai,
            taikhoan.Email,
            taikhoan.NgaySinh,
            taikhoan.Xoa,
            taikhoan.Quyen

          ]);
          return true;
        } catch (error:any) {
          throw new Error( error.message);
        }
      }

      async LoginUser(TenDangNhap: string, MatKhau: string): Promise<any> {
        try {
          const sql = 'CALL GetUserByAccount(?,?)';
          const [results] = await this.db.query(sql, [TenDangNhap,MatKhau]);      
          if (Array.isArray(results) && results.length > 0) {
            return results[0];
          } 
          return null; 
        } catch (error:any) {
          throw new Error( error.message);
        }
      } 
}