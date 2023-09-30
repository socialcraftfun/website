import { makeAutoObservable } from "mobx";

export default class DonateStore {
    constructor() {
        this._selectedPaysystem = 'diaka';

        makeAutoObservable(this);
    }

    setPaysystem(item) {
        this._selectedPaysystem = item;
    }

    get paysystem() {
        return this._selectedPaysystem;
    }
}