type Operator = {

}

export namespace Type {
    export type Position = {
        lat: number,
        lon: number
    } | string
}

export namespace Field {
    export type analyzer = string
    export type auto_generate_synonyms_phrase = boolean
    export type boost = number
    export type cutoff_frequency = number
    export type fuzzy_rewrite = string | null
    export type fuzzy_transpositions = boolean
    export type minimum_should_match = number
    export type max_expansions = number
    export type _name = string
    export type operator = "and" | "or"
    export type prefix_length = number
    export type query = string
    export type slop = number
    export type lenient = boolean
    export type zero_terms_query = "none" | "all"


    //todo: sort
    export type adjust_pure_negative = boolean
    export type tie_breaker = number
    export type negative_boost = number
    export type disable_coord = any

    //todo: confirm valid types
    export type fuzziness = any
    export type use_dis_max = boolean
}

export namespace Query {
    export type Query =
        { bool: Bool } |
        { boosting: Boosting } |
        { common_terms: CommonTerms } |
        { constant_score: ConstantScore } |
        { dis_max: DisMax } |
        { exists: Exists } |
        { field_masking_span: FieldMaskingSpan } |
        { fuzzy: Fuzzy } |
        { geo_bounding_box: GeoBoundingBox } |
        { geo_polygon: GeoPolygon } |
        { geo_shape: GeoShape } |
        { ids: Ids } |
        { match: Match } |
        { match_phrase: MatchPhrase } |
        { match_phrase_prefix: MatchPhrasePrefix } |
        { more_like_this: MoreLikeThis } |
        { multi_match: MultiMatch } |
        { nested: Nested } |
        { prefix: Prefix } |
        { range: Range } |
        { regexp: Regexp } |
        { simple_query_string: SimpleQueryString } |
        { span_containing: SpanContaining } |
        { span_first: SpanFirst } |
        { span_multi_term: SpanMultiTerm } |
        { span_near: SpanNear } |
        { span_not: SpanNot } |
        { span_or: SpanOr } |
        { span: Span } |
        { span_term: SpanTerm } |
        { span_within: SpanWithin } |
        { term: Term } |
        { terms: Terms } |
        { terms_set: TermsSet } |
        { type: Type } |
        { wildcard: Wildcard } |
        { wrapper: Wrapper }


    export type Bool = {
        should?: Query | Query[]
        must?: Query | Query[]
        must_not?: Query | Query[]
        filter?: Query | Query[]
        minimum_should_match?: Field.minimum_should_match

        adjust_pure_negative?: Field.adjust_pure_negative
        disable_coord?: any //not used, but not invalid
        _name?: Field._name
    }


    export type Boosting = {
        positive?: Query[]
        negative?: Query[]
        negative_boost?: Field.negative_boost
        boost?: Field.boost
        _name?: Field._name
    }

    export type CommonTerms = {
        [field: string]: CommonTerms_Field
    }

    export type CommonTerms_Field = {
        query?: Field.query
        analyzer?: Field.analyzer
        disable_coord?: Field.disable_coord
        boost?: Field.boost
        high_freq?: Field.high_freq
        low_freq?: Field.low_freq
        minimum_should_match?: CommonTerms_Field_MinShouldMatch | Field.minimum_should_match
        cutoff_frequency?: Field.cutoff_frequency
        _name?: Field._name
    }

    export type CommonTerms_Field_MinShouldMatch = {
        low_freq: Field.low_freq
        high_freq: Field.high_freq
    }

    export type ConstantScore = {
        _name?: Field._name
        boost: Field.boost
    } | Query

    export type DisMax = {
        queries?: Query[]
        boost?: Field.boost
        tie_breaker?: Field.tie_breaker
        _name?: Field._name
    }

    export type Exists = {
        field
        _name
        boost
    }

    export type FieldMaskingSpan = {
        boost
        field
        _name
    }

    export type Fuzzy = {
        [field: string]: Fuzzy_Field
    }

    export type Fuzzy_Field = {
        term
        value
        boost
        fuzziness
        prefix_length
        max_expansions
        transpositions
        rewrite: string
        _name
    }

    export type GeoBoundingBox = {
        [field: string]: GeoBoundingBox_Field
    } | {
        _name
        boost
        validation_method
        ignore_unmapped
        type: "MEMORY" | "INDEXED§"
    }

    export type GeoBoundingBox_Field = {
        WKT?: string,
        TOP?: Type.Position
        BOTTOM?: Type.Position
        LEFT?: Type.Position
        RIGHT?: Type.Position

        TOP_LEFT?: Type.Position
        BOTTOM_RIGHT?: Type.Position
        TOP_RIGHT?: Type.Position
        BOTTOM_LEFT?: Type.Position
    }

    // export type GeoExecType

    export type GeoPolygon = {
        [field: string]: GeoPolygon_Field
    } | {
        _name
        boost
        validation_method
        ignore_unmapped
    }

    export type GeoPolygon_Field = {
        points: Type.Position[]
    }

    export type GeoShape = {
        [field: string]: GeoPolygon_Field
    } | {
        boost
        _name
        ignore_unmapped
    }

