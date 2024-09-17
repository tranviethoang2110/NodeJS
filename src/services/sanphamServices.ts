import { injectable } from "tsyringe";
import { sanphamRepository } from "../repositories/sanphamRepository";

@injectable()
export class sanphamService{
    constructor(private sanphamRepository:sanphamRepository){

    }
    async getSanPhamAll(): Promise<any> {
        return this.sanphamRepository.getSanPhamAll();
    }
    async GetSanPhamMoiNhapVe(): Promise<any> {
        return this.sanphamRepository.GetSanPhamMoiNhapVe();
    }
    async GetSanPhamById(id:string): Promise<any> {
        return this.sanphamRepository.GetSanPhamById(id);
    }

    async SearchSanPhamByLoai(pageIndex:number,pageSize:number, ma_loai:string): Promise<any> {
        return this.sanphamRepository.SearchSanPhamByLoai(pageIndex,pageSize,ma_loai);
    }
    async InsertSanPham(sanpham:any):Promise<any>{
        return this.sanphamRepository.InsertSanPham(sanpham);
    }
    async UpdateSanPham(sanpham:any):Promise<any>{
        return this.sanphamRepository.UpdateSanPham(sanpham);
    }
    async DeleteSanPham(id:any):Promise<any>{
        return this.sanphamRepository.DeleteSanPham(id);
    }

    async SearchSanPham(pageIndex:number,pageSize:number, search_content:string): Promise<any> {
        return this.sanphamRepository.SearchSanPham(pageIndex,pageSize,search_content);
    }
}