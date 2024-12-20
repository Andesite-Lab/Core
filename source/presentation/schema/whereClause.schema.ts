import { Type } from '@sinclair/typebox';

export const whereClauseSchema = Type.Object(
    {
        $in: Type.Optional(
            Type.Array(Type.Union([
                Type.Number(),
                Type.String({ format: 'date-time' }),
                Type.String()
            ]))
        ),
        $nin: Type.Optional(Type.Array(Type.Union([
            Type.Number(),
            Type.String({ format: 'date-time' }),
            Type.String()
        ]))),
        $eq: Type.Optional(Type.Union([
            Type.Number(),
            Type.String({ format: 'date-time' }),
            Type.String(),
            Type.Boolean()
        ])),
        $neq: Type.Optional(Type.Union([
            Type.Number(),
            Type.String({ format: 'date-time' }),
            Type.String(),
            Type.Boolean()
        ])),
        $match: Type.Optional(Type.String()),
        $lt: Type.Optional(Type.Union([
            Type.Number(),
            Type.String({ format: 'date-time' }),
            Type.String()
        ])),
        $lte: Type.Optional(Type.Union([
            Type.Number(),
            Type.String({ format: 'date-time' }),
            Type.String()
        ])),
        $gt: Type.Optional(Type.Union([
            Type.Number(),
            Type.String({ format: 'date-time' }),
            Type.String()
        ])),
        $gte: Type.Optional(Type.Union([
            Type.Number(),
            Type.String({ format: 'date-time' }),
            Type.String()
        ])),
        $isNull: Type.Optional(Type.Boolean()),
        $isNotNull: Type.Optional(Type.Boolean())
    }, {
        $id: 'WhereClause',
        $schema: 'http://json-schema.org/draft-07/schema#',
        additionalProperties: false,
        title: 'WhereClause Schema',
        description: 'WhereClause Schema for advanced search'
    }
);