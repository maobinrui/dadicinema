import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import router from './Router';


ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
