import { db, collection, doc, setDoc } from "../../firebase";

export const saveData = (collectionName: string, dataToSave: object) => {
  try {
    const newInstance = doc(collection(db, collectionName));
    setDoc(
      newInstance,
      {
        ...dataToSave,
      },

      { merge: true }
    );
  } catch (error) {
    throw new Error("Error al guardar el documento");
  }
};
