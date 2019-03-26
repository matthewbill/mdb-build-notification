# mdb-build-notification #

Created for the Norwich Node User Group Talk.

## Install ##

``` bash

npm install mdb-build-notification -g

```

## Setup ##

You will first need to configure your local AWS credentials and setup an AWS SQS queue.

## Running ##

After it is installed on your computer, you can run the `` and specify your SQS endpoint.

``` bash

mdb-build-notification https://sqs.us-east-1.amazonaws.com/############/build-notification

```
