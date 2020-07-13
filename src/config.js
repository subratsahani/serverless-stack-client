export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51GrFrZBfNn8dyimJHu1Se8Ojx2pBn0j4cEkQmQ2WIa79TfUpFhnf9OPEk4AkMu30FeW13wSr4xhae8hbtkusqpj700AgJkUwqd",
    s3: {
      REGION: "us-east-2",
      BUCKET: "subrat-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://mcnpclln5k.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_hpNo5XGUP",
      APP_CLIENT_ID: "3iqb0t9nh7lc5r05vlh5fobqrl",
      IDENTITY_POOL_ID: "us-east-2:258fa54f-56ec-4f9f-81fa-b9f38a7e8e25"
    },
    social: {
      FB: "2522058168109050"
    }
  };