import React from 'react';
import './App.css';

function App() {
  return (
    <div className={'app-wrapper'}>
    <header className={'header'}>
        <img className={"logo"} src={'https://kurs.dev.nologostudio.ru/upload/resize_cache/iblock/e66/120_120_1/9g63cn03o8b7n1cuj1rar21lyo8zgasw.png'}/>
    </header>
        <nav className={'nav'}>
            <div><a>Profile</a></div>
            <div><a>Message</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
        <div className={'content'}>
            <div><img src={'https://gas-kvas.com/uploads/posts/2023-02/1675485246_gas-kvas-com-p-fonovie-risunki-na-rabochii-stol-visokogo-22.jpg'}/></div>

            <div><img src={'https://kartinkin.net/uploads/posts/2022-02/1645500423_11-kartinkin-net-p-kvadratnie-kartinki-11.jpg'}/></div>
            <div>
                <div>My post</div>
                <div>New post</div>
            </div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
                <div>post 3</div>
            </div>

        </div>
    </div>
  );
}


export default App;
