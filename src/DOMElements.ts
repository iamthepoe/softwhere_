import {Modal} from 'bootstrap';
const element = document.querySelectorAll('.modal')[0] as HTMLElement;

const modal = new Modal(element, {
	keyboard: true,
	backdrop: true
});

const content = document.querySelector('#content') as HTMLDivElement;
const searchBtn = document.querySelector('#searchBtn') as HTMLButtonElement;
const saveBtn = document.querySelector('#saveBtn') as HTMLButtonElement;

export {element, modal, content, searchBtn, saveBtn};