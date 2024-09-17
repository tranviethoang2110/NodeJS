import { Router } from "express";
import { container } from "tsyringe";
import { hangsanxuatController } from "../controllers/hangsanxuatController";

const hangsanxuatRouter=Router();
const hangSanXuatController=container.resolve(hangsanxuatController);

hangsanxuatRouter.get('/get-all',hangSanXuatController.getHangSanXuatAll.bind(hangSanXuatController));

hangsanxuatRouter.post('/create',hangSanXuatController.createHangSanXuat.bind(hangSanXuatController));

hangsanxuatRouter.post('/update',hangSanXuatController.updateHangSanXuat.bind(hangSanXuatController));

hangsanxuatRouter.get('/delete/:id',hangSanXuatController.deleteHangSanXuat.bind(hangSanXuatController));
export default hangsanxuatRouter;