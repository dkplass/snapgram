import { Models } from "appwrite";
import { Loader } from "lucide-react";
import GridPostList from "./GridPostList";

type SearchResultsProps = {
  isSearchfetching: boolean;
  searchedPosts: Models.DocumentList<Models.Document> | undefined;
};

const SearchResults = ({
  isSearchfetching,
  searchedPosts,
}: SearchResultsProps) => {
  if (isSearchfetching) {
    return <Loader />;
  }

  console.log(searchedPosts);

  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  }

  return (
    <p className="text-light-4 mt-10 text-center w-full">No Result found</p>
  );
};

export default SearchResults;
