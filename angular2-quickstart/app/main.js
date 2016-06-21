"use strict";
//imports for loading & config the in-memory web api
var http_1 = require('@angular/http');
var in_memory_backend_service_1 = require('../node_modules/angular2-in-memory-web-api/in-memory-backend.service');
var in_memory_data_service_1 = require('./in-memory-data.service');
//usual bootstrapping
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_2 = require('@angular/http');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_2.HTTP_PROVIDERS,
    { provide: http_1.XHRBackend, useClass: in_memory_backend_service_1.InMemoryBackendService },
    { provide: in_memory_backend_service_1.SEED_DATA, useClass: in_memory_data_service_1.InMemoryDataService } //in-mem server data
]);
//# sourceMappingURL=main.js.map