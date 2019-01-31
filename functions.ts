import {Query} from './types';

export function Bool(input: Query.Bool): Query.Query {
    return {
        bool: input
    }
}

export function DisMax(input: Query.DisMax): Query.Query {
    return {
        dis_max: input
    }
}

export function Match(input: Query.Match): Query.Query {
    return {
        match: input
    }
}

export function MatchPhrase(input: Query.MatchPhrase): Query.Query {
    return {
        match_phrase: input
    }
}

export function MatchPhrasePrefix(input: Query.MatchPhrasePrefix): Query.Query {
    return {
        match_phrase_prefix: input
    }
}

export function MultiMatch(input: Query.MultiMatch): Query.Query {
    return {
        multi_match: input
    }
}