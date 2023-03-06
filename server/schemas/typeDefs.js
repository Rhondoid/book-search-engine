const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    // password: String!
    savedBooks: [Book]
  }

  type Book {
    //book id value returned from google's book API
    _id: ID!
    description: String!
    author: [String]
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    create(
      description: String!
      author: [String]
      image: String
      link: String
      title: String!
    ): Book
    removeBook(_id: ID!): Book
  }
`;

module.exports = typeDefs;
