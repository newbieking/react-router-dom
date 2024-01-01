const CONTACT_LIST = [
    { id: 1, first: "ma", last: "jack", favorite: false, avatar: "https://placekitten.com/g/200/200", twitter: "twitter1", notes: "Some notes" },
    { id: 2, first: "fa", last: "tom", favorite: true, avatar: "https://placekitten.com/g/200/200", twitter: "twitter2", notes: "Some notes" },
    { id: 3, first: "eve", last: "", favorite: false, avatar: "https://placekitten.com/g/200/200", twitter: "twitter3", notes: "Some notes" },
]

export async function getContacts(query) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 300);
    })  
    if (query) {
        return CONTACT_LIST.filter(contact => contact.first.includes(query) || contact.last.includes(query))
    } else {
        return CONTACT_LIST

    }
}


export async function getContact(contactId) {
    const contactList = CONTACT_LIST.filter(contact => contact.id == contactId)
    return contactList.length ? contactList[0] : null
}


export function createContact() {
    const item = { id: CONTACT_LIST.length + 1, first: "new", last: "last", favorite: false, avatar: "https://placekitten.com/g/200/200", twitter: "twitter_new", notes: "Some notes" }
    CONTACT_LIST.push(item)
    return item
}


export function updateContact(contactId, updates) {
    const findItemIdx = CONTACT_LIST.findIndex(item => item.id == contactId)
    if (findItemIdx !== -1) {
        const item = CONTACT_LIST[findItemIdx]
        CONTACT_LIST[findItemIdx] = { ...item, ...updates }
    }
    return null
}

export async function deleteContact(contactId) {
    CONTACT_LIST.splice(CONTACT_LIST.findIndex(contact => contact.id == contactId), 1)
}