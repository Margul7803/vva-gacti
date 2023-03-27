import { Profile, User } from "../models/user";

const dateMock: Date = new Date('December 17, 1995 03:24:00');


export const user:User = {
  nom:"ABOU JAMRA",
  prenom:"Mario",
  user:"mario.aboujamra",
  dateInscr:dateMock,
  dateDebutSej:dateMock,
  dateFinSej:dateMock,
  dateFerm:dateMock,
  dateNais:dateMock,
  mail:"mario.aboujamra@gmail.com",
  tel:"06 64 12 84 21",
  type:Profile.ADMIN,
}