import { SupportFileStorage } from '@app/support-chat-nest';
import { Injectable } from '@nestjs/common';
import type { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import * as fs from 'fs';
import * as path from 'path';

import { imageUploadInterceptorOptions } from '@/upload/upload.utils';
import { UploadService } from '@/upload/upload.service';

/** Категория загрузок чата поддержки (раздаётся статикой, см. UploadService.PUBLIC_CATEGORIES). */
export const SUPPORT_UPLOAD_CATEGORY = 'support';

/** Вложения чата — через общий UploadService: пока только картинки (jpeg/png/webp) с проверкой сигнатуры. */
@Injectable()
export class AppSupportFileStorage extends SupportFileStorage {
  constructor(private readonly uploads: UploadService) {
    super();
  }

  public multerOptions(): MulterOptions {
    return imageUploadInterceptorOptions();
  }

  public prepare(file: Express.Multer.File): string {
    this.uploads.verifyImageSignatureOrThrow(file);
    return `${SUPPORT_UPLOAD_CATEGORY}/${path.basename(file.path)}`;
  }

  public commit(file: Express.Multer.File): void {
    this.uploads.commitToCategory(file.path, SUPPORT_UPLOAD_CATEGORY);
  }

  // Файл мог уже убрать verifyImageSignatureOrThrow — отсутствие файла не ошибка
  public discard(file: Express.Multer.File): void {
    fs.rmSync(file.path, { force: true });
  }

  public toPublicUrl(relativePath: string): string | null {
    return this.uploads.toPublicUrl(relativePath);
  }

  public remove(relativePath: string): void {
    this.uploads.deleteByRelativePath(relativePath);
  }
}
