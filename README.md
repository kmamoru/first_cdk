# first_cdk

## Prerequisites

### AWS CLI

```bash
aws --version
>>> aws-cli/2.11.0 Python/3.11.2 Windows/10 exe/AMD64 prompt/off
```

**AWS cli account check**

```bash
aws sts get-caller-identity
```

### Node.js and npm

```bash
$ node -v
>>> v18.17.1

$ npm -v
>>> 9.6.7
```

## aws-cdk installation

```bash
npm install -g aws-cdk
```

```bash
cdk --version
>>> 2.165.0 (build 00f70f1)
```

## Create a new CDK project

```bash
mkdir first_cdk_project
cd first_cdk_project
```

```bash
cdk init app --language typescript
```

```plaintext
...
$ cdk init app --language typescript
Applying project template app for typescript
# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

Executing npm install...
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
✅ All done!
```
