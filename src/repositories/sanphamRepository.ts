import { injectable } from "tsyringe";
import { Database } from "../config/database";

@injectable()
export class sanphamRepository{
    constructor(private db:Database){}
    
    async getSanPhamAll():Promise<any>{
        try {
            const sql = 'CALL getSanPhamAll()';
            const [results] = await this.db.query(sql, []);
            return results;       
          } catch (error:any) {
            throw new Error( error.message);
          }
    }

    async GetSanPhamById(id:string):Promise<any>{
      try {
        const sql='CALL GetSanPhamById(?)';
        const [results]=await this.db.query(sql,[id]);
        if (Array.isArray( results) && results.length >0) {
          return results[0];
        }
        return null;
      } catch (error:any) {
        throw new Error(error.message);
      }
    }

    async SearchSanPhamByLoai(pageIndex:number,pageSize:number, ma_loai:string): Promise<any> {
      try {
        const sql = 'CALL SearchSanPhamByLoai(?, ?, ?)';
        const [results] = await this.db.query(sql, [pageIndex,pageSize,ma_loai]);
        return results;
      } catch (error:any) {
        throw new Error( error.message);
      }
    }

    async InsertSanPham(sanpham:any): Promise<any> {
      try {
        const sql = 'CALL InsertSanPham(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        await this.db.query(sql, [
          sanpham.TenSanPham,
          sanpham.HinhURL,
          sanpham.GiaSanPham,
          sanpham.NgayNhap,
          sanpham.SoLuong,
          sanpham.SoLuotXem,
          sanpham.MoTa,
          sanpham.BiXoa,
          sanpham.MaLoaiSanPham,
          sanpham.MaHangSanXuat,
          sanpham.BaoHanh,
          sanpham.SoLuongDaBan
        ]);
        return true;
      } catch (error:any) {
        throw new Error( error.message);
      }
    }
   
    // async UpdateSanPham(sanpham:any):Promise<any>{
    //   try {
    //     const sql = 'CALL UpdateSanPham(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    //     await this.db.query(sql, [
    //       sanpham.TenSanPham,
    //       sanpham.HinhURL,
    //       sanpham.GiaSanPham,
    //       sanpham.NgayNhap,
    //       sanpham.SoLuong,
    //       sanpham.SoLuotXem,
    //       sanpham.MoTa,
    //       sanpham.BiXoa,
    //       sanpham.MaLoaiSanPham,
    //       sanpham.MaHangSanXuat,
    //       sanpham.BaoHanh,
    //       sanpham.SoLuongDaBan
    //     ]);
    //     return true;
    //   } catch (error:any) {
    //     throw new Error( error.message);
    //   }
    // }
    
    async UpdateSanPham(sanpham: any): Promise<any> {
      try {
        const sql = 'CALL UpdateSanPham(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        await this.db.query(sql, [
          sanpham.MaSanPham,             
          sanpham.TenSanPham || null,   
          sanpham.HinhURL || null,       
          sanpham.GiaSanPham || null,    
          sanpham.NgayNhap || null,      
          sanpham.SoLuong || null,       
          sanpham.SoLuotXem || null,     
          sanpham.MoTa || null,          
          sanpham.BiXoa || null,         
          sanpham.MaLoaiSanPham , 
          sanpham.MaHangSanXuat, 
          sanpham.BaoHanh || null,       
          sanpham.SoLuongDaBan || null   
        ]);
        return true;
      } catch (error: any) {
        throw new Error(error.message);
      }
    }
    
    async DeleteSanPham(id:any):Promise<any>{
      try {
          const sql='CALL DeleteSanPham(?)';
          await this.db.query(sql,[id])
      } catch (error:any) {
          throw new Error(error.message);
      }
    }

    async SearchSanPham(pageIndex:number,pageSize:number, search_content:string): Promise<any> {
      try {
        const sql = 'CALL SearchSanPham(?, ?,?)';
        const [results] = await this.db.query(sql, [pageIndex,pageSize,search_content]);
        return results;
      } catch (error:any) {
        throw new Error( error.message);
      }
    }

    async GetSanPhamMoiNhapVe():Promise<any>{
      try {
          const sql = 'CALL GetSanPhamMoiNhapVe()';
          const [results] = await this.db.query(sql, []);
          return results;       
        } catch (error:any) {
          throw new Error( error.message);
        }
    }
}

