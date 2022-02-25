import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserModule } from './user/user.module';
import { ROOT_MODULES } from 'src/environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    ...ROOT_MODULES,
    UserModule,
  ],
})
export class AppStoreModule {}
