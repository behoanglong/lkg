/*
Locket Gold Unlocker
By: behoanglong (2025)
*/

let body = $response.body;

try {
  let obj = JSON.parse(body);
  
  obj.subscriber = {
    entitlements: {
      "pro": {
        expires_date: "2099-12-31T23:59:59Z",
        product_identifier: "locket_gold",
        purchase_date: "2023-01-01T00:00:00Z"
      }
    },
    subscriptions: {
      "locket_gold": {
        billing_issues_detected_at: null,
        expires_date: "2099-12-31T23:59:59Z",
        is_sandbox: false,
        original_purchase_date: "2023-01-01T00:00:00Z",
        period_type: "active",
        purchase_date: "2023-01-01T00:00:00Z",
        store: "app_store",
        unsubscribe_detected_at: null
      }
    }
  };

  body = JSON.stringify(obj);
} catch (err) {
  console.log("Error parsing JSON: " + err);
}

$done({ body });
