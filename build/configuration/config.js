"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    port: process.env.PORT || 3000,
    secretyKey: process.env.SECRETYKEY || 'f5ccc0f3-cbb6-4788-b4c8-403c22cd110f',
    publicRoutes: process.env.PUBLICROUTES || [
        'users/create',
        'users/auth',
        'customer/create'
    ]
};
//# sourceMappingURL=config.js.map