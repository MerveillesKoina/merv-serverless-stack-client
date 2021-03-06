const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "my-serverless-notes-app-upload",
  },
MAX_ATTACHMENT_SIZE: 5000000,
STRIPE_KEY: "pk_test_51IlU1JKjqiFafNFICO8zH2GWPPigmTvsVNfR8qM50xaLPplNh6fEiip1a7ZsbtNNKER5mr4h6FOXPr29FGYyGW8U00sGrjWeaG",
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://qon366t7rk.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_t2cyRVmlZ",
    APP_CLIENT_ID: "20s61tsk38cdruiiou1gl9v1vc",
    IDENTITY_POOL_ID: "us-east-1:a3127341-cb4d-4444-a5e3-4f946bd69a7b",
  },
};


export default config;
