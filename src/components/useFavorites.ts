import { useEffect, useState } from 'react';

const KEY = 'vit-hub-favorites';
type FavMap = Record<string, boolean>;

function read(): FavMap {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}') as FavMap;
  } catch {
    return {};
  }
}

export function useFavorites() {
  const [favs, setFavs] = useState<FavMap>(() => read());

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favs));
  }, [favs]);

  const toggle = (id: string) => setFavs((f) => ({ ...f, [id]: !f[id] }));
  const isFav = (id: string) => !!favs[id];
  const list = () => Object.keys(favs).filter((k) => favs[k]);

  return { toggle, isFav, list };
}
