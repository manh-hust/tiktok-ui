import { HeaderOnly } from '~/component/Layouts';

import Home from '~/pages/Home'
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import NotFound from '~/pages/NotFound';

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/search', component: Search, layout: null},
    {path: '/:somestring', component: NotFound, layout: null}
]

const privateRouters = {

}


export { publicRoutes, privateRouters}