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
  var refreshtoken = voltmx.store.getItem("refreshtoken");

  var get_refresh_token_inputparam = {
    "serviceID": "ms_user_token$refresh-token",
    "httpheaders": {
      "refresh_token": refreshtoken
    },
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

var PaymentModule = {
  
 getAccessToken: function(successCallback, errorCallback) {
  var ev = "NjM0MWJkYzktMjQ4NS00OTU3LWEwZmYtZmQxZmI1M2NjZTI5OjkwMzUwODY5LTZkODgtNGExYi1hMDI3LWZkYWU3NGRiMDk1Mw==";
  var url = "https://api-gateway.sandbox.ngenius-payments.com/identity/auth/access-token";

  try {
    var request = new voltmx.net.HttpRequest();
    request.open("POST", url);

    request.setRequestHeader("Authorization", "Basic " + ev);
    request.setRequestHeader("Content-Type", "application/vnd.ni-identity.v1+json");
    request.setRequestHeader("Accept", "application/vnd.ni-identity.v1+json");

    request.onReadyStateChange = function() {
      try {
        if (request.readyState === 4) {
          voltmx.print("Request status: " + request.status);
          voltmx.print("Response: " + request.responseText);

          if (request.status === 200) {
            var token = JSON.parse(request.responseText).access_token;
            successCallback(token);
          } else {
            errorCallback("Auth failed. Status: " + request.status + " Response: " + request.responseText);
          }
        }
      } catch (e) {
        errorCallback("Error in onReadyStateChange: " + e.message);
      }
    };

    request.send(); // Make sure send is AFTER onReadyStateChange
  } catch (e) {
    errorCallback("Exception in getAccessToken outer try: " + e.message);
  }
},

  createOrder: function(token, amountValue,successCallback, errorCallback) {
    var url = "https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/c054376c-125e-4f54-917d-0cf68fce1283/orders";

    var body = {
      "action": "PURCHASE",
      "amount": {
        "currencyCode": "AED",
        "value": amountValue
      },
      merchantAttributes: {
        redirectUrl: "https://yourdomain.com/success"
      }
    };

    try {
      var request = new voltmx.net.HttpRequest();
      request.open("POST", url);
      request.setRequestHeader("Authorization", "Bearer " + token);
      request.setRequestHeader("Content-Type", "application/vnd.ni-payment.v2+json");
      request.setRequestHeader("Accept", "application/vnd.ni-payment.v2+json");

      request.onReadyStateChange = function() {
        if (request.readyState === 4) {
          if (request.status === 201 || request.status === 200) {
            var response = JSON.parse(request.responseText);
            var href = response._links.payment.href;
            successCallback(href);
          } else {
            errorCallback(" Order failed. Status: " + request.status);
          }
        }
      };

      request.send(JSON.stringify(body));
    } catch (e) {
      errorCallback(" Exception in createOrder: " + e.message);
    }
  },

launchBrowser: function(url, overlayFlex) {
  var config = {
    URL: url,
    requestMethod: constants.BROWSER_REQUEST_METHOD_GET
  };

  var basic = {
    id: "browserID",
    isVisible: true,
    requestURLConfig: config,
    height: "100%",
    width: "100%"
  };

  var layout = {
    height: "100%",
    width: "100%",
    top: "0dp",
    left: "0dp"
  };

  var psp = {};

  var browserWidget = new voltmx.ui.Browser(basic, layout, psp);
  overlayFlex.removeAll();
  overlayFlex.add(browserWidget);
  overlayFlex.isVisible = true; // Show overlay
}
};


