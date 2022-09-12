// public Route

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

import config from '~/config';

import { HeaderOnly } from '~/layouts';

export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
        Layout: HeaderOnly,
    },
    {
        path: config.routes.upload,
        component: Upload,
        Layout: null,
    },
];

// private Route
export const privateRoutes = [];
