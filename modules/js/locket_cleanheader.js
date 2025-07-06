delete $request.headers["x-revenuecat-etag"];
delete $request.headers["X-RevenueCat-ETag"];
delete $request.headers["Authorization"];
delete $request.headers["x-platform"];
$done({ headers: $request.headers });
