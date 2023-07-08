// console.log("hello");
import { addContact, getContactById, listContacts } from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
	try {
		switch (action) {
			case "read":
				const data = await listContacts();
				console.log(data);
				break;
			case 'get':
				const contact = await getContactById(id)
				console.log(contact);
				break;

			case 'add':
				const newContact = await addContact({ name, email, phone })
				console.log(newContact);
				break;

			case 'remove':
				// ... id
				break;

			default:
				console.warn('\x1B[31m Unknown action type!');
		}
	} catch (error) {
		console.log(error.message);
	}

}
// invokeAction({ action: "read" })
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" })
invokeAction({ action: "add", name: "Mykola", email: "one@mail.com", phone: "(380) 99 72 72 178" })