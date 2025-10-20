import { inject, Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  
  
  private loadingService = inject(LoadingController);
  private alertService = inject(AlertController);


    async showAlert(text: string, title: string) {
    var mbox = await this.alertService.create(
      {
        cssClass: '',
        translucent: true,
        header: title,
        message: text,
        buttons: ['Aceptar']
      });
    await mbox.present();
    return mbox;
  }



    public async showLoader(msg: string | undefined = undefined) {
    var loader = await this.loadingService.create({ cssClass: '', message: msg, translucent: true });
    await loader.present();
    return loader;
  }
}
