//Type your code here

// Function to print current epoch time
function currentEpochTime() {
  const epochMillis = new Date().getTime();
  voltmx.print("=============================");
  voltmx.print(epochMillis);
  voltmx.print("=============================");
}


function checkTokenValidatity(onSuccessCallback) {
  var epochMillis = new Date().getTime();
  var expires_in = Number(voltmx.store.getItem("userAccessTokenExp")); // stored expiry time in ms

  voltmx.print("Token expiration time: " + expires_in);
  voltmx.print("Current epoch time: " + epochMillis);

  if (expires_in > epochMillis) {
    voltmx.print("Token still valid. Proceeding with callback.");
    onSuccessCallback(); // token is valid, proceed
  } else {
    voltmx.print("Token expired. Refreshing...");
    calling_service(onSuccessCallback); // refresh and then proceed
  }
}

// Function to call the token refresh service
function calling_service(onRefreshComplete) {
  var refresh_token = voltmx.store.getItem("refreshtoken");

  var get_refresh_token_inputparam = {
    "serviceID": "ms_user_token$refresh-token",
    "httpheaders": {},
    "httpconfig": {}
  };

  mfintegrationsecureinvokerasync(
    get_refresh_token_inputparam,
    "ms_user_token",
    "refresh-token",
    function(status, response) {
      get_refresh_token_callback(status, response, onRefreshComplete);
    }
  );
}

// Properly defined callback function
function get_refresh_token_callback(status, response, onRefreshComplete) {
  if (status === 400 || !response || !response.data || !response.data.access_token) {
    voltmx.print("Token refresh failed.");
    return;
  }

  var newToken = response.data.access_token;
    var newExpiry = Number(response.data.expires_in); 

  voltmx.store.setItem("getUserAccesstoken", newToken);
  voltmx.store.setItem("userAccessTokenExp", newExpiry); // update stored expiry

  voltmx.print("New token stored. Proceeding...");
  onRefreshComplete(); // continue the original request
}


// Callback function for token refresh



function detectFileType(base64) {
  if (!base64) return ".bin";

  if (base64.startsWith("data:image/jpeg") || base64.startsWith("/9j/")) {
    return ".jpg";
  } else if (base64.startsWith("data:image/png") || base64.startsWith("iVBORw0KGgo")) {
    return ".png";
  } else if (base64.startsWith("data:image/webp") || base64.startsWith("UklG")) {
    return ".webp";
  } else if (
    base64.startsWith("data:application/pdf") || 
    base64.startsWith("JVBER")
  ) {
    return ".pdf";
  } else {
    return ".bin";
  }
}

