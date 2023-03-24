import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { codeEtatList } from 'src/app/mock/activite';
import { Animations, codeTypeList } from 'src/app/mock/animations';
import { Activite } from 'src/app/models/activite';
import { Animation } from 'src/app/models/animation';

@Component({
  selector: 'app-form-activite',
  templateUrl: './form-activite.component.html',
  styleUrls: ['./form-activite.component.scss'],
})
export class FormActiviteComponent {
  @Input()
  isNew = false;

  @Output() newActivite = new EventEmitter<Activite>();

  @Output() cancel = new EventEmitter<boolean>();

  @Input()
  model: Activite | null = {
    codeAnimation: '',
    codeEtat: null,
    date: null,
    heureDebut: null,
    dateAnnule: null,
    heureFin: null,
    heureRendezVous: null,
    nomResponsable: '',
    prenomResponsable: '',
    prix: null,
  };

  readonly codeEtats = Object.values(codeEtatList);

  readonly animations = Object.values(Animations);

  activiteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.activiteForm = this.formBuilder.group(
      {
        codeAnimation: [this.model?.codeAnimation, Validators.required],
        codeEtat: [this.model?.codeEtat, Validators.required],
        date: [this.model?.date, Validators.required],
        heureRendezVous: [this.model?.heureRendezVous, Validators.required],
        heureDebut: [this.model?.heureDebut, Validators.required],
        dateAnnule: [this.model?.dateAnnule, Validators.required],
        heureFin: [this.model?.heureFin, Validators.required],
        nomResponsable: [this.model?.nomResponsable, Validators.required],
        prenomResponsable: [this.model?.prenomResponsable, Validators.required],
        prix: [this.model?.prix, Validators.required],
      },
      {
        updateOn: 'submit',
      }
    );
  }

  onSubmitForm(): void {
    if (this.activiteForm.valid) {
      console.log(this.activiteForm.value);
      this.newActivite.emit(this.activiteForm.value);
    }
  }

  onDestroyForm(): void {
    this.cancel.emit(true);
  }
}
