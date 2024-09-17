import { injectable } from "tsyringe";
import { thongkeRespository } from "../repositories/thongkeRespository";

@injectable()
export class thongkeServices{
    constructor(private thongkeRepository:thongkeRespository){

    }

    async ThongKeSanPhamBanChay(): Promise<any> {
        return this.thongkeRepository.ThongKeSanPhamBanChay();
    }

    async ThongKeHoaDonDaThanhToan(): Promise<any> {
        return this.thongkeRepository.ThongKeHoaDonDaThanhToan();
    }
}