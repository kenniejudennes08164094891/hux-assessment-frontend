import { Observable, ReplaySubject } from "rxjs";

export const contactDetails$: ReplaySubject<any> = new ReplaySubject<any>();

export const emmitContactDetails = (data: any) => {
    contactDetails$.next(data);
}

export const getContactDetails: Observable<any> = contactDetails$.asObservable();