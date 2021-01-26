import { Button } from "@dsgn/lib";
import { default as ApolloClient, InMemoryCache, gql } from "apollo-boost";

const Index = ({ books, children }) => {
  console.log(books);

  return (
    <div>
      <h1>Starter Monorepo</h1>
      <h3>
        Yarn Workspaces with react, nextjs, apollo-server, graphql, and shared
        ui consisting of styled components
      </h3>
      <Button bgColor='orange'>Test Button</Button>
      <Button primary>Primary Button</Button>

      {books.map((book, i) => {
        return (
          <div id={i}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query books {
        books {
          title
          author
        }
      }
    `,
  });

  console.log(data);

  return {
    props: {
      books: data.books,
    },
  };
}

export default Index;
