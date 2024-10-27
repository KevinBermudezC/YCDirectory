import SearchForm from "@/components/searchForm/SearchForm";
import StartupCard from "@/components/Card/StartupCard";

export default async function Home({searchParams}: {searchParams: Promise<{ query?: string}>}) {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {_id:1, name: 'John Doe'},
    _id:1,
    description: 'A new way to connect with people',
    image: 'https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Tech',
    title: 'Flying Robot'

  }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup,<br/> Connect with Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.map((post : StartupCardType, index:number)=>(
            <StartupCard key={post?._id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
