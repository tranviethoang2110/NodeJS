import { injectable } from 'tsyringe';
import { Database } from '../config/database';

@injectable()
export class danhmucRepository{
    constructor(private db:Database){}
    async getLoaiSanPhamAll(): Promise<any> {
        try {
          const sql = 'CALL getAllLoaiSanPham()';
          const [results] = await this.db.query(sql, []);
          return results;       
        } catch (error:any) {
          throw new Error( error.message);
        }
    } 

    // async createDanhMuc(danhmuc: any): Promise<any> {
    //     try {
    //       const sql = 'CALL CreateDanhMuc(?, ?)';
    //       await this.db.query(sql, [danhmuc.ten_danh_muc, danhmuc.ghi_chu]);
    //       return true;
    //     } catch (error: any) {
    //       console.error('Error creating danh muc:', error);
    //       throw new Error(`Unable to create danh muc: ${error.message}`);
    //     }
    //   }

      async createLoaiSanPham(loaisanpham: any): Promise<any> {
        try {
          const sql = 'CALL createLoaiSanPham(?, ?)';
          await this.db.query(sql, [loaisanpham.TenLoaiSanPham, loaisanpham.BiXoa]);
          return true;
        } catch (error: any) {
          console.error('Error creating loai san pham:', error);
          throw new Error(`Unable to create loai san pham: ${error.message}`);
        }
      }

      async updateLoaiSanPham(loaisanpham: any): Promise<any> {
        try {
          const sql = 'CALL updateLoaiSanPham(?, ?)';
          await this.db.query(sql, [loaisanpham.MaLoaiSanPham, loaisanpham.TenLoaiSanPham]);
          return true;
        } catch (error: any) {
          throw new Error( error.message);
        }
      }

      async DeleteLoaiSanPham(id:any): Promise<any> {
        try {
          const sql = 'CALL DeleteLoaiSanPham(?)';
          await this.db.query(sql, [id]);
          return true;
        } catch (error: any) {
          throw new Error( error.message);
        }
      }

      async SearchLoaiSanPham(pageIndex:number,pageSize:number, search_content:string): Promise<any> {
        try {
          const sql = 'CALL SearchLoaiSanPham(?, ?, ?)';
          const [results] = await this.db.query(sql, [pageIndex,pageSize,search_content]);
          return results;
        } catch (error:any) {
          throw new Error( error.message);
        }
      }

      async GetLoaiSanPhamById(id:string):Promise<any>{
        try {
          const sql='CALL GetLoaiSanPhamById(?)';
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
        
