import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { codeTypeList } from 'src/app/mock/animations';
import { Animation } from 'src/app/models/animation';

@Component({
  selector: 'app-form-animation',
  templateUrl: './form-animation.component.html',
  styleUrls: ['./form-animation.component.scss'],
})
export class FormAnimationComponent {
  @Input()
  isNew = false;

  @Output() newAnimation = new EventEmitter<Animation>();

  @Output() cancel = new EventEmitter<boolean>();

  @Input()
  model: Animation | null = {
    codeAnimation: '',
    codeType: null,
    commentaire: '',
    description: '',
    dateCreation: new Date(),
    dateValidite: new Date(),
    difficulte: '',
    duree: null,
    limiteAge: null,
    nbPlaceDispo: null,
    nom: '',
    tarif: null,
  };

  readonly codeTypeList = Object.values(codeTypeList);

  animationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.animationForm = this.formBuilder.group(
      {
        codeAnimation: [this.model?.codeAnimation, Validators.required],
        codeType: [this.model?.codeType, Validators.required],
        commentaire: [this.model?.commentaire, Validators.required],
        description: [this.model?.description, Validators.required],
        dateCreation: [this.model?.dateCreation],
        dateValidite: [this.FormatDateToShortDate(this.model?.dateValidite), Validators.required],
        difficulte: [this.model?.difficulte, Validators.required],
        duree: [this.model?.duree, Validators.required],
        limiteAge: [this.model?.limiteAge, Validators.required],
        nbPlaceDispo: [this.model?.nbPlaceDispo, Validators.required],
        nom: [this.model?.nom, Validators.required],
        tarif: [this.model?.tarif, Validators.required],
      },
      {
        updateOn: 'submit',
        validators: [this.DateAnnValidator],
      }
    );
  }

  FormatDateToShortDate(date: Date | undefined): string {
    if (date !== undefined) {
      const day = date.getDate();
      let month = date.getMonth() + 1;
      const year = date.getFullYear();
      if(month < 10){
        return year + '-' + "0" +month + '-' + day;
      }
      else{
        return year + '-' + month + '-' + day;
      }
    } else {
      return '';
    }
  }

  DateAnnValidator(activiteForm: FormGroup) {
    const date = activiteForm.get('dateValidite')?.value;
    const dateNow = new Date()
    const day = dateNow.getDate();
    let month = (dateNow.getMonth() + 1);
    let monthstr = (dateNow.getMonth() + 1).toString();
    const year = dateNow.getFullYear();
    if(month < 10){
     monthstr = "0"+monthstr
    }
    const shrotdateNow = year?.toString() + '-' + monthstr + '-' + day?.toString()

    if (date <= shrotdateNow) {
      activiteForm.controls['dateValidite'].setErrors({ dateValid: true });
      return { dateValid: true };
    }
    return null;
  }

  onSubmitForm(): void {
    if (this.animationForm.valid) {
      console.log(this.animationForm.value);
      this.newAnimation.emit(this.animationForm.value);
    }
  }

  onDestroyForm(): void {
    this.cancel.emit(true);
  }
}
