import { Router } from "express";
import { container } from "tsyringe";
import { taikhoanController } from "../controllers/taikhoanController";

const taikhoanRouter=Router();
const taiKhoanController=container.resolve(taikhoanController);

taikhoanRouter.get('/get-all-tai_khoan',taiKhoanController.GetTaiKhoanAll.bind(taiKhoanController));
taikhoanRouter.post('/create',taiKhoanController.createTaiKhoan.bind(taiKhoanController));
taikhoanRouter.post('/dang-nhap',taiKhoanController.LoginUser.bind(taiKhoanController));
export default taikhoanRouter;