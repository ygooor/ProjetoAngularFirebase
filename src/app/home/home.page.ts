
import { Component, NgModule, ViewChild } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { NavController, ModalController } from '@ionic/angular';
import { create } from 'domain';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {



  funcionario:any;
  guia:any = 'all';
  isLoading: boolean = false;
  funcionarios: any;
  

  constructor(
) { 
    this.listarfuncionario()
}


  listarfuncionario(){
    this.isLoading = true;
    fetch('http://localhost/ProjetoAngularFirebase/empresa/funcionario/listar_funcionario.php')
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.funcionarios = response.funcionarios;
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }



  trocar(event:any){
    console.log(event.detail.value)
    this.guia=event.detail.value
  }

  submitForm() {
    
  }

}