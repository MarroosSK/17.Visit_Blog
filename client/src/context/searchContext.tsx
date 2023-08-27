import { createContext, useState } from "react";

interface SearchInterface {
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  categoryPicked: string;
  setCategoryPicked: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValues = {
  searchWord: "",
  setSearchWord: () => {},
  categoryPicked: "",
  setCategoryPicked: () => {},
};

export const SearchContext = createContext<SearchInterface>(defaultValues);

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchWord, setSearchWord] = useState("");
  const [categoryPicked, setCategoryPicked] = useState("");

  return (
    <SearchContext.Provider
      value={{ searchWord, setSearchWord, categoryPicked, setCategoryPicked }}
    >
      {children}
    </SearchContext.Provider>
  );
};
