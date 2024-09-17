import { injectable } from "tsyringe";
import { danhmucRepository } from '../repositories/danhmucRepository';

@injectable()
export class DanhMucService{
    constructor(private danhmucRespository:danhmucRepository

    ){}
    async getLoaiSanPhamAll(): Promise<any> {
        return this.danhmucRespository.getLoaiSanPhamAll();
    }
    
    async createLoaiSanPham(loaisanpham:any): Promise<any>{
        return this.danhmucRespository.createLoaiSanPham(loaisanpham);
    }

    async updateLoaiSanPham(loaisanpham:any): Promise<any>{
        return this.danhmucRespository.updateLoaiSanPham(loaisanpham);
    }

    async DeleteLoaiSanPham(id: any): Promise<any> {
        return this.danhmucRespository.DeleteLoaiSanPham(id);
      }

    async SearchLoaiSanPham(pageIndex:number,pageSize:number, search_content:string): Promise<any> {
        return this.danhmucRespository.SearchLoaiSanPham(pageIndex,pageSize,search_content);
      }

      async GetLoaiSanPhamById(id:string): Promise<any> {
        return this.danhmucRespository.GetLoaiSanPhamById(id);
    }
}