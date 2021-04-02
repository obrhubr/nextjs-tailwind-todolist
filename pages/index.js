import TodoList from '../components/todolist';
import { ApolloProvider } from "@apollo/client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

export default function Home() {
	return (
		<>
			<ApolloProvider client={client}>
				<TodoList />
			</ApolloProvider>
		</>
	)
}
