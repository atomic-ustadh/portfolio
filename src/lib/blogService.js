import { db } from './firebase'
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
} from 'firebase/firestore'

const COLLECTION_NAME = 'blogPosts'

export async function createPost({ title, content, excerpt, tags }) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  const docRef = await addDoc(collection(db, COLLECTION_NAME), {
    title,
    content,
    excerpt: excerpt || title,
    tags: tags || [],
    slug,
    publishedAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
  return docRef.id
}

export async function getPosts() {
  const q = query(collection(db, COLLECTION_NAME), orderBy('publishedAt', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

export async function getPostBySlug(slug) {
  const q = query(collection(db, COLLECTION_NAME), where('slug', '==', slug))
  const snapshot = await getDocs(q)
  if (snapshot.empty) return null
  const doc = snapshot.docs[0]
  return { id: doc.id, ...doc.data() }
}

export async function updatePost(id, data) {
  const docRef = doc(db, COLLECTION_NAME, id)
  await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() })
}

export async function deletePost(id) {
  const docRef = doc(db, COLLECTION_NAME, id)
  await deleteDoc(docRef)
}


