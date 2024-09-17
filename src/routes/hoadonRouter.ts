import { Router } from 'express';
import { container } from 'tsyringe';
import { hoadonController } from '../controllers/hoadonController';

const hoadonRouter=Router();
const hoaDonController=container.resolve(hoadonController);
hoadonRouter.get('/getall',hoaDonController.getHoaDonAll.bind(hoaDonController));
hoadonRouter.get('/get-by-id/:id',hoaDonController.GetDonDatHangById.bind(hoaDonController));
hoadonRouter.post('/create',hoaDonController.InsertHoaDon.bind(hoaDonController));
hoadonRouter.post('/them',hoaDonController.InsertDonDatHang.bind(hoaDonController));
hoadonRouter.post('/update',hoaDonController.UpdateHoaDon.bind(hoaDonController));
hoadonRouter.post('/delete/:id',hoaDonController.DeleteHoaDon.bind(hoaDonController));
hoadonRouter.get('/hoa-don-gan-day',hoaDonController.LayDonDatHangGanDay.bind(hoaDonController));
hoadonRouter.get('/chi-tiet-hoa-don/:id',hoaDonController.sGetDetailDHD.bind(hoaDonController));
export default hoadonRouter;