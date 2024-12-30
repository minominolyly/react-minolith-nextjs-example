const STORAGE_NAME = "react-minolith-nextjs-example";

function getData<T>(key: string): T | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  if (!window.localStorage) {
    return undefined;
  }

  try {
    const item = localStorage.getItem(`${STORAGE_NAME}/${key}`);
    return item !== undefined && item !== null
      ? (JSON.parse(item) as T)
      : undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function setData<T>(key: string, data: T): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  if (!window.localStorage) {
    return false;
  }

  try {
    localStorage.setItem(`${STORAGE_NAME}/${key}`, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

const localStorageUtility = {
  getData,
  setData,
};

export default localStorageUtility;
