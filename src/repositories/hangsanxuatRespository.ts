import { injectable } from "tsyringe";
import { Database } from "../config/database";

@injectable()
export class hangsanxuatRespository{
    constructor (private db:Database){

    }
    async getHangSanXuatAll(): Promise<any> {
        try {
          const sql = 'CALL getHangSanXuatAll()';
          const [results] = await this.db.query(sql, []);
          return results;       
        } catch (error:any) {
          throw new Error( error.message);
        }
    }  

    async createHangSanXuat(hangsanxuat:any):Promise<any>{
        try {
            const sql='CALL createHangSanXuat(?,?)';
            await this.db.query(sql,[hangsanxuat.TenHangSanXuat,hangsanxuat.BiXoa]);
            return true;

        } catch (error:any) {
            console.error('Error creating hang san xuat',error);
            throw new Error(`Unable to create danh muc: ${error.message}`)
        }
    }

    async updateHangSanXUat(hangsanxuat:any):Promise<any>{
        try {
            const sql='CALL updateHangSanXUat(?,?)';
            await this.db.query(sql,[hangsanxuat.MaHangSanXuat,hangsanxuat.TenHangSanXuat]);
            return true;
            
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    async deleteHangSanXuat(id:any):Promise<any>{
        try {
            const sql='CALL deleteHangSanXuat(?)';
            await this.db.query(sql,[id])
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

}