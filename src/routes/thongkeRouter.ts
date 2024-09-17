import { Router } from "express";
import { container } from "tsyringe";
import { ThongKeController } from "../controllers/thongkeController";

const thongkeRouter=Router();
const thongkeController=container.resolve(ThongKeController);

thongkeRouter.get('/san-pham-ban-chay/',thongkeController.ThongKeSanPhamBanChay.bind(thongkeController));

thongkeRouter.get('/da-thanh-toan/',thongkeController.ThongKeHoaDonDaThanhToan.bind(thongkeController));
export default thongkeRouter;