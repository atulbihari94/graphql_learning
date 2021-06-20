const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
} = graphql;

const _ = require('lodash');

const books = [
{name: 'XYZ',genre:'first', id: '1', authorId: '1'},
{name: 'PQR',genre:'second', id: '2', authorId: '2'},
{name: 'ASD',genre:'first', id: '3', authorId: '1'},
{name: 'FGH',genre:'second', id: '4', authorId: '2'},
];

const authors = [
    {name: 'Atul',age:111, id: '1'},
    {name: 'Bihari',age:101, id: '2'},
    ];


const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return _.filter(books, {authorId:parent.id})
            }
        }
    })
});

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args) {
                console.log(parent);
                return _.find(authors, {id: parent.authorId})
            }
        }
    })
});

const RootQuery = new GraphQLObjectType ({
name: 'RootQueryType',
fields: {
    book: {
        type: BookType,
        args: {id: {type: GraphQLID}},
        resolve(parent, args) {
            // code to get data from db / other resource
            console.log(typeof (args.id))
            return _.find(books, {id: args.id});
        }
    },
    author: {
        type: AuthorType,
        args: {id: {type: GraphQLID}},
        resolve(parent, args){
            return _.find(authors, {id: args.id})
        }
    }

}
});


module.exports = new GraphQLSchema({
    query: RootQuery
})