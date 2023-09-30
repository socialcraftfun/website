import { makeAutoObservable } from "mobx";

export default class DonateStore {

	constructor() {
		this._types = [
			{id: 0, id_text: 'donate', name: 'Пожертвование'}
		]
		this._items = [
			{
				id: 0,
				name: 'Инвестор',
				price: 100,
				description:
				`
				<b>Возможности:</b>
          <br>
          Унікальний ігровий префікс - Quick<br>
          Кілкість регіонів (Виживання/Анархія) - 2/3<br>
          Максимальний розмір регіону (Виживання) - 30000<br>
          Кількість точок будинків ( /home ) - 3<br>
          Слотів на аукціоні - 6<br>
          Унікальний набір - /kit quick<br>
          <br>
        <b>Команди:</b>
          <br>
          /suicide - Вбити себе<br>
          /ignore - Ігнорувати гравця<br>
          /sit - Аніssssssмація сидіння
				`
			},
			{
				id: 1,
				name: 'Вип',
				price: 30,
				description:
				`
				<b>Возможности:</b>
          <br>
          Унікальний ігровий префікс - ВИП<br>
          Кілкість регіонів (Виживання/Анархія) - 2/3<br>
          Максимальний розмір регіону (Виживання) - 30000<br>
          Кількість точок будинків ( /home ) - 3<br>
          Слотів на аукціоні - 6<br>
          Унікальний набір - /kit quick<br>
          <br>
        <b>Команди:</b>
          <br>
          /suicide - Вбити себе<br>
          /ignore - Ігнорувати гравця<br>
          /sit - Аніssssssмація сидіння
				`
			}
		]
		this._selectedItem = 0;
		this._selectedCaregory = 0;
		this._currency = 'UAH';
		makeAutoObservable(this);
	}

	setTypes(types) {
		this._types = types;
	}

	setItems(items) {
		this._items = items;
	}

	setSelectedItem(item) {
		this._selectedItem = item;
	}

	setSelectedCategory(item) {
		this._selectedCaregory = item;
	}

	setCurrency(cur) {
		this._currency = cur;
	}

	get types() {
		return this._types;
	}

	get items() {
		return this._items;
	}

	get selectedCategory() {
		return this._selectedCaregory;
	}

	get selectedItem() {
		return this._selectedItem;
	}

	get currency() {
		return this._currency;
	}

	getItemById(id) {
		return this.items[id]
	}

	getCategoryById(id) {
		return this.types[id];
	}
}