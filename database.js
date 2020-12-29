const request = indexedDB.open('instaclone', 1)

request.onupgradeneeded = () => {
    const db = request.result
    db.createObjectStore('profile', {autoIncrement: true})
    db.createObjectStore('gallery', {autoIncrement: true})
}

// add entry to database
function addEntryToDB(storeName, entry) {
    // create transaction
    const db = request.result
    let transaction = db.transaction([storeName], 'readwrite')
    let store = transaction.objectStore(storeName)
    store.add(entry)

    // when transaction is completed
    transaction.oncomplete = () => alert('Entry added to ' + storeName)

    // when transaction fails
    transaction.onerror = e => {
        alert(`Failed to add entry to ${storeName}. Check console for more details`)
        console.log(e.target.error)
    }
}

// clear entries in database
function clearEntriesInDB(storeName) {
    const db = request.result
    let transaction = db.transaction([storeName], 'readwrite')
    let store = transaction.objectStore(storeName)
    store.clear()
}

// get entry from database
async function getEntryFromDB(storeName, id) {
    const data = new Promise((resolve, reject) => {
        const db = request.result
        let transaction = db.transaction([storeName], 'readonly')
        let store = transaction.objectStore(storeName)
        let getData = id ? store.get(id) : store.getAll()

        getData.onsuccess = () => {
            console.log(getData.result)
            resolve(getData.result)
        }
        getData.onerror = () => reject(getData.error)
        })
    return Promise.resolve(data)
}

export { request, addEntryToDB, getEntryFromDB, clearEntriesInDB }