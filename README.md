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

## Build

```bash
npm run build
```

## Deploy the CDK stack

```bash
cdk deploy
```

### エラー？

```
FirstCdkProjectStack: SSM parameter /cdk-bootstrap/xxxxxxxxx/version not found. Has the environment been bootstrapped? Please run 'cdk bootstrap' (see https://docs.aws.amazon.com/cdk/latest/guide/bootstrapping.html)
```

**bootstrap を実行**

```bash
cdk bootstrap
```

```
 ⏳  Bootstrapping environment aws://000000000000/ap-northeast-1...
Trusted accounts for deployment: (none)
Trusted accounts for lookup: (none)
...
```

**再度 deploy**

```bash
$ cdk deploy

>>> Do you wish to deploy these changes (y/n)? y
FirstCdkProjectStack: deploying... [1/1]
FirstCdkProjectStack: creating CloudFormation changeset...
...

 ✅  FirstCdkProjectStack

✨  Deployment time: 42.95s

Stack ARN:
arn:aws:cloudformation:ap-northeast-1:000000000000:stack/FirstCdkProjectStack/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

```

## できたもの

### S3

- cdk-xxxxxxxxx-assets-000000000000-ap-northeast-1

  - CDK のアセットバケット
  - CDK が生成した CloudFormation テンプレートなどが保存される

- CDK で作成した S3 バケット

  - firstcdkprojectstack-firstcdkprojectbucketxxxxxxxx-xxxxxxxxxxxx
  - 特にバケット名を指定してないので、自動生成された名前

## リソースの削除

```bash
cdk destroy
```

---

# 実験

## S3 バケット名未指定 ⇒ S3 バケット名を指定してみる

```typescript
      // バケット名
      bucketName: "kmr-first-cdk-project-bucket",
```

### 結果

指定した名前で新しくバケットが作成された

以前のバケットは残ったまま

## S3 バケット名指定 ⇒ S3 バケット名を変更してみる

```typescript
      // バケット名
      bucketName: "kmr-first-cdk-project-bucket",
      ↓
      bucketName: "kmr-first-cdk-project-bucket-rename",
```

### 結果

新しいバケット(kmr-first-cdk-project-bucket-rename)が作成され、古いバケット(kmr-first-cdk-project-bucket)は中身も削除された
