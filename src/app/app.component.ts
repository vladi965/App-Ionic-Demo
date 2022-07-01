import { Component } from '@angular/core';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private network: Network, public alertController: AlertController) {
    window.addEventListener('offline', () => {
      this.openAlert();
    })
  }
  async openAlert(){
    const alert = await this.alertController.create({
        header: 'Check Network Connection',
        message: 'Usted no tiene Conexión a Internet.',
        buttons: [{
          text: 'Ok',
          handler: () => {
            navigator['app'];
          }
        }]
    })
    await alert.present();
  }
}
