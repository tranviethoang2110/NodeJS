import { injectable } from "tsyringe";
import { Database } from "../config/database";

@injectable()
export class hoadonRespository{
    constructor (private db:Database){}

    async InsertHoaDon(hoadon:any):Promise<any>{
        try {
            const sql = 'CALL InsertHoaDon(?, ?, ?, ?, ?, ?)';
            await this.db.query(sql, [hoadon.NgayLap, hoadon.TongThanhTien,hoadon.MaTaiKhoan,hoadon.MaTinhTrang,hoadon.TenKhachHang,JSON.stringify(hoadon.list_json_chitiet_hoadon) ]);
            return true;
         } catch (error: any) {
            throw new Error( error.message);
            
          }
    }
    async InsertDonDatHang(hoadon:any):Promise<any>{
      try {
          const sql = 'CALL InsertDonDatHang(?, ?, ?, ?, ?)';
          await this.db.query(sql, [hoadon.NgayLap, hoadon.TongThanhTien,hoadon.MaTaiKhoan,hoadon.MaTinhTrang,hoadon.TenKhachHang ]);
          return true;
       } catch (error: any) {
          throw new Error( error.message);
          
        }
  }

    async UpdateHoaDon(hoadon:any):Promise<any>{
        try {
            const sql='CALL UpdateHoaDon(?, ?, ?, ?, ?, ?, ?)';
            await this.db.query(sql,[hoadon.MaDonDatHang, hoadon.NgayLap, hoadon.TongThanhTien,hoadon.MaTaiKhoan,hoadon.MaTinhTrang,hoadon.TenKhachHang,JSON.stringify(hoadon.list_json_chitiet_hoadon)]);
            return true;
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async DeleteHoaDon(id:any):Promise<any>{
        try {
            const sql='CALL DeleteHoaDon(?)';
            await this.db.query(sql,[id])
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async GetDonDatHangById(id:string):Promise<any>{
        try {
          const sql='CALL GetDonDatHangById(?)';
          const [results]=await this.db.query(sql,[id]);
          if (Array.isArray( results) && results.length >0) {
            return results[0];
          }
          return null;
        } catch (error:any) {
          throw new Error(error.message);
        }
      }
      
      async getHoaDonAll(): Promise<any> {
        try {
          const sql = 'CALL getHoaDonAll()';
          const [results] = await this.db.query(sql, []);
          return results;       
        } catch (error:any) {
          throw new Error( error.message);
        }
      } 

      async LayDonDatHangGanDay(): Promise<any> {
        try {
          const sql = 'CALL LayDonDatHangGanDay()';
          const [results] = await this.db.query(sql, []);
          return results;       
        } catch (error:any) {
          throw new Error( error.message);
        }
      } 

      async GetDetailDHD(id:string):Promise<any>{
        try {
          const sql='CALL sp_GetDetailDHD(?)';
          const [results]=await this.db.query(sql,[id]);
          if (Array.isArray( results) && results.length >0) {
            return results[0];
          }
          return null;
        } catch (error:any) {
          throw new Error(error.message);
        }
      }
}