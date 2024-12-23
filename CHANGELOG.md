# Changelog

## v1.43.2

[compare changes](https://github.com/Andesite-Lab/Core/compare/v1.43.1...v1.43.2)

## v1.43.1

[compare changes](https://github.com/Andesite-Lab/Core/compare/v1.43.0...v1.43.1)

### 📦 Build

- **📦:** Update npm ignore ([a206d361](https://github.com/Andesite-Lab/Core/commit/a206d361))
- **📦:** Bump node version to 23.5 and update dependencies ([5bbf8d3b](https://github.com/Andesite-Lab/Core/commit/5bbf8d3b))

### 🤖 CI

- **🤖:** Add workflow Pull Request Checker ([25140075](https://github.com/Andesite-Lab/Core/commit/25140075))
- **🤖:** Add workflow merge dev and main ([c9b7d092](https://github.com/Andesite-Lab/Core/commit/c9b7d092))

### ❤️ Contributors

- Ruby <necrelox@proton.me>

## [1.43.0](https://github.com/Andesite-Lab/Core/compare/v1.42.1...v1.43.0) (2024-12-05)


### Features

* add introspection to protected ([91519ee](https://github.com/Andesite-Lab/Core/commit/91519ee06d8057e93fbb1fc0ef2b2546c6af1ef0))

## [1.42.1](https://github.com/Andesite-Lab/Core/compare/v1.42.0...v1.42.1) (2024-12-04)


### Bug Fixes

* remove 'e' from domain ... ([1a79fbf](https://github.com/Andesite-Lab/Core/commit/1a79fbf4377182d3f0cedcb8710d530afd02a6e4))

## [1.42.0](https://github.com/Andesite-Lab/Core/compare/v1.41.1...v1.42.0) (2024-11-20)


### Features

* add $q for search occurence in all column (like elastic) ([29432b2](https://github.com/Andesite-Lab/Core/commit/29432b262699d5e8bed1df59b8ff8050f6766549))


### Build System

* update dependecies ([1f0d04a](https://github.com/Andesite-Lab/Core/commit/1f0d04a3efd8b254d666633a57ebbfe1faeb79f6))

## [1.41.1](https://github.com/Andesite-Lab/Core/compare/v1.41.0...v1.41.1) (2024-11-14)


### Bug Fixes

* correction export in package json ([58d9545](https://github.com/Andesite-Lab/Core/commit/58d9545abd466f82899acbc57588133217879616))

## [1.41.0](https://github.com/Andesite-Lab/Core/compare/v1.40.1...v1.41.0) (2024-11-14)


### Features

* add error when no search is send to delete (block delete all) ([980fd75](https://github.com/Andesite-Lab/Core/commit/980fd751e8adb0748c49ba988d00678598c443ae))
* add error when no search is send to update (block update all) ([89d5649](https://github.com/Andesite-Lab/Core/commit/89d5649e172c591b55c01925624844577797d60a))

## [1.40.1](https://github.com/Andesite-Lab/Core/compare/v1.40.0...v1.40.1) (2024-11-12)


### Code Refactoring

* remove intern barrel file and useless type ([f84024a](https://github.com/Andesite-Lab/Core/commit/f84024a429fc01c8ebccdcedbc7ca1dd1718bb73))


### Build System

* refactor build system with peerDeps, multi export and splitting ([20cb584](https://github.com/Andesite-Lab/Core/commit/20cb58486d9032fb214499668e81e4aa6e72ff0e))

## [1.40.0](https://github.com/Andesite-Lab/Core/compare/v1.39.1...v1.40.0) (2024-11-08)


### Features

* Prepare Search Model makes "AND" requests ([8e7517a](https://github.com/Andesite-Lab/Core/commit/8e7517a19a0779b2100129a4a6f364f529e45f7d))
* refacto match whereclause for date, and refacto complex queries ([469f252](https://github.com/Andesite-Lab/Core/commit/469f25297a0c4372c53954e64d39dbe83c2517d0))


### Build System

* correction npmignore ([0915871](https://github.com/Andesite-Lab/Core/commit/09158710241f8a9fa88690d745b93524e176a50d))
* update deps ([b670d4f](https://github.com/Andesite-Lab/Core/commit/b670d4f261feb61fbc6feef21b161ffcb07835f9))


### Styles

* disabled rules eslint ([4a42ed2](https://github.com/Andesite-Lab/Core/commit/4a42ed22cc5d4fb9ee6ad0febcc7ff485cc7a442))

## [1.39.1](https://github.com/Andesite-Lab/Core/compare/v1.39.0...v1.39.1) (2024-11-07)


### Styles

* correction eslint ([d9f15f2](https://github.com/Andesite-Lab/Core/commit/d9f15f27b2e9c6a82d186effa87821633e5dcac0))
* fix core with new eslint ([82e0e6b](https://github.com/Andesite-Lab/Core/commit/82e0e6bd4941aed71ed09971c5913849b09bc231))
* update eslint to new version ([7ec2f51](https://github.com/Andesite-Lab/Core/commit/7ec2f5147ca93424ac60be8cd534038c085be041))

## [1.39.0](https://github.com/Andesite-Lab/Core/compare/v1.38.0...v1.39.0) (2024-11-05)


### Features

* add Azure Factory + BlobServiceClient + ContainerClient ([9c12ebb](https://github.com/Andesite-Lab/Core/commit/9c12ebb58d9f9a88371d2c7664e339b3fcdbdd84))
* add checkBlobExist and getBlobInfo ([f14b038](https://github.com/Andesite-Lab/Core/commit/f14b038ac0bc54cbd31f9b95737f0ecdaa04e9f1))
* add plugin MultipartPlugin ([4dadc2c](https://github.com/Andesite-Lab/Core/commit/4dadc2c46df82896210e773463252e17d1070351))
* apply search to count total in find handler crud ([066af68](https://github.com/Andesite-Lab/Core/commit/066af68b552c2149bd462db87b98f110f68c9729))


### Code Refactoring

* clean whitespace + reorganise import ([c04de86](https://github.com/Andesite-Lab/Core/commit/c04de86edd826ab06ab1b6d890b566e13e0ea016))
* little improvement log and code ([d410484](https://github.com/Andesite-Lab/Core/commit/d410484ade72ae851a3cc6ea39e00917d82bcd2f))


### Build System

* update deps + add azure storage package ([88b7060](https://github.com/Andesite-Lab/Core/commit/88b70606f990e9681e6edef4bdef2e2c0dc8e6bd))


### Styles

* add semicolon ([cc9e213](https://github.com/Andesite-Lab/Core/commit/cc9e213c006ee70e6bafb00b6164d40d825dfe9f))

## [1.38.0](https://github.com/Andesite-Lab/Core/compare/v1.37.1...v1.38.0) (2024-10-16)


### Features

* handle driver mssql error ([42414c9](https://github.com/Andesite-Lab/Core/commit/42414c919a58c685527992d29f80af6847a950e1))

## [1.37.1](https://github.com/Andesite-Lab/Core/compare/v1.37.0...v1.37.1) (2024-10-15)


### Bug Fixes

* little correction scalar ui ([3795abb](https://github.com/Andesite-Lab/Core/commit/3795abb209e83c998130b5d919ef3c5a84453463))

## [1.37.0](https://github.com/Andesite-Lab/Core/compare/v1.36.2...v1.37.0) (2024-10-15)


### Features

* set coerce true, change whereclause schema, handle obj[] in req ([cec6c64](https://github.com/Andesite-Lab/Core/commit/cec6c64839a54733f380af1a81c3715df07dc25e))
* update SearchModel, Whereclause, ApplySearch ... ([74cf19d](https://github.com/Andesite-Lab/Core/commit/74cf19dcff2c00f345ca8d48b8a0f5c2f9168672))


### Bug Fixes

* correction default response if i18n not init ([279d05f](https://github.com/Andesite-Lab/Core/commit/279d05fb430c0a45371409796da03b8b3328af65))
* correction prepareSearchModel in request utils ([140dd5e](https://github.com/Andesite-Lab/Core/commit/140dd5e2a0fa363110cee4b0d42917d2ff65dac0))


### Code Refactoring

* little clean ([5a90cb7](https://github.com/Andesite-Lab/Core/commit/5a90cb78b60a0baae50ca6deae3510ae38b68ef2))


### Build System

* update deps && stop minify a package in back is useless ([71de55f](https://github.com/Andesite-Lab/Core/commit/71de55fac916f59fdb74f95a0942c08f16af52d4))

## [1.36.2](https://github.com/Andesite-Lab/Core/compare/v1.36.1...v1.36.2) (2024-10-07)


### Bug Fixes

* correction name (because bun bundler has no keepName like esbuild) ([7488bea](https://github.com/Andesite-Lab/Core/commit/7488bea9b2d14bfcc19f2932d8bee15ca7c55a81))

## [1.36.1](https://github.com/Andesite-Lab/Core/compare/v1.36.0...v1.36.1) (2024-10-04)


### Bug Fixes

* correction limit and set to 100 ([08104e7](https://github.com/Andesite-Lab/Core/commit/08104e7709dfaa0874984bcbf3dd54c5510b27bc))

## [1.36.0](https://github.com/Andesite-Lab/Core/compare/v1.35.0...v1.36.0) (2024-10-04)


### Features

* add default limit ([0318110](https://github.com/Andesite-Lab/Core/commit/03181106d40c2c6d8420ef9fd432917157d5add2))

## [1.35.0](https://github.com/Andesite-Lab/Core/compare/v1.34.1...v1.35.0) (2024-10-04)


### Features

* refacto, improvement, bun for build remove cli remove useless code ([f839724](https://github.com/Andesite-Lab/Core/commit/f839724028f8b8172ccca4c4891a34fadf89abfd))


### Build System

* update deps ([2a498d6](https://github.com/Andesite-Lab/Core/commit/2a498d6f3cf032b15812e8c3b660b6f729b3e429))


### Continuous Integration

* refacto to support bun ([40f77fc](https://github.com/Andesite-Lab/Core/commit/40f77fce322783c42bbde8deec01a9bb7733645a))

## [1.34.1](https://github.com/Andesite-Lab/Core/compare/v1.34.0...v1.34.1) (2024-09-18)


### Bug Fixes

* set content optional to sendResponse function ([b06524b](https://github.com/Andesite-Lab/Core/commit/b06524b1f08bfac8a3bcf65723141703080baf0e))

## [1.34.0](https://github.com/Andesite-Lab/Core/compare/v1.33.0...v1.34.0) (2024-09-18)


### Features

* add option to scalar ui ([7fa1ec9](https://github.com/Andesite-Lab/Core/commit/7fa1ec9954c4f17d18694f183788de0a4e9c5d13))
* add utils to presentation layer and update crud handler ([7d23bdb](https://github.com/Andesite-Lab/Core/commit/7d23bdb9a2e1b992959ee6916f628d31e53ebbb9))


### Bug Fixes

* check if object has no key and imrove type SearchModel ([1751b1f](https://github.com/Andesite-Lab/Core/commit/1751b1f04111af3d0db1cf050d0eee813f275ae8))


### Styles

* remove linebreak style ([2a84db9](https://github.com/Andesite-Lab/Core/commit/2a84db958b8d08d6bf8093da21b1e3caa5ed0d55))

## [1.33.0](https://github.com/Andesite-Lab/Core/compare/v1.32.0...v1.33.0) (2024-09-13)


### Features

* add K template + add table name in apply pagination method ([0c7f08f](https://github.com/Andesite-Lab/Core/commit/0c7f08f33cb01d392d09f34b2042007037d16df5))

## [1.32.0](https://github.com/Andesite-Lab/Core/compare/v1.31.0...v1.32.0) (2024-09-13)


### Features

* add hook pase query for validation + remove keyinclusion ([405fe41](https://github.com/Andesite-Lab/Core/commit/405fe411e6b06d5ce466128ba7ac29d0a88ee5b1))

## [1.31.0](https://github.com/Andesite-Lab/Core/compare/v1.30.1...v1.31.0) (2024-09-12)


### Features

* add specific option for each operations + default schema ([bdd343a](https://github.com/Andesite-Lab/Core/commit/bdd343aa38ddc9fa21f6a7dce120403150239b0c))
* change visibility of _applyPagination to protected ([bfc25d7](https://github.com/Andesite-Lab/Core/commit/bfc25d755245b054750949dad9abd27a80f68d02))


### Code Refactoring

* change .ts to .js ([0fe8097](https://github.com/Andesite-Lab/Core/commit/0fe8097a38b426aefd8163864f0186e06b34f4ee))

## [1.30.1](https://github.com/Andesite-Lab/Core/compare/v1.30.0...v1.30.1) (2024-09-11)


### Bug Fixes

* set databaseName in req headear to get  in handler ([d57c459](https://github.com/Andesite-Lab/Core/commit/d57c45981bc8a8f49ab3f922dd3db79056db5fe0))

## [1.30.0](https://github.com/Andesite-Lab/Core/compare/v1.29.2...v1.30.0) (2024-09-09)


### Features

* add new middleware to register dynamic db & improve abstract crud ([fb8d236](https://github.com/Andesite-Lab/Core/commit/fb8d23693bff221c856598ee12f05fa60960601a))


### Code Refactoring

* change import extension to .js ([7424d39](https://github.com/Andesite-Lab/Core/commit/7424d396e44dbbdf5bde8b6d284c212498dd27fd))


### Build System

* update deps ([3d52704](https://github.com/Andesite-Lab/Core/commit/3d52704e7920f085da7802c2bf376aab652e26d5))

## [1.29.2](https://github.com/Andesite-Lab/Core/compare/v1.29.1...v1.29.2) (2024-09-09)


### Bug Fixes

* remove withOptions function ([f946255](https://github.com/Andesite-Lab/Core/commit/f9462557b3ea60bafc649b6c2d757cf2906977d9))

## [1.29.1](https://github.com/Andesite-Lab/Core/compare/v1.29.0...v1.29.1) (2024-09-09)


### Bug Fixes

* correction export type ([eb7c619](https://github.com/Andesite-Lab/Core/commit/eb7c619d36e84aa61d6658f23f41477cde8326ba))

## [1.29.0](https://github.com/Andesite-Lab/Core/compare/v1.28.0...v1.29.0) (2024-09-09)


### Features

* export all fluent type ([a4df553](https://github.com/Andesite-Lab/Core/commit/a4df55338aa76d07dcc2b904da81b1ec883af268))

## [1.28.0](https://github.com/Andesite-Lab/Core/compare/v1.27.0...v1.28.0) (2024-08-30)


### Features

* Crud deleteOne and UpdateOne return one item not array of one item ([613d770](https://github.com/Andesite-Lab/Core/commit/613d7709efe24f80bd74ed60be4e164793d40e44))

## [1.27.0](https://github.com/Andesite-Lab/Core/compare/v1.26.0...v1.27.0) (2024-08-29)


### Features

* export JSONSchema type from fluent and FastifySchema ([4f3060e](https://github.com/Andesite-Lab/Core/commit/4f3060e2cb7567c11fa75bacf4beceb7f594f3f2))

## [1.26.0](https://github.com/Andesite-Lab/Core/compare/v1.25.0...v1.26.0) (2024-08-28)


### Features

* add type with next parameter ([18a4bd4](https://github.com/Andesite-Lab/Core/commit/18a4bd4e6697875354be7c914b14730a59e09ced))

## [1.25.0](https://github.com/Andesite-Lab/Core/compare/v1.24.2...v1.25.0) (2024-08-28)


### Features

* add WhereClauseSchema ([c0be214](https://github.com/Andesite-Lab/Core/commit/c0be2148d5f40fbddc48de317c9b750cf74e25b4))

## [1.24.2](https://github.com/Andesite-Lab/Core/compare/v1.24.1...v1.24.2) (2024-08-28)


### Documentation

* add interpolation comment ([37a6a8c](https://github.com/Andesite-Lab/Core/commit/37a6a8c876b070287e96fb4bcbae567fdeba0b66))

## [1.24.1](https://github.com/Andesite-Lab/Core/compare/v1.24.0...v1.24.1) (2024-08-28)


### Bug Fixes

* correction types export ([cba187f](https://github.com/Andesite-Lab/Core/commit/cba187f850caabd490fb3f2cb442fccf4a6efc34))

## [1.24.0](https://github.com/Andesite-Lab/Core/compare/v1.23.1...v1.24.0) (2024-08-28)


### Features

* readd cli ([0e707b2](https://github.com/Andesite-Lab/Core/commit/0e707b2f377cf945cdab4951be0baef3868cae38))


### Code Refactoring

* change to NodeNext ([601f95a](https://github.com/Andesite-Lab/Core/commit/601f95a8c2bdd1ac900bb3d0231872bf27e4c208))

## [1.23.1](https://github.com/Andesite-Lab/Core/compare/v1.23.0...v1.23.1) (2024-08-27)


### Continuous Integration

* fix github action for bun ([59022a7](https://github.com/Andesite-Lab/Core/commit/59022a7117cfcb91c1ca9f0ab07e8cb3b592bd9a))

## [1.23.0](https://github.com/Andesite-Lab/Core/compare/v1.22.5...v1.23.0) (2024-08-27)


### Features

* GLOB REFACTO, DELETE CLI, IMPROVEMENT, NEW FEATURES ([b620181](https://github.com/Andesite-Lab/Core/commit/b62018168b99820d3f508c56b01b0bb6a2712495))

## [1.22.5](https://github.com/Andesite-Lab/Core/compare/v1.22.4...v1.22.5) (2024-08-14)


### Documentation

* add comment on errors when interpolated ([e83e85a](https://github.com/Andesite-Lab/Core/commit/e83e85a8071bf1b25b8acb61a84c950a7e48ed3f))

## [1.22.4](https://github.com/Andesite-Lab/Core/compare/v1.22.3...v1.22.4) (2024-08-14)


### Bug Fixes

* change value of error for i18n ([610ca9c](https://github.com/Andesite-Lab/Core/commit/610ca9c50264dadc742b5876bba0e506c5ed1ce3))

## [1.22.3](https://github.com/Andesite-Lab/Core/compare/v1.22.2...v1.22.3) (2024-08-14)


### Code Refactoring

* merge all errorkeys + clean value... ([5a51e02](https://github.com/Andesite-Lab/Core/commit/5a51e02be1b7e173dc75141b7f9405857d104f0b))


### Build System

* update dependencies ([039b82c](https://github.com/Andesite-Lab/Core/commit/039b82c55252a33e91952268ba68b1bcccf61bcc))

## [1.22.2](https://github.com/Andesite-Lab/Core/compare/v1.22.1...v1.22.2) (2024-08-13)


### Bug Fixes

* correction handle BasaltError and AndesiteError ([c90e221](https://github.com/Andesite-Lab/Core/commit/c90e2214cf422cb31ef5d64c916501be525bb3d6))


### Build System

* update dependencies ([f12af2e](https://github.com/Andesite-Lab/Core/commit/f12af2e409283a21af04186a32eef60df52f5b07))


### Continuous Integration

* update workflow ([8476953](https://github.com/Andesite-Lab/Core/commit/84769533bd38c3fac4ccaa5effa6966613473e01))

## [1.22.1](https://github.com/Andesite-Lab/Core/compare/v1.22.0...v1.22.1) (2024-08-13)


### Code Refactoring

* reformat response ([8a40e87](https://github.com/Andesite-Lab/Core/commit/8a40e872d723b035b4fa753e97b176d1a38e2adf))

## [1.22.0](https://github.com/Andesite-Lab/Core/compare/v1.21.0...v1.22.0) (2024-08-13)


### Features

* add type HookHandlerDoneFunction ([cfa65a5](https://github.com/Andesite-Lab/Core/commit/cfa65a5c1fc4e9899db64339245d8be0f22744fc))

## [1.21.0](https://github.com/Andesite-Lab/Core/compare/v1.20.0...v1.21.0) (2024-08-07)


### Features

* add prepare command + add to template with type check ([008ff8c](https://github.com/Andesite-Lab/Core/commit/008ff8c24db5a7a53a695e45bbe27288a33ba8a9))

## [1.20.0](https://github.com/Andesite-Lab/Core/compare/v1.19.0...v1.20.0) (2024-08-07)


### Features

* add tsc --noEmit to template package json ([8c9d471](https://github.com/Andesite-Lab/Core/commit/8c9d47159d14d2cc5bcffb16d1581103568afdb7))


### Styles

* remove whitespace ([ad3b04f](https://github.com/Andesite-Lab/Core/commit/ad3b04f4df27d2e383f230b738ecd27fa8da3487))

## [1.19.0](https://github.com/Andesite-Lab/Core/compare/v1.18.0...v1.19.0) (2024-08-02)


### Features

* add TLS for register redis ([b475ae4](https://github.com/Andesite-Lab/Core/commit/b475ae48eb29c88c8162ccb9ec53620b8f136023))

## [1.18.0](https://github.com/Andesite-Lab/Core/compare/v1.17.1...v1.18.0) (2024-07-31)


### Features

* add FactoryStore, creator, abstract creator and clean .. ([e3aa1fc](https://github.com/Andesite-Lab/Core/commit/e3aa1fc679e6715294ad256b3f090998f15054c6))


### Build System

* add ioredis dependency ([2aaa46f](https://github.com/Andesite-Lab/Core/commit/2aaa46ff37bc8f90b4aa9007fac2fdbd62054d6a))

## [1.17.1](https://github.com/Andesite-Lab/Core/compare/v1.17.0...v1.17.1) (2024-07-31)


### Bug Fixes

* reAdd dirname util ([ebe02e9](https://github.com/Andesite-Lab/Core/commit/ebe02e968fec17c154ec18d329fcab3f14e8c7ae))

## [1.17.0](https://github.com/Andesite-Lab/Core/compare/v1.16.0...v1.17.0) (2024-07-31)


### Features

* add basalt-helper, remove all useless utils & handle BasaltError ([673eacc](https://github.com/Andesite-Lab/Core/commit/673eacc83f7c37332bec30dde7b45fd741753506))


### Build System

* update packages ([b16f3d1](https://github.com/Andesite-Lab/Core/commit/b16f3d1e8848ef5b482b863e9ab43591639e2f51))

## [1.16.0](https://github.com/Andesite-Lab/Core/compare/v1.15.0...v1.16.0) (2024-07-23)


### Features

* add _setErrorHandler ([dfbaedf](https://github.com/Andesite-Lab/Core/commit/dfbaedf2f001bf62738a13b9d4b6de155bd8d96c))
* add "Abstract"Creator for future factory ([39fe04b](https://github.com/Andesite-Lab/Core/commit/39fe04b5dcc626f0161d114c34bf2a1e2c457b2f))
* add "Concrete" Creator for Postgres ([7d19950](https://github.com/Andesite-Lab/Core/commit/7d199509b31636c00a33070f460a8b780a07a255))
* add "Concrete" Creator for SQLite ([0837805](https://github.com/Andesite-Lab/Core/commit/08378057cc7bbf7578b0d12d29a690dfa8e10913))
* add abstract router and features to server manager ([94a09c7](https://github.com/Andesite-Lab/Core/commit/94a09c7abdc315bf6415e713374a6bb1157a527d))
* add and remove dependencies for api project ([3a2b3c1](https://github.com/Andesite-Lab/Core/commit/3a2b3c132f76c29d2521485bf00031a814aaa523))
* add AndesiteFolder Service ([00d288f](https://github.com/Andesite-Lab/Core/commit/00d288f1926b1343fe4fdfc637fd8e4514f2b5fe))
* add build message ... etc ([90c2b2a](https://github.com/Andesite-Lab/Core/commit/90c2b2a489997828948f062e42c557d1117502e3))
* add class Path, File and Folder ([3fbce87](https://github.com/Andesite-Lab/Core/commit/3fbce8714f6e55d56c58a31cde8b6c4f1956935d))
* add dev command + improvement ([a99ea04](https://github.com/Andesite-Lab/Core/commit/a99ea0473aa2286dbfc9da06e31452386a2cf771))
* add enum for Infrastructure Database Error ([e2a9748](https://github.com/Andesite-Lab/Core/commit/e2a97488091e2beb097221004967e865a2844e67))
* add ErrorEntity + ErrorCommon ([ae2faa6](https://github.com/Andesite-Lab/Core/commit/ae2faa6d95a94d4e83043acebd6c7c3d974bd799))
* add FactoryDatabase ([88e1ecc](https://github.com/Andesite-Lab/Core/commit/88e1eccef6ae86a37463a71aa249e90e0a4fa195))
* add folderStructure for all project type ([0f854ab](https://github.com/Andesite-Lab/Core/commit/0f854ab04e99d9f3e6714498d33591f7fb646190))
* add generator + template + error ... ([3967ff3](https://github.com/Andesite-Lab/Core/commit/3967ff3b7f55f88c4d0564fe1b3f81f0aad06c5f))
* add hash tool ([4ea19e4](https://github.com/Andesite-Lab/Core/commit/4ea19e4cc07105bc5ab2b03cb05c518946f809cd))
* add Helmet plugin ([3d24fa0](https://github.com/Andesite-Lab/Core/commit/3d24fa0a4ca7864a793fd00691876f27a4e03a25))
* add I18n tools ([7944679](https://github.com/Andesite-Lab/Core/commit/79446796005dde91468009175eb7f9df2f5f3cf4))
* add interpolation and status code in response ([654512b](https://github.com/Andesite-Lab/Core/commit/654512b8d0da07d524c897fcaa926b7b105cfa6b))
* add isConnected method ([ce13690](https://github.com/Andesite-Lab/Core/commit/ce136903ce58208168d4eea57727114aeca1de2c))
* add language hook ([cfe42c9](https://github.com/Andesite-Lab/Core/commit/cfe42c974bb4df8454eced89ad834addb285e8ae))
* add main file to cli for later ([ef18d2a](https://github.com/Andesite-Lab/Core/commit/ef18d2a7b26f5103a7c0d6dc7b37745be059ace9))
* add Model class ([0fcccb7](https://github.com/Andesite-Lab/Core/commit/0fcccb79b9416c6e67b2bb40ab05a3a5de2354ab))
* add mssql type option ([1f5b978](https://github.com/Andesite-Lab/Core/commit/1f5b978a47fc8fec9b7830fbb6ae52b9ee4b31c9))
* add MSSQLCreator ([cf274ce](https://github.com/Andesite-Lab/Core/commit/cf274ce3830e1baa0da36e0edcf21ac264b620c8))
* add new errors key ([f06b224](https://github.com/Andesite-Lab/Core/commit/f06b22416b414b3860545da3f40d017cbe3356da))
* Add new files and update existing files ([04accbc](https://github.com/Andesite-Lab/Core/commit/04accbc3ce184d30cf285fa1c8072758086e4fa7))
* add new generator + errors + comments ([8188680](https://github.com/Andesite-Lab/Core/commit/8188680b9384aa9647ba572e7ab01103d00782cc))
* add option for swagger scalar ui ([6512536](https://github.com/Andesite-Lab/Core/commit/65125365cb3d9a9f91ad21fecb6cd61e7aa360d2))
* add package json user ([f367d74](https://github.com/Andesite-Lab/Core/commit/f367d747fafdf93a86632471000db0073f9a6dbe))
* add plugins + improvement of server .. ([52193ae](https://github.com/Andesite-Lab/Core/commit/52193aee992453676e8a8684cc265ab2dc9b6f59))
* add read yml conf + export write yml conf ([718d806](https://github.com/Andesite-Lab/Core/commit/718d806cd40b259dc176c3a90dba049e53eeed04))
* add schema folder ([e11cf80](https://github.com/Andesite-Lab/Core/commit/e11cf807a7e3f4678b9e97901a8924a160410ab9))
* add scripts ([c6ec0de](https://github.com/Andesite-Lab/Core/commit/c6ec0de02e6bb16306f85b696c5a28d0665f8a39))
* add server and logger hook + new dependencies ([20922c8](https://github.com/Andesite-Lab/Core/commit/20922c8922c5d8bc6b01566ebde61c4a3c8c5738))
* add SingletonManager ([d4dddfd](https://github.com/Andesite-Lab/Core/commit/d4dddfd6db4491eb2aa6bf719baa950c2ac4b810))
* add sleep utility ([dbf79e9](https://github.com/Andesite-Lab/Core/commit/dbf79e9f84e19ea9fac6a4abab9de908498d38f6))
* add spinner for init project ([7ea6fb7](https://github.com/Andesite-Lab/Core/commit/7ea6fb753c2788ad3f3954c801fa3e147603a758))
* add start command + add EnvironnementUser service ([d9050bb](https://github.com/Andesite-Lab/Core/commit/d9050bbfd465c4538fd1bf500102d49da3b767e5))
* add swagger plugin + improvement of server manager ([37c8fbe](https://github.com/Andesite-Lab/Core/commit/37c8fbe0635825100e3ed28c9d8d55ceb720ecc6))
* add templates + improvement + add config andesite yml + folder ... ([40cbb9d](https://github.com/Andesite-Lab/Core/commit/40cbb9d825701f3989042275a2e560ad2df4cc29))
* add theme temps ([cdf1f9d](https://github.com/Andesite-Lab/Core/commit/cdf1f9d64794d24b2640cc32433671e41e9c5f3f))
* add throwIfNoResult and throwIfQueryError ([9fecb65](https://github.com/Andesite-Lab/Core/commit/9fecb65b1a1001d6f7cdb6478b2d80004651d623))
* add TsConfigGenerator ([500c1be](https://github.com/Andesite-Lab/Core/commit/500c1bee3bbfc23e18d8fc5616494767bb695cad))
* add yaml utils ([92f458f](https://github.com/Andesite-Lab/Core/commit/92f458f2d3a1623a9ff59c6d124d52fb6fcd769f))
* change cjs to esm and prepare for new build systems ([c92f238](https://github.com/Andesite-Lab/Core/commit/c92f238b30b7baec3f1f8dd4e67beaa01a1a944d))
* export fastify type (reply, request and error) ([8ea8198](https://github.com/Andesite-Lab/Core/commit/8ea8198a0b604adbb712d7affdc6059757d83132))
* global improvement (Config/Service/Server/Repository..) ([68315ec](https://github.com/Andesite-Lab/Core/commit/68315ecd1cb1e0e61366fb3d9238bed14fd243ae))
* improve build system + rebuild .andesite folder ([cd8add8](https://github.com/Andesite-Lab/Core/commit/cd8add8f715732cb40ceff5680da2bab66c0a6cb))
* improve code + add deps  for all project type ([98f67f8](https://github.com/Andesite-Lab/Core/commit/98f67f8d354da637a0103d3db5eeac8526feeadb))
* improve error key + add PresentationHttpServerErrorKeys ([7e3dd84](https://github.com/Andesite-Lab/Core/commit/7e3dd84c746387bee5581e336d708fd82663e43e))
* improvement ([5efab0a](https://github.com/Andesite-Lab/Core/commit/5efab0a5e67c1ed1105bef2172b12f819c671d81))
* improvement + refactor + add build command ([7be9da5](https://github.com/Andesite-Lab/Core/commit/7be9da53882a3ef46620bb4ca9619b0536588ef3))
* improvement code comment + add features ([f59a957](https://github.com/Andesite-Lab/Core/commit/f59a957e55b633f181595db66a8905b255b8f0ef))
* improvement error handler + remove default plugin ([2f25cb0](https://github.com/Andesite-Lab/Core/commit/2f25cb03fc81a39204f0e1db2d5f1645ab2eae4c))
* improvement for esm ([37f9738](https://github.com/Andesite-Lab/Core/commit/37f9738d75e0f176e9d2a5273132656c13a70d2d))
* improvement of file class + move ... ([1913a81](https://github.com/Andesite-Lab/Core/commit/1913a8160ee229956a7e727984ab22cc48522ad8))
* new build system + global improvements ([be76918](https://github.com/Andesite-Lab/Core/commit/be76918a112080e157208ae815b1ac4980321f09))
* refacto factory kysely to knex, add new log system and more ([6d66967](https://github.com/Andesite-Lab/Core/commit/6d669679a33db53352449dbe322e979d6fecb89f))
* remove useless property for register in factory + rename + log ([e7b8e1b](https://github.com/Andesite-Lab/Core/commit/e7b8e1bc1b88a0779da9b012fcd5db8ccef95d6a))
* update template ([010e093](https://github.com/Andesite-Lab/Core/commit/010e0935117b9fe072c2486299a149b47ea338f7))


### Bug Fixes

* change OutputPath to OutputDir ([cd3ee45](https://github.com/Andesite-Lab/Core/commit/cd3ee458def2c77f94efbbd074ed175c91e2b6ad))
* change version of tsconfig extended ([d56375c](https://github.com/Andesite-Lab/Core/commit/d56375cf50aecce2793ba0e3eaf1e65362f76441))
* Correct error due to missing .env file ([3d395ea](https://github.com/Andesite-Lab/Core/commit/3d395ea0e58b6cc85af2c000680e20fcc1be4189))
* correction bad import ([c56d2f6](https://github.com/Andesite-Lab/Core/commit/c56d2f6488acefac05bade5026910a3639145800))
* correction build ([7dc29cf](https://github.com/Andesite-Lab/Core/commit/7dc29cf290d4c306e095855477b17b952aed0c72))
* correction of environnement user ([060d272](https://github.com/Andesite-Lab/Core/commit/060d27295f260326fb2a3bc955cb1c8dfde04292))
* correction of invalid path ([af47b82](https://github.com/Andesite-Lab/Core/commit/af47b825660e9623d259a9ec4350d666e59ff1ca))
* correction parameter of configure method (IPlugin) ([d0fe4c1](https://github.com/Andesite-Lab/Core/commit/d0fe4c1528d1a0ebe108f3649809f9955a689f83))
* correction path tsconfig ([3479f31](https://github.com/Andesite-Lab/Core/commit/3479f3110e2b1cd94cb90553fde46b2873f8c578))
* correction wrong version ([42a7e76](https://github.com/Andesite-Lab/Core/commit/42a7e7661040a057b73de5bd10a7d78de7d99eb0))
* export class SingletonManager ([6af26f6](https://github.com/Andesite-Lab/Core/commit/6af26f6a7e8cd157befa7b731a6111f08442a404))
* forgotten dependency additions ([59bf30e](https://github.com/Andesite-Lab/Core/commit/59bf30e7d4b086d51b8f725a213b39532384fc97))
* i have no enemies ([9600e8b](https://github.com/Andesite-Lab/Core/commit/9600e8b08c2fac72c81518e519e624a2ed9610d1))
* move Domain/Interface to DTO for clean arch ([059519d](https://github.com/Andesite-Lab/Core/commit/059519d90d31dd5bb8815adfe6ad4c5a66b344c9))
* move properties and remove old interface ([ba7efa4](https://github.com/Andesite-Lab/Core/commit/ba7efa4cd89a7c1a6409f6d523157ff9e5bf6541))
* remove duplicate folder 'Schema' in init ([cb08cbc](https://github.com/Andesite-Lab/Core/commit/cb08cbc7365ca8f6afee2c9624b35fd521532809))
* remove duplicate import ([35dd9f5](https://github.com/Andesite-Lab/Core/commit/35dd9f5b3918cabc63a0fa2fec61991c17f24f6b))
* remove old project type ([e6c8a53](https://github.com/Andesite-Lab/Core/commit/e6c8a53295ee772e9880c5305797419426092e1b))
* remove useless dependencies ([3929740](https://github.com/Andesite-Lab/Core/commit/392974067c60043d36e1523fba89dd55159f309a))
* remove useless extension ([ac09cb1](https://github.com/Andesite-Lab/Core/commit/ac09cb188ba16206d796ff20cc40330767b543a6))


### Code Refactoring

* : Refactor files ([1048431](https://github.com/Andesite-Lab/Core/commit/1048431227205b8166de7d054af3c987f83530db))
* change path ([e6ce6d8](https://github.com/Andesite-Lab/Core/commit/e6ce6d890b21e71afc5bc59acbe4d3e31c8b5b50))
* clean + refacto logger + update deps ([df486c9](https://github.com/Andesite-Lab/Core/commit/df486c9b5f3e9070e5d5e5f464993665aa0e4efa))
* global improvement + remove useless project type ([c7e15f1](https://github.com/Andesite-Lab/Core/commit/c7e15f16c2e37ecfb19170ec8778844b58f34585))
* global improves ([7a787dd](https://github.com/Andesite-Lab/Core/commit/7a787dd39d50b20030919ab43e061a879b6fd00a))
* improve constructor and start methode of servermanager with no parameter ([3c81d5c](https://github.com/Andesite-Lab/Core/commit/3c81d5ccfb10a7b5c5322f48acf74bc6637327c8))
* improvement architecture ([8ad1a75](https://github.com/Andesite-Lab/Core/commit/8ad1a7536d072cdf70a131b41b068ee9e42ff724))
* improvement code ([e42397d](https://github.com/Andesite-Lab/Core/commit/e42397d4430e0e53fc2207edf16e129f28b2b6cb))
* improvement of code ([298565e](https://github.com/Andesite-Lab/Core/commit/298565e94f49417357308f2b761ca7562ce7efb2))
* improvement of template folder structure ([6726c2a](https://github.com/Andesite-Lab/Core/commit/6726c2a79812bbe5763655cea7623056658b7927))
* imrpovement of factory ([6524809](https://github.com/Andesite-Lab/Core/commit/652480994e4379bbff02897871e2d22769a7ce3b))
* juste order import + little modif for the futur ([abfd2eb](https://github.com/Andesite-Lab/Core/commit/abfd2eb3e07a82ee35478bea6583ec4c988aecad))
* move buildFolderStructureByObject to Common Util ([f88d520](https://github.com/Andesite-Lab/Core/commit/f88d520bcd27bd1c4cf95ebb03004c2ed5ba3813))
* remove unused import ([8775095](https://github.com/Andesite-Lab/Core/commit/8775095176818fe4a62c0a942b97eab7575f1465))
* set params to readonly + update doc ([5bc8227](https://github.com/Andesite-Lab/Core/commit/5bc8227c851db16810e7baf55dc7a17192c29af0))
* update basalt logger and refacto server and hook ([cd087ec](https://github.com/Andesite-Lab/Core/commit/cd087ec9076142df18e62aca07fc77341c087dbb))


### Build System

* Add dependencies commander, kysely, and source-map-support ([c0e946e](https://github.com/Andesite-Lab/Core/commit/c0e946e16eb144d0e8bae1d39f9d037831da8e49))
* add handlebars dependances ([fe4f345](https://github.com/Andesite-Lab/Core/commit/fe4f3459f671870e492305e79bb2ab62372583e0))
* check if tsconfig.tsbuildinfo before delete him ([cf8dfa4](https://github.com/Andesite-Lab/Core/commit/cf8dfa43004a925fc6819657eb11e316708c17b4))
* downgrade packages tedious for kysely compatibility ([2d9c41c](https://github.com/Andesite-Lab/Core/commit/2d9c41ccf5a08344b38df0e42c18149bd3c4c82b))
* exlude all index.ts ([f50a72a](https://github.com/Andesite-Lab/Core/commit/f50a72a6bac84d714503b64c9b99722ef51a8446))
* fix tsconfig to extend tsconfig 22 ([a993104](https://github.com/Andesite-Lab/Core/commit/a993104ccee3dd1df0ba1800942155be53a8c825))
* improvement build env ([b633881](https://github.com/Andesite-Lab/Core/commit/b6338811c230bf9da09eda1f55b1769557fb6173))
* improvement build environnement + simplify ([658b063](https://github.com/Andesite-Lab/Core/commit/658b0632538dfa241e31ac96db2a5a0cbc1cf258))
* improvement of environnement ([0162fe3](https://github.com/Andesite-Lab/Core/commit/0162fe33839f15d883a11f20a1090b593fd5b512))
* setup build environments ([9045b1f](https://github.com/Andesite-Lab/Core/commit/9045b1f123788e1cf7d740145a37ef8e4cb69543))
* Update .npmignore, .gitignore, .eslintrc, and package.json ([5b701ba](https://github.com/Andesite-Lab/Core/commit/5b701bacb0dc69012cf997bbeaf6b569949b17ad))
* update dependencies ([312e81f](https://github.com/Andesite-Lab/Core/commit/312e81fff12a9d107a3a572ba79265fb8431ddd6))
* update dependencies ([280d7a3](https://github.com/Andesite-Lab/Core/commit/280d7a33addd8c2cf5ae72afe07c14d13ce2cc3b))
* update dependencies ([7ee76d2](https://github.com/Andesite-Lab/Core/commit/7ee76d2ad5630b2279a8e4fef41f962ae9ffc593))
* update dependencies ([f31b8bf](https://github.com/Andesite-Lab/Core/commit/f31b8bfa3700484da593d428ca09bc6b661b5b52))
* Update dependencies in package.json and fix eslint rules ([ea2d2e1](https://github.com/Andesite-Lab/Core/commit/ea2d2e169790888650b76306dc214caf729a8303))
* update deps ([a5106d4](https://github.com/Andesite-Lab/Core/commit/a5106d41238d91f34d04141bade3f9152274575b))
* Update Node version to 22.1.0 in .nvmrc + update packages ([03f3d85](https://github.com/Andesite-Lab/Core/commit/03f3d8525556c7d0fedf87987d73cf5ca95ac428))
* update nvmrc and dependencies ([a23fe49](https://github.com/Andesite-Lab/Core/commit/a23fe4975a6b3db09fd653f8a136b5656fd299c6))
* update package ([bb6a53d](https://github.com/Andesite-Lab/Core/commit/bb6a53d76e364d6f6c5b0d5e1d13099f50391897))
* update packages ([7b041e2](https://github.com/Andesite-Lab/Core/commit/7b041e2d1dc7f813f2346389e95e02f9337283fb))


### Tests

* add test for ErrorCommon ([5b4c92a](https://github.com/Andesite-Lab/Core/commit/5b4c92a8d85cf5a15f195f83e33cb4a633a98cef))
* add tests for ErrorEntity ([956ff73](https://github.com/Andesite-Lab/Core/commit/956ff73a024f64068beb59f8d7184c096286126e))
* add unit test for hash ([e551e2d](https://github.com/Andesite-Lab/Core/commit/e551e2d043698c4b73f252ebaa97c4d9b86bf8b5))
* add unit tests ([e30f312](https://github.com/Andesite-Lab/Core/commit/e30f312bd5146fd58bb91a264048a7d1357257a7))
* Fix I18n error messages and add tests ([0578c14](https://github.com/Andesite-Lab/Core/commit/0578c1459b85ce03b78c5ba194f2eebacba6b4b9))
* fix test for FolderStructure ([513995c](https://github.com/Andesite-Lab/Core/commit/513995c38be5692ecdc81f1bd2960fbcb9d3103d))
* remove old tests ([0efa873](https://github.com/Andesite-Lab/Core/commit/0efa873781be158f319f475459d2655eb45a5f9c))
* tests correction ([610b2f9](https://github.com/Andesite-Lab/Core/commit/610b2f957324dd296f879cf362fd489031eb723e))


### Continuous Integration

* add workflows ([f40049c](https://github.com/Andesite-Lab/Core/commit/f40049c502a0279243aa0def69c48062e12225a9))
* delete coverage workflow for the moment and update node version ([c425a6d](https://github.com/Andesite-Lab/Core/commit/c425a6da996d96db616fab0907394809f4625496))
* remove useless command ([3072b0d](https://github.com/Andesite-Lab/Core/commit/3072b0da462e69256c70b97f751f4aeb2a40bed7))
* update command build in workflow ([3fd2a08](https://github.com/Andesite-Lab/Core/commit/3fd2a08cc69f6bcdff410db13e42b851456b1e88))
* update github action release ([c837fdc](https://github.com/Andesite-Lab/Core/commit/c837fdcae6bd42041463a5cf1d2622c5858f3ad1))


### Documentation

* comment mssql creator ([ed80cd6](https://github.com/Andesite-Lab/Core/commit/ed80cd6bcdc451f7c90f452447ce7f5bf21aad7c))
* improvement of comment ([765e630](https://github.com/Andesite-Lab/Core/commit/765e630c1bd9ddf5d984c230c44e700d96320160))
* improvement of comments ([fc7e126](https://github.com/Andesite-Lab/Core/commit/fc7e1268192e66fd5713128089d6f3d5bd1a2160))
* remove useless comment ([1e63758](https://github.com/Andesite-Lab/Core/commit/1e6375871fe4d192ce8fe29328da78d97715e4b4))
* update commands ([dc68720](https://github.com/Andesite-Lab/Core/commit/dc6872029a8d4f6fb5245054359d9ea3611e8afa))
* update comments ([204838c](https://github.com/Andesite-Lab/Core/commit/204838cd11d4d401eb50b4959b2fc59e6c938859))


### Miscellaneous Chores

* **main:** release 1.0.0 ([fec2d2f](https://github.com/Andesite-Lab/Core/commit/fec2d2f520f0cecd8bfaa4a64525cc23177c518c))
* **main:** release 1.0.1 ([beb8291](https://github.com/Andesite-Lab/Core/commit/beb8291f9318dbbb94fe3b9bbd755bc18c7de8be))
* **main:** release 1.1.0 ([56d1fb8](https://github.com/Andesite-Lab/Core/commit/56d1fb8271a6acec64f5cd183f140e0d80fef671))
* **main:** release 1.10.0 ([bc195ec](https://github.com/Andesite-Lab/Core/commit/bc195eca67e270adbb9a6896581c8602f15e8565))
* **main:** release 1.11.0 ([831737d](https://github.com/Andesite-Lab/Core/commit/831737de93c06f9b4410a40df96902cc87461899))
* **main:** release 1.12.0 ([cb95b8e](https://github.com/Andesite-Lab/Core/commit/cb95b8ed352c6d9cc1018c15819afaae7a8fc1a3))
* **main:** release 1.12.1 ([af15684](https://github.com/Andesite-Lab/Core/commit/af1568483b472dc1e046cff9bd10c4d27b316231))
* **main:** release 1.13.0 ([b5e9092](https://github.com/Andesite-Lab/Core/commit/b5e909226f20248710b148cc46f997f427645aa9))
* **main:** release 1.14.0 ([c6b974d](https://github.com/Andesite-Lab/Core/commit/c6b974d6f66bca8f6ad4a8fc5cbbaa7d09d9c9f0))
* **main:** release 1.14.1 ([69fa47a](https://github.com/Andesite-Lab/Core/commit/69fa47adc9a6fabbce94dc8ab1f425ba96ae44e9))
* **main:** release 1.15.0 ([043a3cc](https://github.com/Andesite-Lab/Core/commit/043a3cc4a6cf21a900bbb25e9e0cafb0666236d5))
* **main:** release 1.2.0 ([3158510](https://github.com/Andesite-Lab/Core/commit/315851037434250836f26456ee6ef8ba7d3b3186))
* **main:** release 1.3.0 ([2cfcd45](https://github.com/Andesite-Lab/Core/commit/2cfcd450a719f2ea090b552155487e7352cce7c5))
* **main:** release 1.3.1 ([510705e](https://github.com/Andesite-Lab/Core/commit/510705eb9bdb786452125407fc8beaad64c25177))
* **main:** release 1.3.2 ([8e22639](https://github.com/Andesite-Lab/Core/commit/8e226392f1032d24251648521579de0428edc6a1))
* **main:** release 1.3.3 ([5de6e8b](https://github.com/Andesite-Lab/Core/commit/5de6e8b68febdd8f766a1df3637bcd9533d090c3))
* **main:** release 1.4.0 ([a38be76](https://github.com/Andesite-Lab/Core/commit/a38be76592a6a20da9449a308f759e8de86be7ce))
* **main:** release 1.4.1 ([6fe3e80](https://github.com/Andesite-Lab/Core/commit/6fe3e80a8138d61f8e5536e73f2bc3f6825cdd45))
* **main:** release 1.4.2 ([18a1fcc](https://github.com/Andesite-Lab/Core/commit/18a1fcc3f81272151c231e945db93fedaac3841f))
* **main:** release 1.5.0 ([cacdc83](https://github.com/Andesite-Lab/Core/commit/cacdc836e5f8c0d5a607049d9a6c8655ae99132f))
* **main:** release 1.5.1 ([7660732](https://github.com/Andesite-Lab/Core/commit/766073220ff2822855ca382936e62fd0604c09ca))
* **main:** release 1.6.0 ([f74f1a7](https://github.com/Andesite-Lab/Core/commit/f74f1a7f4d51a8237bda432f0bdd2c3b7be66931))
* **main:** release 1.6.1 ([698e29e](https://github.com/Andesite-Lab/Core/commit/698e29e7edcf4cc92cff976fe4a5c5c33a459214))
* **main:** release 1.6.2 ([3c981a4](https://github.com/Andesite-Lab/Core/commit/3c981a4c374cc8412d6e24e73da7ae47d1197595))
* **main:** release 1.7.0 ([ccb9e21](https://github.com/Andesite-Lab/Core/commit/ccb9e211adaae721763397188f5982b81e7e2dff))
* **main:** release 1.8.0 ([a16f612](https://github.com/Andesite-Lab/Core/commit/a16f612fe738fc63c09ed6e6e2d15516770f6071))
* **main:** release 1.8.1 ([0774228](https://github.com/Andesite-Lab/Core/commit/0774228cf28063a470f5573bb653b2acfec1364d))
* **main:** release 1.8.2 ([4968028](https://github.com/Andesite-Lab/Core/commit/4968028a1ccedc24a9ff0f638892a785e400f58a))
* **main:** release 1.8.3 ([53b2e81](https://github.com/Andesite-Lab/Core/commit/53b2e8189360c8e9a429a5757851b2fd91fe0f10))
* **main:** release 1.9.0 ([57790e7](https://github.com/Andesite-Lab/Core/commit/57790e7877f287170aa661480076451ba274ccca))
* **main:** release 1.9.1 ([0f52659](https://github.com/Andesite-Lab/Core/commit/0f526595710377ae906aeb804a1fa9472aa7f81b))


### Styles

* allow 5 paramaters ([7621094](https://github.com/Andesite-Lab/Core/commit/7621094006d2a18d865ee5ae84cb478427163632))
* allow Function type + update indent to 2 spaces ([5a76056](https://github.com/Andesite-Lab/Core/commit/5a76056abbe4fa6d2b540df0fae8f7bf455c9baa))
* remove useless comment ([8fc74c3](https://github.com/Andesite-Lab/Core/commit/8fc74c37edcd3580fbade2e3a118266f1cb1fe66))
* update rule ([e9d3eb9](https://github.com/Andesite-Lab/Core/commit/e9d3eb9f9e8f4b78ee992190b28545d626688c59))

## [1.15.0](https://github.com/Andesite-Lab/Core/compare/v1.14.1...v1.15.0) (2024-07-23)


### Features

* add interpolation and status code in response ([654512b](https://github.com/Andesite-Lab/Core/commit/654512b8d0da07d524c897fcaa926b7b105cfa6b))

## [1.14.1](https://github.com/Andesite-Lab/Core/compare/v1.14.0...v1.14.1) (2024-07-23)


### Bug Fixes

* export class SingletonManager ([6af26f6](https://github.com/Andesite-Lab/Core/commit/6af26f6a7e8cd157befa7b731a6111f08442a404))

## [1.14.0](https://github.com/Andesite-Lab/Core/compare/v1.13.0...v1.14.0) (2024-07-23)


### Features

* add SingletonManager ([d4dddfd](https://github.com/Andesite-Lab/Core/commit/d4dddfd6db4491eb2aa6bf719baa950c2ac4b810))


### Code Refactoring

* global improves ([7a787dd](https://github.com/Andesite-Lab/Core/commit/7a787dd39d50b20030919ab43e061a879b6fd00a))


### Build System

* update nvmrc and dependencies ([a23fe49](https://github.com/Andesite-Lab/Core/commit/a23fe4975a6b3db09fd653f8a136b5656fd299c6))


### Styles

* allow Function type + update indent to 2 spaces ([5a76056](https://github.com/Andesite-Lab/Core/commit/5a76056abbe4fa6d2b540df0fae8f7bf455c9baa))

## [1.13.0](https://github.com/Andesite-Lab/Core/compare/v1.12.1...v1.13.0) (2024-07-17)


### Features

* add throwIfNoResult and throwIfQueryError ([9fecb65](https://github.com/Andesite-Lab/Core/commit/9fecb65b1a1001d6f7cdb6478b2d80004651d623))
* global improvement (Config/Service/Server/Repository..) ([68315ec](https://github.com/Andesite-Lab/Core/commit/68315ecd1cb1e0e61366fb3d9238bed14fd243ae))
* improvement error handler + remove default plugin ([2f25cb0](https://github.com/Andesite-Lab/Core/commit/2f25cb03fc81a39204f0e1db2d5f1645ab2eae4c))
* remove useless property for register in factory + rename + log ([e7b8e1b](https://github.com/Andesite-Lab/Core/commit/e7b8e1bc1b88a0779da9b012fcd5db8ccef95d6a))


### Bug Fixes

* correction bad import ([c56d2f6](https://github.com/Andesite-Lab/Core/commit/c56d2f6488acefac05bade5026910a3639145800))


### Code Refactoring

* improvement code ([e42397d](https://github.com/Andesite-Lab/Core/commit/e42397d4430e0e53fc2207edf16e129f28b2b6cb))
* remove unused import ([8775095](https://github.com/Andesite-Lab/Core/commit/8775095176818fe4a62c0a942b97eab7575f1465))


### Build System

* update dependencies ([312e81f](https://github.com/Andesite-Lab/Core/commit/312e81fff12a9d107a3a572ba79265fb8431ddd6))
* update dependencies ([280d7a3](https://github.com/Andesite-Lab/Core/commit/280d7a33addd8c2cf5ae72afe07c14d13ce2cc3b))


### Styles

* allow 5 paramaters ([7621094](https://github.com/Andesite-Lab/Core/commit/7621094006d2a18d865ee5ae84cb478427163632))

## [1.12.1](https://github.com/Andesite-Lab/Core/compare/v1.12.0...v1.12.1) (2024-07-09)


### Bug Fixes

* correction build ([7dc29cf](https://github.com/Andesite-Lab/Core/commit/7dc29cf290d4c306e095855477b17b952aed0c72))

## [1.12.0](https://github.com/Andesite-Lab/Core/compare/v1.11.0...v1.12.0) (2024-07-09)


### Features

* add Model class ([0fcccb7](https://github.com/Andesite-Lab/Core/commit/0fcccb79b9416c6e67b2bb40ab05a3a5de2354ab))
* improve build system + rebuild .andesite folder ([cd8add8](https://github.com/Andesite-Lab/Core/commit/cd8add8f715732cb40ceff5680da2bab66c0a6cb))


### Code Refactoring

* improvement of code ([298565e](https://github.com/Andesite-Lab/Core/commit/298565e94f49417357308f2b761ca7562ce7efb2))
* imrpovement of factory ([6524809](https://github.com/Andesite-Lab/Core/commit/652480994e4379bbff02897871e2d22769a7ce3b))

## [1.11.0](https://github.com/Andesite-Lab/Core/compare/v1.10.0...v1.11.0) (2024-07-02)


### Features

* add language hook ([cfe42c9](https://github.com/Andesite-Lab/Core/commit/cfe42c974bb4df8454eced89ad834addb285e8ae))

## [1.10.0](https://github.com/Andesite-Lab/Core/compare/v1.9.1...v1.10.0) (2024-07-02)


### Features

* export fastify type (reply, request and error) ([8ea8198](https://github.com/Andesite-Lab/Core/commit/8ea8198a0b604adbb712d7affdc6059757d83132))

## [1.9.1](https://github.com/Andesite-Lab/Core/compare/v1.9.0...v1.9.1) (2024-07-02)


### Bug Fixes

* correction of environnement user ([060d272](https://github.com/Andesite-Lab/Core/commit/060d27295f260326fb2a3bc955cb1c8dfde04292))

## [1.9.0](https://github.com/Andesite-Lab/Core/compare/v1.8.3...v1.9.0) (2024-07-02)


### Features

* add package json user ([f367d74](https://github.com/Andesite-Lab/Core/commit/f367d747fafdf93a86632471000db0073f9a6dbe))


### Build System

* update dependencies ([7ee76d2](https://github.com/Andesite-Lab/Core/commit/7ee76d2ad5630b2279a8e4fef41f962ae9ffc593))

## [1.8.3](https://github.com/Andesite-Lab/Core/compare/v1.8.2...v1.8.3) (2024-07-02)


### Bug Fixes

* remove duplicate folder 'Schema' in init ([cb08cbc](https://github.com/Andesite-Lab/Core/commit/cb08cbc7365ca8f6afee2c9624b35fd521532809))

## [1.8.2](https://github.com/Andesite-Lab/Core/compare/v1.8.1...v1.8.2) (2024-07-02)


### Code Refactoring

* improve constructor and start methode of servermanager with no parameter ([3c81d5c](https://github.com/Andesite-Lab/Core/commit/3c81d5ccfb10a7b5c5322f48acf74bc6637327c8))

## [1.8.1](https://github.com/Andesite-Lab/Core/compare/v1.8.0...v1.8.1) (2024-07-02)


### Bug Fixes

* Correct error due to missing .env file ([3d395ea](https://github.com/Andesite-Lab/Core/commit/3d395ea0e58b6cc85af2c000680e20fcc1be4189))

## [1.8.0](https://github.com/Andesite-Lab/Core/compare/v1.7.0...v1.8.0) (2024-07-01)


### Features

* improvement for esm ([37f9738](https://github.com/Andesite-Lab/Core/commit/37f9738d75e0f176e9d2a5273132656c13a70d2d))
* improvement of file class + move ... ([1913a81](https://github.com/Andesite-Lab/Core/commit/1913a8160ee229956a7e727984ab22cc48522ad8))


### Bug Fixes

* correction wrong version ([42a7e76](https://github.com/Andesite-Lab/Core/commit/42a7e7661040a057b73de5bd10a7d78de7d99eb0))

## [1.7.0](https://github.com/Andesite-Lab/Core/compare/v1.6.2...v1.7.0) (2024-07-01)


### Features

* refacto factory kysely to knex, add new log system and more ([6d66967](https://github.com/Andesite-Lab/Core/commit/6d669679a33db53352449dbe322e979d6fecb89f))


### Code Refactoring

* clean + refacto logger + update deps ([df486c9](https://github.com/Andesite-Lab/Core/commit/df486c9b5f3e9070e5d5e5f464993665aa0e4efa))
* update basalt logger and refacto server and hook ([cd087ec](https://github.com/Andesite-Lab/Core/commit/cd087ec9076142df18e62aca07fc77341c087dbb))

## [1.6.2](https://github.com/Andesite-Lab/Core/compare/v1.6.1...v1.6.2) (2024-06-27)


### Bug Fixes

* remove useless extension ([ac09cb1](https://github.com/Andesite-Lab/Core/commit/ac09cb188ba16206d796ff20cc40330767b543a6))

## [1.6.1](https://github.com/Andesite-Lab/Core/compare/v1.6.0...v1.6.1) (2024-06-27)


### Bug Fixes

* remove duplicate import ([35dd9f5](https://github.com/Andesite-Lab/Core/commit/35dd9f5b3918cabc63a0fa2fec61991c17f24f6b))

## [1.6.0](https://github.com/Andesite-Lab/Core/compare/v1.5.1...v1.6.0) (2024-06-27)


### Features

* add mssql type option ([1f5b978](https://github.com/Andesite-Lab/Core/commit/1f5b978a47fc8fec9b7830fbb6ae52b9ee4b31c9))
* change cjs to esm and prepare for new build systems ([c92f238](https://github.com/Andesite-Lab/Core/commit/c92f238b30b7baec3f1f8dd4e67beaa01a1a944d))
* new build system + global improvements ([be76918](https://github.com/Andesite-Lab/Core/commit/be76918a112080e157208ae815b1ac4980321f09))

## [1.5.1](https://github.com/Andesite-Lab/Core/compare/v1.5.0...v1.5.1) (2024-06-24)


### Build System

* update dependencies ([f31b8bf](https://github.com/Andesite-Lab/Core/commit/f31b8bfa3700484da593d428ca09bc6b661b5b52))

## [1.5.0](https://github.com/Andesite-Lab/Core/compare/v1.4.2...v1.5.0) (2024-06-24)


### Features

* improvement ([5efab0a](https://github.com/Andesite-Lab/Core/commit/5efab0a5e67c1ed1105bef2172b12f819c671d81))

## [1.4.2](https://github.com/Andesite-Lab/Core/compare/v1.4.1...v1.4.2) (2024-06-18)


### Bug Fixes

* correction parameter of configure method (IPlugin) ([d0fe4c1](https://github.com/Andesite-Lab/Core/commit/d0fe4c1528d1a0ebe108f3649809f9955a689f83))

## [1.4.1](https://github.com/Andesite-Lab/Core/compare/v1.4.0...v1.4.1) (2024-06-18)


### Continuous Integration

* update github action release ([c837fdc](https://github.com/Andesite-Lab/Core/commit/c837fdcae6bd42041463a5cf1d2622c5858f3ad1))

## [1.4.0](https://github.com/Andesite-Lab/Core/compare/v1.3.3...v1.4.0) (2024-06-18)


### Features

* add _setErrorHandler ([dfbaedf](https://github.com/Andesite-Lab/Core/commit/dfbaedf2f001bf62738a13b9d4b6de155bd8d96c))
* add abstract router and features to server manager ([94a09c7](https://github.com/Andesite-Lab/Core/commit/94a09c7abdc315bf6415e713374a6bb1157a527d))
* add class Path, File and Folder ([3fbce87](https://github.com/Andesite-Lab/Core/commit/3fbce8714f6e55d56c58a31cde8b6c4f1956935d))
* add Helmet plugin ([3d24fa0](https://github.com/Andesite-Lab/Core/commit/3d24fa0a4ca7864a793fd00691876f27a4e03a25))
* add new errors key ([f06b224](https://github.com/Andesite-Lab/Core/commit/f06b22416b414b3860545da3f40d017cbe3356da))
* add option for swagger scalar ui ([6512536](https://github.com/Andesite-Lab/Core/commit/65125365cb3d9a9f91ad21fecb6cd61e7aa360d2))
* add plugins + improvement of server .. ([52193ae](https://github.com/Andesite-Lab/Core/commit/52193aee992453676e8a8684cc265ab2dc9b6f59))
* add schema folder ([e11cf80](https://github.com/Andesite-Lab/Core/commit/e11cf807a7e3f4678b9e97901a8924a160410ab9))
* add server and logger hook + new dependencies ([20922c8](https://github.com/Andesite-Lab/Core/commit/20922c8922c5d8bc6b01566ebde61c4a3c8c5738))
* add swagger plugin + improvement of server manager ([37c8fbe](https://github.com/Andesite-Lab/Core/commit/37c8fbe0635825100e3ed28c9d8d55ceb720ecc6))
* add theme temps ([cdf1f9d](https://github.com/Andesite-Lab/Core/commit/cdf1f9d64794d24b2640cc32433671e41e9c5f3f))
* improve error key + add PresentationHttpServerErrorKeys ([7e3dd84](https://github.com/Andesite-Lab/Core/commit/7e3dd84c746387bee5581e336d708fd82663e43e))
* improvement code comment + add features ([f59a957](https://github.com/Andesite-Lab/Core/commit/f59a957e55b633f181595db66a8905b255b8f0ef))


### Bug Fixes

* move properties and remove old interface ([ba7efa4](https://github.com/Andesite-Lab/Core/commit/ba7efa4cd89a7c1a6409f6d523157ff9e5bf6541))
* remove old project type ([e6c8a53](https://github.com/Andesite-Lab/Core/commit/e6c8a53295ee772e9880c5305797419426092e1b))


### Build System

* update package ([bb6a53d](https://github.com/Andesite-Lab/Core/commit/bb6a53d76e364d6f6c5b0d5e1d13099f50391897))


### Tests

* remove old tests ([0efa873](https://github.com/Andesite-Lab/Core/commit/0efa873781be158f319f475459d2655eb45a5f9c))


### Documentation

* improvement of comment ([765e630](https://github.com/Andesite-Lab/Core/commit/765e630c1bd9ddf5d984c230c44e700d96320160))


### Styles

* remove useless comment ([8fc74c3](https://github.com/Andesite-Lab/Core/commit/8fc74c37edcd3580fbade2e3a118266f1cb1fe66))

## [1.3.3](https://github.com/Andesite-Lab/Core/compare/v1.3.2...v1.3.3) (2024-06-02)


### Code Refactoring

* global improvement + remove useless project type ([c7e15f1](https://github.com/Andesite-Lab/Core/commit/c7e15f16c2e37ecfb19170ec8778844b58f34585))


### Build System

* update deps ([a5106d4](https://github.com/Andesite-Lab/Core/commit/a5106d41238d91f34d04141bade3f9152274575b))

## [1.3.2](https://github.com/Andesite-Lab/Core/compare/v1.3.1...v1.3.2) (2024-05-16)


### Bug Fixes

* correction path tsconfig ([3479f31](https://github.com/Andesite-Lab/Core/commit/3479f3110e2b1cd94cb90553fde46b2873f8c578))

## [1.3.1](https://github.com/Andesite-Lab/Core/compare/v1.3.0...v1.3.1) (2024-05-15)


### Build System

* exlude all index.ts ([f50a72a](https://github.com/Andesite-Lab/Core/commit/f50a72a6bac84d714503b64c9b99722ef51a8446))

## [1.3.0](https://github.com/Andesite-Lab/Core/compare/v1.2.0...v1.3.0) (2024-05-15)


### Features

* add AndesiteFolder Service ([00d288f](https://github.com/Andesite-Lab/Core/commit/00d288f1926b1343fe4fdfc637fd8e4514f2b5fe))
* add build message ... etc ([90c2b2a](https://github.com/Andesite-Lab/Core/commit/90c2b2a489997828948f062e42c557d1117502e3))
* add dev command + improvement ([a99ea04](https://github.com/Andesite-Lab/Core/commit/a99ea0473aa2286dbfc9da06e31452386a2cf771))
* add MSSQLCreator ([cf274ce](https://github.com/Andesite-Lab/Core/commit/cf274ce3830e1baa0da36e0edcf21ac264b620c8))
* add read yml conf + export write yml conf ([718d806](https://github.com/Andesite-Lab/Core/commit/718d806cd40b259dc176c3a90dba049e53eeed04))
* add sleep utility ([dbf79e9](https://github.com/Andesite-Lab/Core/commit/dbf79e9f84e19ea9fac6a4abab9de908498d38f6))
* add spinner for init project ([7ea6fb7](https://github.com/Andesite-Lab/Core/commit/7ea6fb753c2788ad3f3954c801fa3e147603a758))
* add start command + add EnvironnementUser service ([d9050bb](https://github.com/Andesite-Lab/Core/commit/d9050bbfd465c4538fd1bf500102d49da3b767e5))
* add templates + improvement + add config andesite yml + folder ... ([40cbb9d](https://github.com/Andesite-Lab/Core/commit/40cbb9d825701f3989042275a2e560ad2df4cc29))
* add yaml utils ([92f458f](https://github.com/Andesite-Lab/Core/commit/92f458f2d3a1623a9ff59c6d124d52fb6fcd769f))
* improvement + refactor + add build command ([7be9da5](https://github.com/Andesite-Lab/Core/commit/7be9da53882a3ef46620bb4ca9619b0536588ef3))
* update template ([010e093](https://github.com/Andesite-Lab/Core/commit/010e0935117b9fe072c2486299a149b47ea338f7))


### Bug Fixes

* change OutputPath to OutputDir ([cd3ee45](https://github.com/Andesite-Lab/Core/commit/cd3ee458def2c77f94efbbd074ed175c91e2b6ad))
* correction of invalid path ([af47b82](https://github.com/Andesite-Lab/Core/commit/af47b825660e9623d259a9ec4350d666e59ff1ca))
* move Domain/Interface to DTO for clean arch ([059519d](https://github.com/Andesite-Lab/Core/commit/059519d90d31dd5bb8815adfe6ad4c5a66b344c9))


### Code Refactoring

* improvement architecture ([8ad1a75](https://github.com/Andesite-Lab/Core/commit/8ad1a7536d072cdf70a131b41b068ee9e42ff724))
* improvement of template folder structure ([6726c2a](https://github.com/Andesite-Lab/Core/commit/6726c2a79812bbe5763655cea7623056658b7927))
* juste order import + little modif for the futur ([abfd2eb](https://github.com/Andesite-Lab/Core/commit/abfd2eb3e07a82ee35478bea6583ec4c988aecad))
* move buildFolderStructureByObject to Common Util ([f88d520](https://github.com/Andesite-Lab/Core/commit/f88d520bcd27bd1c4cf95ebb03004c2ed5ba3813))


### Build System

* downgrade packages tedious for kysely compatibility ([2d9c41c](https://github.com/Andesite-Lab/Core/commit/2d9c41ccf5a08344b38df0e42c18149bd3c4c82b))
* improvement build env ([b633881](https://github.com/Andesite-Lab/Core/commit/b6338811c230bf9da09eda1f55b1769557fb6173))
* improvement build environnement + simplify ([658b063](https://github.com/Andesite-Lab/Core/commit/658b0632538dfa241e31ac96db2a5a0cbc1cf258))
* improvement of environnement ([0162fe3](https://github.com/Andesite-Lab/Core/commit/0162fe33839f15d883a11f20a1090b593fd5b512))


### Continuous Integration

* delete coverage workflow for the moment and update node version ([c425a6d](https://github.com/Andesite-Lab/Core/commit/c425a6da996d96db616fab0907394809f4625496))
* remove useless command ([3072b0d](https://github.com/Andesite-Lab/Core/commit/3072b0da462e69256c70b97f751f4aeb2a40bed7))


### Documentation

* comment mssql creator ([ed80cd6](https://github.com/Andesite-Lab/Core/commit/ed80cd6bcdc451f7c90f452447ce7f5bf21aad7c))
* remove useless comment ([1e63758](https://github.com/Andesite-Lab/Core/commit/1e6375871fe4d192ce8fe29328da78d97715e4b4))
* update commands ([dc68720](https://github.com/Andesite-Lab/Core/commit/dc6872029a8d4f6fb5245054359d9ea3611e8afa))


### Styles

* update rule ([e9d3eb9](https://github.com/Andesite-Lab/Core/commit/e9d3eb9f9e8f4b78ee992190b28545d626688c59))

## [1.2.0](https://github.com/Andesite-Lab/Core/compare/v1.1.0...v1.2.0) (2024-05-06)


### Features

* add scripts ([c6ec0de](https://github.com/Andesite-Lab/Core/commit/c6ec0de02e6bb16306f85b696c5a28d0665f8a39))

## [1.1.0](https://github.com/Andesite-Lab/Core/compare/v1.0.1...v1.1.0) (2024-05-06)


### Features

* add "Abstract"Creator for future factory ([39fe04b](https://github.com/Andesite-Lab/Core/commit/39fe04b5dcc626f0161d114c34bf2a1e2c457b2f))
* add "Concrete" Creator for Postgres ([7d19950](https://github.com/Andesite-Lab/Core/commit/7d199509b31636c00a33070f460a8b780a07a255))
* add "Concrete" Creator for SQLite ([0837805](https://github.com/Andesite-Lab/Core/commit/08378057cc7bbf7578b0d12d29a690dfa8e10913))
* add and remove dependencies for api project ([3a2b3c1](https://github.com/Andesite-Lab/Core/commit/3a2b3c132f76c29d2521485bf00031a814aaa523))
* add enum for Infrastructure Database Error ([e2a9748](https://github.com/Andesite-Lab/Core/commit/e2a97488091e2beb097221004967e865a2844e67))
* add FactoryDatabase ([88e1ecc](https://github.com/Andesite-Lab/Core/commit/88e1eccef6ae86a37463a71aa249e90e0a4fa195))
* add folderStructure for all project type ([0f854ab](https://github.com/Andesite-Lab/Core/commit/0f854ab04e99d9f3e6714498d33591f7fb646190))
* add generator + template + error ... ([3967ff3](https://github.com/Andesite-Lab/Core/commit/3967ff3b7f55f88c4d0564fe1b3f81f0aad06c5f))
* add isConnected method ([ce13690](https://github.com/Andesite-Lab/Core/commit/ce136903ce58208168d4eea57727114aeca1de2c))
* Add new files and update existing files ([04accbc](https://github.com/Andesite-Lab/Core/commit/04accbc3ce184d30cf285fa1c8072758086e4fa7))
* add new generator + errors + comments ([8188680](https://github.com/Andesite-Lab/Core/commit/8188680b9384aa9647ba572e7ab01103d00782cc))
* add TsConfigGenerator ([500c1be](https://github.com/Andesite-Lab/Core/commit/500c1bee3bbfc23e18d8fc5616494767bb695cad))
* improve code + add deps  for all project type ([98f67f8](https://github.com/Andesite-Lab/Core/commit/98f67f8d354da637a0103d3db5eeac8526feeadb))


### Bug Fixes

* change version of tsconfig extended ([d56375c](https://github.com/Andesite-Lab/Core/commit/d56375cf50aecce2793ba0e3eaf1e65362f76441))
* forgotten dependency additions ([59bf30e](https://github.com/Andesite-Lab/Core/commit/59bf30e7d4b086d51b8f725a213b39532384fc97))
* i have no enemies ([9600e8b](https://github.com/Andesite-Lab/Core/commit/9600e8b08c2fac72c81518e519e624a2ed9610d1))
* remove useless dependencies ([3929740](https://github.com/Andesite-Lab/Core/commit/392974067c60043d36e1523fba89dd55159f309a))


### Code Refactoring

* : Refactor files ([1048431](https://github.com/Andesite-Lab/Core/commit/1048431227205b8166de7d054af3c987f83530db))
* change path ([e6ce6d8](https://github.com/Andesite-Lab/Core/commit/e6ce6d890b21e71afc5bc59acbe4d3e31c8b5b50))
* set params to readonly + update doc ([5bc8227](https://github.com/Andesite-Lab/Core/commit/5bc8227c851db16810e7baf55dc7a17192c29af0))


### Build System

* Add dependencies commander, kysely, and source-map-support ([c0e946e](https://github.com/Andesite-Lab/Core/commit/c0e946e16eb144d0e8bae1d39f9d037831da8e49))
* add handlebars dependances ([fe4f345](https://github.com/Andesite-Lab/Core/commit/fe4f3459f671870e492305e79bb2ab62372583e0))
* fix tsconfig to extend tsconfig 22 ([a993104](https://github.com/Andesite-Lab/Core/commit/a993104ccee3dd1df0ba1800942155be53a8c825))
* Update dependencies in package.json and fix eslint rules ([ea2d2e1](https://github.com/Andesite-Lab/Core/commit/ea2d2e169790888650b76306dc214caf729a8303))
* Update Node version to 22.1.0 in .nvmrc + update packages ([03f3d85](https://github.com/Andesite-Lab/Core/commit/03f3d8525556c7d0fedf87987d73cf5ca95ac428))


### Tests

* Fix I18n error messages and add tests ([0578c14](https://github.com/Andesite-Lab/Core/commit/0578c1459b85ce03b78c5ba194f2eebacba6b4b9))
* fix test for FolderStructure ([513995c](https://github.com/Andesite-Lab/Core/commit/513995c38be5692ecdc81f1bd2960fbcb9d3103d))
* tests correction ([610b2f9](https://github.com/Andesite-Lab/Core/commit/610b2f957324dd296f879cf362fd489031eb723e))


### Documentation

* update comments ([204838c](https://github.com/Andesite-Lab/Core/commit/204838cd11d4d401eb50b4959b2fc59e6c938859))

## [1.0.1](https://github.com/Andesite-Lab/Core/compare/v1.0.0...v1.0.1) (2024-04-16)


### Documentation

* improvement of comments ([fc7e126](https://github.com/Andesite-Lab/Core/commit/fc7e1268192e66fd5713128089d6f3d5bd1a2160))

## 1.0.0 (2024-04-16)


### Features

* add ErrorEntity + ErrorCommon ([ae2faa6](https://github.com/Andesite-Lab/Core/commit/ae2faa6d95a94d4e83043acebd6c7c3d974bd799))
* add hash tool ([4ea19e4](https://github.com/Andesite-Lab/Core/commit/4ea19e4cc07105bc5ab2b03cb05c518946f809cd))
* add I18n tools ([7944679](https://github.com/Andesite-Lab/Core/commit/79446796005dde91468009175eb7f9df2f5f3cf4))
* add main file to cli for later ([ef18d2a](https://github.com/Andesite-Lab/Core/commit/ef18d2a7b26f5103a7c0d6dc7b37745be059ace9))


### Build System

* check if tsconfig.tsbuildinfo before delete him ([cf8dfa4](https://github.com/Andesite-Lab/Core/commit/cf8dfa43004a925fc6819657eb11e316708c17b4))
* setup build environments ([9045b1f](https://github.com/Andesite-Lab/Core/commit/9045b1f123788e1cf7d740145a37ef8e4cb69543))
* Update .npmignore, .gitignore, .eslintrc, and package.json ([5b701ba](https://github.com/Andesite-Lab/Core/commit/5b701bacb0dc69012cf997bbeaf6b569949b17ad))
* update packages ([7b041e2](https://github.com/Andesite-Lab/Core/commit/7b041e2d1dc7f813f2346389e95e02f9337283fb))


### Tests

* add test for ErrorCommon ([5b4c92a](https://github.com/Andesite-Lab/Core/commit/5b4c92a8d85cf5a15f195f83e33cb4a633a98cef))
* add tests for ErrorEntity ([956ff73](https://github.com/Andesite-Lab/Core/commit/956ff73a024f64068beb59f8d7184c096286126e))
* add unit test for hash ([e551e2d](https://github.com/Andesite-Lab/Core/commit/e551e2d043698c4b73f252ebaa97c4d9b86bf8b5))
* add unit tests ([e30f312](https://github.com/Andesite-Lab/Core/commit/e30f312bd5146fd58bb91a264048a7d1357257a7))


### Continuous Integration

* add workflows ([f40049c](https://github.com/Andesite-Lab/Core/commit/f40049c502a0279243aa0def69c48062e12225a9))
* update command build in workflow ([3fd2a08](https://github.com/Andesite-Lab/Core/commit/3fd2a08cc69f6bcdff410db13e42b851456b1e88))
