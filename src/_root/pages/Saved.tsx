import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/AuthContext";
import { useGetSavedPosts } from "@/lib/react-query/queriesAndMutations";

const Saved = () => {
  const { toast } = useToast();
  const { user } = useUserContext();

  const {
    data: savePosts,
    isLoading,
    isError: isGetSavedPostsError,
  } = useGetSavedPosts(user.id);

  const posts = savePosts?.documents.map((savePost) => savePost.post) ?? [];

  if (isGetSavedPostsError) {
    toast({ title: "Something went wrong" });
    return;
  }

  return (
    <div className="saved-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/assets/icons/save.svg"
          width={36}
          height={36}
          alt="edit"
          className="invert-white"
        />
        <h2 className="h3-bold md:h2:bold text-left w-full">Saved Posts</h2>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <ul className="w-full flex justify-center max-w-5xl gap-9">
          {posts.length === 0 ? (
            <p className="text-light-4">No available posts</p>
          ) : (
            <GridPostList posts={posts} showStats={false} />
          )}
        </ul>
      )}
    </div>
  );
};

export default Saved;
