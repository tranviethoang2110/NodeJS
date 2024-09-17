import { Router } from 'express';
import 'reflect-metadata';

import { LoginUser } from '../middlewares/authMiddleware';
import danhmucRouter from './danhmucRouter';
import hangsanxuatRouter from './hangsanxuatRouter';
import sanphamRouter from './sanphamRouter';
import hoadonRouter from './hoadonRouter';
import thongkeRouter from './thongkeRouter';
import taikhoanRouter from './taikhoanRouter';

const router = Router();
//router.use('/danh-muc', authenticate, danhmucRouter);
router.use('/danh-muc',danhmucRouter);
router.use('/hang-san-xuat',hangsanxuatRouter);
router.use('/san-pham',sanphamRouter);
router.use('/hoa-don', hoadonRouter);
router.use('/tai-khoan', taikhoanRouter);
router.use('/thong-ke', thongkeRouter);
export default router;
