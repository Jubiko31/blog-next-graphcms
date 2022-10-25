import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const token = process.env.GRAPHCMS_TOKEN

export default async function commentsHandler(req, res) {
  const { body } = req;
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${token}`     
    }
  })
  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { 
        id 
      }
    }
  `;

  const result = await graphQLClient.request(query, body);
  return res.status(200).send(result);
}
