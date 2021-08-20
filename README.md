[![Build Status](https://github.com/defra/iwtf-connectors-lib/workflows/build.yml/badge.svg)](https://github.com/defra/iwtf-connectors-lib/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=DEFRA_iwtf-connectors-lib&metric=alert_status)](https://sonarcloud.io/dashboard?id=DEFRA_iwtf-connectors-lib)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=DEFRA_iwtf-connectors-lib&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=DEFRA_iwtf-connectors-lib)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=DEFRA_iwtf-connectors-lib&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=DEFRA_iwtf-connectors-lib)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=DEFRA_iwtf-connectors-lib&metric=security_rating)](https://sonarcloud.io/dashboard?id=DEFRA_iwtf-connectors-lib)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=DEFRA_iwtf-connectors-lib&metric=ncloc)](https://sonarcloud.io/dashboard?id=DEFRA_iwtf-connectors-lib)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=DEFRA_iwtf-connectors-lib&metric=coverage)](https://sonarcloud.io/dashboard?id=DEFRA_iwtf-connectors-lib)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=DEFRA_iwtf-connectors-lib&metric=bugs)](https://sonarcloud.io/dashboard?id=DEFRA_iwtf-connectors-lib)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=DEFRA_iwtf-connectors-lib&metric=code_smells)](https://sonarcloud.io/dashboard?id=DEFRA_iwtf-connectors-lib)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=DEFRA_iwtf-connectors-lib&metric=sqale_index)](https://sonarcloud.io/dashboard?id=DEFRA_iwtf-connectors-lib)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=DEFRA_iwtf-connectors-lib&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=DEFRA_iwtf-connectors-lib)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![GitHub issues](https://img.shields.io/github/issues/DEFRA/iwtf-connectors-lib.svg)](https://github.com/DEFRA/iwtf-connectors-lib/issues/)
[![Code size](https://img.shields.io/github/languages/code-size/DEFRA/iwtf-connectors-lib.svg)]()
[![Repo size](https://img.shields.io/github/repo-size/DEFRA/iwtf-connectors-lib.svg)]()
[![Licence](https://img.shields.io/badge/licence-OGLv3-blue.svg)](http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3)

# Rod Licensing - Connectors Lib

Provides connectivity to the resources/infrastructure used in the rod licensing services

## Environment variables

| name                                | description                                                        | required | default         | valid                                                                                          | notes                                                                       |
| ----------------------------------- | ------------------------------------------------------------------ | :------: | --------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| AWS_REGION                          | The AWS region to use                                              |   yes    |                 | See [AWS Regions](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) |                                                                             |
| AWS_ACCESS_KEY_ID                   | AWS Access Key (required if running outside of AWS or without IAM) |  maybe   |                 | development, test, production                                                                  | Set to "local" when running with local infrastructure                       |
| AWS_SECRET_ACCESS_KEY               | AWS Secret Key (required if running outside of AWS or without IAM) |  maybe   |                 | development, test, production                                                                  | Set to "local" when running with local infrastructure                       |
| AWS_S3_ENDPOINT                     | Custom S3 Endpoint                                                 |    no    | Region specific |                                                                                                | Used to override the S3 service endpoint for local development              |
| AWS_SQS_ENDPOINT                    | Custom SQS Endpoint                                                |    no    | Region specific |                                                                                                | Used to override the SQS service endpoint for local development             |
| AWS_DYNAMODB_ENDPOINT               | Custom DynamoDB Endpoint                                           |    no    | Region specific |                                                                                                | Used to override the DynamoDB service endpoint for local development        |
| AWS_SECRETS_MANAGER_ENDPOINT        | Custom Secrets Manager Endpoint                                    |    no    | Region specific |                                                                                                | Used to override the Secrets Manager service endpoint for local development |
| AWS_NODEJS_CONNECTION_REUSE_ENABLED | Enable connection keep-alive in the AWS connectors                 |    no    | Disabed         | 1 or 0                                                                                         | Recommended to enable connection reuse / keep-alive                         |
| SALES_API_URL                       | URL for the sales API                                              |    no    |                 |                                                                                                |                                                                             |
| SALES_API_TIMEOUT_MS                | Request timeout for the requests to the sales API                  |    no    | 20000 (20s)     |                                                                                                |                                                                             |
| GOV_PAY_API_URL                     | The GOV.UK Pay API base url                                        |   yes    |                 |                                                                                                |                                                                             |
| GOV_PAY_APIKEY                      | GOV pay access identifier                                          |   yes    |                 |                                                                                                |                                                                             |
| GOV_PAY_REQUEST_TIMEOUT_MS          | Timeout in milliseconds for API requests                           |    no    | 10000           |                                                                                                |                                                                             |

## Prerequisites

- Node v14.13+
- Docker v18.06.0+

## Cloning

Cloning via SSH from behind a firewall which blocks port 22:

```
git clone ssh://git@ssh.github.com:443/DEFRA/iwtf-connectors-lib
```
## Contributing to this project

Please read our [contribution guidelines](CONTRIBUTING.md)

## License

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3

The following attribution statement MUST be cited in your products and applications when using this information.

> Contains public sector information licensed under the Open Government license v3

### About the license

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.