    export type GeoShape_Field = {
        shape: GeoShape_Field_Shape
        strategy: "term" | "recursive"
        relation: "INTERSECTS" | "DISJOINT" | "WITHIN" | "CONTAINS"
        indexed_shape?: GeoShape_Field_IndexedShape
    };

    export type GeoShape_Field_Shape = {
        type: string
        coordinates: number[][]
    }


    export type GeoShape_Field_IndexedShape = {
        id: string
        type: string
        index: string
        path: string
        routing: string
    }

    export type Ids = {
        type: string,
        values: string[]
    }

    export type Match = {
        [field: string]: string | Match_Field
    }

    export type Match_Field = {
        query?: Field.query
        operator?: Field.operator
        zero_terms_query?: Field.zero_terms_query
        cutoff_frequency?: Field.cutoff_frequency
        auto_generate_synonyms_phrase?: Field.auto_generate_synonyms_phrase

        // from source - may not be used, Match is base
        lenient?: Field.lenient
        fuzzy_transpositions?: Field.fuzzy_transpositions
        fuzzy_rewrite?: Field.fuzzy_rewrite
        minimum_should_match?: Field.minimum_should_match
        max_expansions?: Field.max_expansions
        prefix_length?: Field.prefix_length
        analyzer?: Field.analyzer
    }


    export type MatchPhrase = {
        [field: string]: string | MatchPhrase_Field
    }

    export type MatchPhrase_Field = {
        query?: string
        analyzer?: string

        boost?: Field.boost
        slop?: Field.slop
        _name?: Field._name
        zero_terms_query?: Field.zero_terms_query

    }

    export type MatchPhrasePrefix = {
        [field: string]: MatchPhrasePrefix_Field
    }

    export type MatchPhrasePrefix_Field = {
        query?: Field.query
        analyzer?: Field.analyzer
        max_expansions?: Field.max_expansions

        boost?: Field.boost
        slop?: Field.slop
        _name?: Field._name
    }

    export type MoreLikeThis = {
        fields?: string[]
        like?: MoreLikeThis_Item[] | MoreLikeThis_Item
        unlike?: MoreLikeThis_Item[] | MoreLikeThis_Item
        max_query_terms?: number
        min_term_freq?: number
        min_doc_freq?: number
        max_doc_freq?: number
        min_word_length?: number
        max_word_length?: number
        stop_words?: string[]
        analyzer?: Field.analyzer
        minimum_should_match?: Field.minimum_should_match
        boost_terms?: number
        include?: boolean
        fail_on_unsupported_fields?: boolean
        boost?: Field.boost,
        _name?: Field._name
    }

    export type MoreLikeThis_Item = any | string

    //todo: maybe make this more specific based on the "type" field
    export type MultiMatch = {
        fields?: string[]

        query?: Field.query
        type?: MultiMatchTypes
        analyzer?: Field.analyzer
        boost?: Field.boost
        slop?: Field.slop
        fuzziness?: Field.fuzziness
        prefix_length?: Field.prefix_length
        max_expansions?: Field.max_expansions
        operator?: Field.operator
        minimum_should_match?: Field.minimum_should_match
        fuzzy_rewrite?: Field.fuzzy_rewrite
        use_dis_max?: Field.use_dis_max
        tie_breaker?: Field.tie_breaker
        cutoff_frequency?: Field.cutoff_frequency
        lenient?: Field.lenient
        zero_terms_query?: Field.zero_terms_query
        generate_synonyms_phrase?: Field.auto_generate_synonyms_phrase
    }

    export type MultiMatchTypes =
        "best_fields" |
        "most_fields" |
        "cross_fields" |
        "phrase" |
        "phrase_prefix";

    export type MultiTerm = {

    }

    export type Nested = {
        query?: Query
        path?: string
        ignore_unmapped?: boolean
        score_mode?: "none" | "min" | "max" | "avg" | "sum"
    }

    export type Prefix = {
        [field: string]: Prefix_Field
    }

    export type Prefix_Field = {
        _name?: Field._name
        prefix?: string
        boost?: Field.boost
        rewrite?: string
    }

    export type Range = {
        [field: string]: Range_Field
    }

    export type Range_Field = {
        gt?: any
        gte?: any
        from?: any
        include_lower?: boolean
        lt?: any
        lte?: any
        to?: any
        include_upper?: boolean
        time_zone?: string
        format?: string
        relation?: string
        _name?: Field._name
        boost?: Field.boost
    }

    export type Regexp = {
        [field: string]: Range_Field
    }

    export type Regexp_Field = {
        value?: string
        flags?: string
        flags_value?: number
        rewrite?: string
        max_determinized_states?: number
        boost?: Field.boost
        _name?: Field._name
    }

    export type Script = {
        script
    }

    export type SimpleQueryString = {

    }

    export type SpanContaining = {

    }

    export type SpanFirst = {

    }

    export type SpanMultiTerm = {

    }

    export type SpanNear = {

    }

    export type SpanNot = {

    }

    export type SpanOr = {

    }

    export type Span = {

    }

    export type SpanTerm = {

    }

    export type SpanWithin = {

    }

    export type Term = {

    }

    export type Terms = {

    }

    export type TermsSet = {

    }

    export type Type = {

    }

    export type Wildcard = {

    }

    export type Wrapper = {

    }

}
