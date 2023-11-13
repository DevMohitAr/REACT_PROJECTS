import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import johnImg from './assets/john.jpg'
import brunoImg from './assets/bruno.jpg'
import gantImg from './assets/gant.jpg'
import royImg from './assets/roy.jpeg'
import ryanImg from "./assets/ryan.jpg";
import jonasImg from './assets/jonas.jpg'
import joshImg from './assets/josh.jpg'
import kentImg from './assets/kent.jpg'



const initialContacts = [
  {
    id: "1",
    first: "Roy",
    last: "Derks",
    avatar: royImg,
    twitter: "gethackteam",
    handle: "@gethackteam",
  },
  {
    id: "2",
    first: "Bruno",
    last: "Paulino",
    avatar: brunoImg,
    twitter: "bpaulino0",
    handle: "@bpaulino0",
  },
  {
    id: "3",
    first: "Gant",
    avatar: gantImg,
    twitter: "GantLaborde",
    last: "Laborde",
    handle: "@gantlaborde",
  },
  {
    id: "4",
    first: "Josh W.",
    last: "Comeau",
    avatar: joshImg,
    twitter: "JoshWComeau",
    handle: "@JoshWComeau",
  },
  {
    id: "5",
    first: "Ryan",
    last: "Florence",
    avatar: ryanImg,
    twitter: "ryanflorence",
    handle: "@ryanflorence",
  },
  {
    id: "6",
    first: "Kent C.",
    last: "Dodds",
    avatar: kentImg,
    twitter: "kentcdodds",
    handle: "@kentcdodds",
  },
  {
    id: "7",
    first: "Jonas",
    last: "Schmedtmann",
    avatar: jonasImg,
    twitter: "jonas",
    handle: "jonasschmedtman",
  },
  {
    id: "8",
    first: "John",
    last: "Smilga",
    avatar: johnImg,
    twitter: "john_smilga",
    handle: "@john_smilga",
  },
   {
    id: "9",
    first: "zzz",
    last: "-",
    
    twitter: "@zzz",
   }
  // Add more contacts as needed
];

export async function getContacts(query) {
  await fakeNetwork(`getContacts:${query}`);
  let contacts = await localforage.getItem("contacts");
  
   if (!contacts) {
     // Set initialContacts in localforage if no contacts exist
     await set(initialContacts);
     contacts = initialContacts;
   }

  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("first", "createdAt"));
}

export async function createContact() {
  console.log('getting');
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let contact = { id, createdAt: Date.now() };
  let contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  console.log('contact is',contact);
  return contact;
}

export async function getContact(id) {
  await fakeNetwork(`contact:${id}`);
  let contacts = await localforage.getItem("contacts");
  console.log('local',contacts);
  let contact = contacts.find((contact) => contact.id === id);
  return contact ?? null;
}

export async function updateContact(id, updates) {
  await fakeNetwork();
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find((contact) => contact.id === id);
  if (!contact) throw new Error("No contact found for", id);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id) {
  let contacts = await localforage.getItem("contacts");
  let index = contacts.findIndex((contact) => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}
export async function deleteContacts() {
  try {
    // Delete all contacts
    await localforage.removeItem("contacts");
    console.log("All contacts deleted successfully.");
    return true;
  } catch (error) {
    console.error("Error deleting contacts:", error);
    return false;
  }
}

function set(contacts) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
