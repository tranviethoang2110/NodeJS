import { injectable } from "tsyringe";
import { hangsanxuatRespository } from "../repositories/hangsanxuatRespository";

@injectable()
export class HangSanXuatServices{
    constructor(private hangsanxuatRespository:hangsanxuatRespository){}
    async getHangSanXuatAll(): Promise<any> {
        return this.hangsanxuatRespository.getHangSanXuatAll();
    }

    async createHangSanXuat(hangsanxuat:any):Promise<any>{
        return this.hangsanxuatRespository.createHangSanXuat(hangsanxuat);
    }

    async updateHangSanXuat(hangsanxuat:any):Promise<any>{
        return this.hangsanxuatRespository.updateHangSanXUat(hangsanxuat);
    }

    async deleteHangSanXuat(id:any):Promise<any>{
        return this.hangsanxuatRespository.deleteHangSanXuat(id);
    }
}