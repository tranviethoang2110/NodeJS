import { Router } from "express";
import { container } from "tsyringe";
import { sanphamController } from "../controllers/sanphamController";
import { UploadMultiService } from "../services/upload-multiService";

const sanphamRouter=Router();
const SanPhamController=container.resolve(sanphamController);
const uploadMultiService = container.resolve(UploadMultiService);
sanphamRouter.get('/get-all',SanPhamController.getSanPhamAll.bind(SanPhamController));

sanphamRouter.get('/san-pham-moi-ve',SanPhamController.GetSanPhamMoiNhapVe.bind(SanPhamController));
sanphamRouter.get('/getbyid/:id',SanPhamController.GetSanPhamById.bind(SanPhamController));

sanphamRouter.post('/search', SanPhamController.SearchSanPhamByLoai.bind(SanPhamController));

sanphamRouter.post('/create',uploadMultiService.multerMultiUpload,SanPhamController.InsertSanPham.bind(SanPhamController));


sanphamRouter.post('/update', uploadMultiService.multerMultiUpload, SanPhamController.UpdateSanPham.bind(SanPhamController));
sanphamRouter.get('/delete/:id', uploadMultiService.multerMultiUpload, SanPhamController.DeleteSanPham.bind(SanPhamController));

sanphamRouter.post('/search-san-pham', SanPhamController.SearchSanPham.bind(SanPhamController));

sanphamRouter.post('/create',uploadMultiService.multerMultiUpload,SanPhamController.InsertSanPham.bind(SanPhamController));
export default sanphamRouter;