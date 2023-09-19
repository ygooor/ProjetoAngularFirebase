import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: any = null;
  mensagem: any = 'Olá tudo bem';
  agendamentos: any = [];



  exibirMensagem(mensagem: any, nome: any) {
    this.mensagem = mensagem;
    this.nome = nome;
  }


  }

