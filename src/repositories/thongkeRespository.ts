import { injectable } from "tsyringe";
import { Database } from "../config/database";

@injectable()
export class thongkeRespository{
    constructor(private db:Database){

    }
    async ThongKeSanPhamBanChay():Promise<any>{
        try {
            const sql = 'CALL ThongKeSanPhamBanChay()';
            const [results] = await this.db.query(sql, []);
            return results;       
          } catch (error:any) {
            throw new Error( error.message);
          }
    }

    async ThongKeHoaDonDaThanhToan():Promise<any>{
      try {
          const sql = 'CALL ThongKeHoaDonDaThanhToan()';
          const [results] = await this.db.query(sql, []);
          return results;       
        } catch (error:any) {
          throw new Error( error.message);
        }
  }
}