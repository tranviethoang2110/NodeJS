import { Router } from "express";
import { container } from "tsyringe";
import { DanhMucController } from "../controllers/danhmucController";

const danhmucRouter=Router();
const danhmucController=container.resolve(DanhMucController);

danhmucRouter.get('/get-all',danhmucController.getLoaiSanPhamAll.bind(danhmucController));

danhmucRouter.get('/get-by-id/:id',danhmucController.GetSanPhamById.bind(danhmucController));
danhmucRouter.post('/create', danhmucController.createLoaiSanPham.bind(danhmucController));

danhmucRouter.post('/update', danhmucController.updateLoaiSanPham.bind(danhmucController));

danhmucRouter.get('/delete/:id', danhmucController.DeleteLoaiSanPham.bind(danhmucController));
danhmucRouter.post('/search', danhmucController.SearchLoaiSanPham.bind(danhmucController));

export default danhmucRouter;