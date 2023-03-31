import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { codeTypeList } from 'src/app/mock/animations';
import { Animation } from 'src/app/models/animation';
import { selectAnimationAction } from 'src/app/state/animation-state';

@Component({
  selector: 'app-form-animation',
  templateUrl: './form-animation.component.html',
  styleUrls: ['./form-animation.component.scss'],
})
export class FormAnimationComponent implements OnInit, OnDestroy {
  @Input()
  isNew = false;

  @Output()
  newAnimation = new EventEmitter<Animation>();

  @Input()
  model: Animation | null = {
    codeAnimation: '',
    TypeAnim: null,
    commentaire: '',
    description: '',
    dateCreation: null,
    dateValidite: null,
    difficulte: '',
    duree: null,
    limiteAge: null,
    nbPlaceDispo: null,
    nom: '',
    tarif: null,
    listActivite: [],
  };

  animation$!: Observable<Animation | null>;

  private destroyed$ = new Subject<boolean>();

  readonly codeTypeList = Object.values(codeTypeList);

  animationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  ngOnInit() {
    this.animationForm = this.formBuilder.group(
      {
        codeAnimation: [this.model?.codeAnimation, Validators.required],
        TypeAnim: [this.model?.TypeAnim?.code, Validators.required],
        commentaire: [this.model?.commentaire, Validators.required],
        description: [this.model?.description, Validators.required],
        dateCreation: this.model?.dateCreation,
        dateValidite: [
          this.model?.dateValidite
            ? new Date(this.model.dateValidite).toISOString().substring(0, 10)
            : '',
          Validators.required,
        ],
        difficulte: [this.model?.difficulte, Validators.required],
        duree: [this.model?.duree, Validators.required],
        limiteAge: [this.model?.limiteAge, Validators.required],
        nbPlaceDispo: [this.model?.nbPlaceDispo, Validators.required],
        nom: [this.model?.nom, Validators.required],
        tarif: [this.model?.tarif, Validators.required],
        listActivite: this.model?.listActivite,
      },
      {
        updateOn: 'submit',
        validators: [this.DateAnnValidator],
      }
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  FormatDateToShortDate(date: Date | undefined | null): string {
    if (date !== undefined && date !== null) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      if (month < 10) {
        return year + '-' + '0' + month + '-' + day;
      } else {
        return year + '-' + month + '-' + day;
      }
    } else {
      return '';
    }
  }

  DateAnnValidator(animationForm: FormGroup) {
    const date = animationForm.get('dateValidite')?.value;
    const dateNow = new Date();
    const day = dateNow.getDate();
    const month = dateNow.getMonth() + 1;
    let monthstr = (dateNow.getMonth() + 1).toString();
    const year = dateNow.getFullYear();
    if (month < 10) {
      monthstr = '0' + monthstr;
    }
    const shrotdateNow =
      year?.toString() + '-' + monthstr + '-' + day?.toString();

    if (date <= shrotdateNow) {
      animationForm.controls['dateValidite'].setErrors({ dateValid: true });
      return { dateValid: true };
    }
    return null;
  }

  onSubmitForm(): void {
    if (this.animationForm.valid) {
      this.animationForm
        .get('listActivite')
        ?.setValue(this.model?.listActivite);
      this.animationForm
        .get('dateValidite')
        ?.setValue(
          this.animationForm.get('dateValidite')?.value + 'T00:00:00.000Z'
        );
      this.animationForm
        .get('dateCreation')
        ?.setValue(new Date().toISOString());
      this.newAnimation.emit(this.animationForm.value);
      this.store.dispatch(selectAnimationAction({ animation: null }));
    }
  }
}
