import { AngularFirestoreCollection } from "@angular/fire/firestore";
import { BehaviorSubject } from "rxjs";
import { Task } from "../interfaces/task";

export const getObservable = (collection: AngularFirestoreCollection<Task[]>) => {
  const subject = new BehaviorSubject([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: any[]) => {
    subject.next(val);
  });
  return subject;
};
