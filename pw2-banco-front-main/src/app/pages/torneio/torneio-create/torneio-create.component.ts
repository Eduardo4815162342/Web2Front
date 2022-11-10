import { TorneioEquipe } from './../../../models/torneioEquipe.model';
import { TorneioIndividual } from './../../../models/torneioIndividual.model';
import { Torneio } from './../../../models/torneio.model';
import { TorneioService } from './../torneio.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-torneio-create',
  templateUrl: './torneio-create.component.html',
  styleUrls: ['./torneio-create.component.scss']
})
export class TorneioCreateComponent implements OnInit {

  constructor(
    private readonly router:Router,
    private readonly torneioService: TorneioService,
    private readonly fb: FormBuilder
  ) { }

  form: FormGroup = new FormGroup({});
  formTorneio: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required]],
      data: [null, [Validators.required]],
      hora: [null, [Validators.required]],
      premiacao: [null, [Validators.required]],
      regras: [null, [Validators.required]],
    });

    this.formTorneio = this.fb.group({
      nome: [null, [Validators.required]],
      data: [null, [Validators.required]],
      hora: [null, [Validators.required]],
      premiacao: [null, [Validators.required]],
      regras: [null, [Validators.required]],
    });
  }

  save(): void{
    this.form.markAllAsTouched();
    if(this.form.valid){
      const torneio: Torneio = this.form.value;
      console.log(torneio.tipo)
      /*if(torneio.tipo == "Individual"){
        const torneioIndividual : TorneioIndividual = this.formTorneio.value
        this.torneioService.createTorneioIndividual(torneioIndividual)
        .pipe(
          catchError((err) =>{
            this.torneioService.showMessage('Erro ao criar torneio', true);
            return err;
          })
        )
        .subscribe(resp => {
          this.torneioService.showMessage('Torneio criado com sucesso!');
          this.router.navigate(['torneio']);
        });
    
      } else if(torneio.tipo == "Individual"){
        const torneioEquipe: TorneioEquipe = this.form.value;
        this.torneioService.createTorneioEquipe(torneioEquipe)
        .pipe(
          catchError((err) =>{
            this.torneioService.showMessage('Erro ao criar torneio', true);
            return err;
          })
        )
        .subscribe(resp => {
          this.torneioService.showMessage('Torneio criado com sucesso!');
          this.router.navigate(['torneio']);
        });
      }*/
    }else{
      this.torneioService.showMessage('Dados incompletos', true);
    }
  }

  cancel():void{
    this.router.navigate(['torneio']);
  }
}
