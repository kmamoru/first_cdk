import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";

export class FirstCdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 bucketの作成
    const bucket = new s3.Bucket(this, "FirstCdkProjectBucket", {
      // バージョニングを有効にする
      versioned: true,

      // スタック削除時にバケットを削除する
      removalPolicy: cdk.RemovalPolicy.DESTROY,

      // スタック削除時にバケット内のオブジェクトも削除する
      autoDeleteObjects: true,
    });
  }
}
