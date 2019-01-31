import * as funcs from './functions'

let query = funcs.Bool({
    must: funcs.Match({
        field: "abc"
    }),
    should: [
        funcs.MatchPhrase({
            another_field: {
                query: 'abc',
            }
        })
    ]
})

console.log(query)