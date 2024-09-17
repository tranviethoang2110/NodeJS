import { injectable } from "tsyringe";
import { hoadonRespository } from "../repositories/hoadonRepository";

@injectable()
export class hoadonServices{
    constructor(private hoadonRespository:hoadonRespository){

    }

    async InsertHoaDon(hoadon:any):Promise<any>{
        return this.hoadonRespository.InsertHoaDon(hoadon);
    }
    async InsertDonDatHang(hoadon:any):Promise<any>{
        return this.hoadonRespository.InsertDonDatHang(hoadon);
    }
    async UpdateHoaDon(hoadon:any):Promise<any>{
        return this.hoadonRespository.UpdateHoaDon(hoadon);
    }

    async DeleteHoaDon(hoadon:any):Promise<any>{
        return this.hoadonRespository.DeleteHoaDon(hoadon);
    }

    async GetDonDatHangById(id:string): Promise<any> {
        return this.hoadonRespository.GetDonDatHangById(id);
    }
    async LayDonDatHangGanDay(): Promise<any> {
        return this.hoadonRespository.LayDonDatHangGanDay();
    }
    async getHoaDonAll(): Promise<any> {
        return this.hoadonRespository.getHoaDonAll();
    }
    async GetDetailDHD(id:string): Promise<any> {
        return this.hoadonRespository.GetDetailDHD(id);
    }
}