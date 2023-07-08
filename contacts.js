import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const contactsPath = path.resolve("db", "contacts.json")

export const listContacts = async () => {
	const data = await fs.readFile(contactsPath)
	return JSON.parse(data);
}

export const getContactById = async (contactId) => {
	const data = await listContacts()
	const contact = data.find(item => item.id === contactId)
	return contact || null;
}

export const removeContact = async (contactId) => {
	// ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

export const addContact = async ({ name, email, phone }) => {
	const newContact = {
		id: nanoid(),
		name,
		email,
		phone
	}
}