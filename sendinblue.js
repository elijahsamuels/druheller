// # ------------------
// # Create a campaign\
// # ------------------
// # Include the Sendinblue library\
var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// # Instantiate the client\
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = "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";
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

// # Define the campaign settings\
emailCampaigns.name = "Campaign sent via the API";
emailCampaigns.subject = "My subject";
emailCampaigns.sender = { name: "From name", email: "elijahsamuels@gmail.com" };
emailCampaigns.type = "classic";

// # Content that will be sent\
// htmlContent: 'Congratulations! You successfully sent this example campaign via the Sendinblue API.',

// # Select the recipients\
// recipients: {listIds: [2, 7]},

// # Schedule the sending in one hour\
// scheduledAt: '2018-01-01 00:00:01'

// # Make the call to the client\
apiInstance.createEmailCampaign(emailCampaigns)
	.then((data) => console.log("API called successfully. Returned data: " + data))
	.catch((error) => console.error(error))

// .then(
//   function (data) {
//     console.log("API called successfully. Returned data: " + data);
//   },
//   function (error) {
//     console.error(error);
//   }
// );
