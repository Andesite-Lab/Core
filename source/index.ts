/**
 * Common
 */
export * from '#/common/error/index.ts';
export * from '#/common/lib/optional/ioredis/index.ts';
export type * from '#/common/lib/optional/knex/index.ts';
export type * from '#/common/type/data/index.ts';
export * from '#/common/util/index.ts';

/**
 * Domain
 */
export * from '#/domain/usecase/index.ts';

/**
 * Infrastructure
 */
export * from '#/infrastructure/database/creator/index.ts';
export * from '#/infrastructure/database/index.ts';
export * from '#/infrastructure/repository/index.ts';

// create

export * from '#/infrastructure/storage/creator/index.ts';
export * from '#/infrastructure/storage/index.ts';
export * from '#/infrastructure/store/creator/index.ts';
export * from '#/infrastructure/store/index.ts';

/**
 * Presentation
 */
export * from '#/presentation/http/index.ts';
export * from '#/presentation/schema/index.ts';

// const exempleQCMSchema: SchemaDescriptions = {
//     title: 'exempleQCM',
//     description: 'Schema for creating, updating, and searching QCM records',
//     definitions: {
//         idQCM: { json: S.string().pattern('^[0-9]+$') },
//         title: { json: S.string().minLength(1).maxLength(255) },
//         description: { json: S.string().minLength(1).maxLength(255) },
//         minimumToPass: { json: S.string().minLength(1).maxLength(255) },
//         isDraft: { json: S.string().minLength(1).maxLength(255) },
//         questions: {
//             json: S.array().items(S.object().prop('test', S.string())),
//             parentOf: {
//                 id: { json: S.string().minLength(1).maxLength(255) },
//                 idCategory: { json: S.string().minLength(1).maxLength(255) },
//                 title: { json: S.string().minLength(1).maxLength(255) },
//                 description: { json: S.string().minLength(1).maxLength(255) },
//                 type: { json: S.string().minLength(1).maxLength(255) },
//                 points: { json: S.string().minLength(1).maxLength(255) },
//                 position: { json: S.string().minLength(1).maxLength(255) },
//                 propositions: { json: S.array().items(S.object().prop('test', S.string())),
//                     parentOf: {
//                         id: { json: S.string().minLength(1).maxLength(255) },
//                         text: { json: S.string().minLength(1).maxLength(255) },
//                         isCorrect: { json: S.string().minLength(1).maxLength(255)
//                         }
//                     }
//                 }
//             }
//         }
//     }
// };


// import { FactoryDatabase } from '#/infrastructure/database/index.ts';
// import { SwaggerScalarUiPlugin } from '#/presentation/http/index.ts';
// import { SwaggerPlugin } from './presentation/http/plugin/swagger.plugin.ts';
// import { ServerManager } from './presentation/http/serverManager.ts';


// await FactoryDatabase.register('auth_dev', 'mssql', {
//     databaseName: 'auth_dev',
//     host: 'dev-terra-mrx-db-sql-server.database.windows.net',
//     user: 'mrxsys',
//     password: 'Jazz5-Elixir1-Promoter8-Subsector8',
//     port: 1433
// });


// const serverManager = new ServerManager();

// await serverManager.addPlugins([
//     new SwaggerPlugin({
//         openapi: {
//             info: {
//                 title: 'Auth API',
//                 version: '1.0.0'
//             }
//         }
//     })
// ]);

// await serverManager.addRouter();

// await serverManager.addPlugin(
//     new SwaggerScalarUiPlugin({
//         theme: 'kepler'
//     })
// );

// await serverManager.start();

