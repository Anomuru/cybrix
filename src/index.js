import {App} from "app/App";

import {StoreProvider} from "app/providers";

import "app/styles/index.sass"
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
        <App/>
    </StoreProvider>
)

// git remote add origin https://github.com/Anomuru/cybrix.git
// git branch -M main
// git push -u origin main
